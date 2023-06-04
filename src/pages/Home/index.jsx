import { useContext, useEffect, useState } from "react";
import AddButton from "../../components/AddButton";
import ListButton from "../../components/ListButton";
import api from "../../modules/api";
import Menu from "../../partials/Menu";
import './styles.css';
import { Loading } from "../../components/Loading";
import { Cards } from "../../partials/Cards";
import { AddListModal } from "../../components/AddListModal";
import { DateContext } from "../../contexts/date-context";

function Home() {
  const { date } = useContext(DateContext);

  const [listId, setListId] = useState(null);
  const [lists, setLists] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [isCreateListModalOpened, setIsCreateListModalOpened] = useState(false);
  
  async function fetchLists() {
    const { data: lists } = await api.get('list');

    setLists(lists);
  }

  async function fetchTasks() {
    const { data: cards } = await api.get(`list/${listId}/task?date=${date}`);

    setTasks(cards);
  }

  function changeList(listId) {
    setListId(listId);
  }

  useEffect(() => {
    fetchLists();
    fetchTasks();
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [listId, date]);

  useEffect(() => {
    if(lists && !listId) {
      const firstListId = lists[0]?.id;
      setListId(firstListId);
    }
  }, [lists]);

  return (
    <div className="home">
      <Menu>
        <div className="lists-header">
          <h3>
            Listas
          </h3>
          <AddButton 
            align="right" 
            onClick={() => setIsCreateListModalOpened(true)}
          >
            + criar lista
          </AddButton>
        </div>
        <div className="list-buttons">
          {
            lists === null
              ?  (
                <div className="loading-container">
                  <Loading />
                </div>
              ) : lists.map((list) => (
                <ListButton
                  selected={list.id === listId}
                  title={list.title}
                  description={list.description}
                  iconSrc={`/images/${list.icon || 'calendar'}.svg`}
                  onClick={() => changeList(list.id)}
                />
              ))
          }
        </div>
      </Menu>
      <Cards tasks={tasks} listId={listId} refetch={fetchTasks} />

      {
        isCreateListModalOpened
          ? (
            <AddListModal
              isOpened={isCreateListModalOpened}
              close={() => setIsCreateListModalOpened(false)}
              refetch={fetchLists}
            />
          ) : null
      }
    </div>
  )
}

export default Home;

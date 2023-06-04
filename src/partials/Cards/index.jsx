import { useState } from "react";
import { AddTaskModal } from "../../components/AddTaskModal";
import Card from "../../components/Card";
import CardColumn from "../../components/CardColumn";
import { Loading } from "../../components/Loading";
import api from "../../modules/api";

export function Cards(props) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  function getTasksOfColumn(column) {
    return props.tasks?.filter(task => task.currentColumn === column);
  }

  async function advanceCard(cardId) {
    await api.put(`/list/${props.listId}/task/${cardId}/advance`);
    await props.refetch();
  }

  async function returnCard(cardId) {
    await api.put(`/list/${props.listId}/task/${cardId}/return`);
    await props.refetch();
  }

  async function deleteCard(cardId) {
    await api.delete(`/list/${props.listId}/task/${cardId}`);
    await props.refetch();
  }

  function openModal() {
    setIsModalOpened(true);
  }

  function closeModal() {
    setIsModalOpened(false);
  }

  return (
    <div className="cards-section">
      <CardColumn
        title="Para fazer"
        variant="to-do"
        openModal={openModal}
      >
        {props.tasks === null && (
          <div className="loading-container">
            <Loading />
          </div>
        )}
        {
          props.tasks && getTasksOfColumn('TODO')?.map((item) => (
            <Card
              title={item.title}
              description={item.description}
              id={item.id}
              variant="to-do"
              advanceCard={advanceCard}
              deleteCard={deleteCard}
            />
          ))
        }
      </CardColumn>
      <CardColumn
        title="Progresso"
        variant="in-progress"
      >
        {props.tasks === null && (
          <div className="loading-container">
            <Loading />
          </div>
        )}
        {
          props.tasks && getTasksOfColumn('PROGRESS')?.map((item) => (
            <Card
              title={item.title} 
              description={item.description} 
              id={item.id}
              variant="progress"
              advanceCard={advanceCard}
              returnCard={returnCard}
              deleteCard={deleteCard}
            />
          ))
        }
      </CardColumn>
      <CardColumn
        title="Feito"
        variant="done"
      >
        {props.tasks === null && (
          <div className="loading-container">
            <Loading />
          </div>
        )}
        {
          props.tasks && getTasksOfColumn('DONE')?.map((item) => (
            <Card
              title={item.title} 
              description={item.description} 
              id={item.id}
              variant="done"
              returnCard={returnCard}
              deleteCard={deleteCard}
            />
          ))
        }

        <AddTaskModal isOpened={isModalOpened} close={closeModal} refetch={props.refetch} listId={props.listId} />
      </CardColumn>  
    </div>
  )
}

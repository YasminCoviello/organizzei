import { useContext, useState } from "react";
import { Modal } from "../Modal";
import './styles.css';
import api from "../../modules/api";
import { DateContext } from "../../contexts/date-context";
import { AuthContext } from "../../contexts/auth-context";

export function AddTaskModal(props) {
  const { date } = useContext(DateContext);
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const headers = {
    email: user.email
  }

  async function submit() {
    await api.post(`/list/${props.listId}/task`, { title, description, date }, { headers });
    await props.refetch();

    setTitle('');
    setDescription('');

    props.close();
  }

  if(!props.isOpened) return null;

  return (
    <Modal
      title="Criar tarefa"
      close={props.close}
      submit={submit}
    >
      <div className="form-body">
        <input 
          type="text"
          id="title"
          name="title"
          placeholder="Título da sua tarefa"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />

        <input 
          type="text"
          id="description"
          name="description"
          placeholder="Descrição da sua tarefa"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
      </div>
    </Modal>
  )
}

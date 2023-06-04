import { useContext, useState } from "react";
import { Modal } from "../Modal";
import './styles.css';
import api from "../../modules/api";
import { AuthContext } from "../../contexts/auth-context";

export function AddListModal(props) {
  const { user } = useContext(AuthContext); 

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const headers = {
    email: user.email
  }

  async function submit() {
    await api.post(`/list`, { title, description, icon: 'calendar' }, { headers });
    await props.refetch();
    props.close();
  }

  if(!props.isOpened) return null;

  return (
    <Modal
      title="Criar lista"
      close={props.close}
      submit={submit}
    >
      <div className="form-body">
        <input 
          type="text"
          id="title"
          name="title"
          placeholder="Título da sua lista"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />

        <input 
          type="text"
          id="description"
          name="description"
          placeholder="Descrição da sua lista"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
      </div>
    </Modal>
  )
}
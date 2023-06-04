import React, { useContext, useState } from 'react';
import FormPageContainer from '../../partials/FormPageContainer';
import api from '../../modules/api';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function UpdatePassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  async function onSubmit(ev) {
    ev.preventDefault();

    try {
      await api.post('/user/update-password', { email, oldPassword, newPassword });

      navigate('/login');
    } catch(e) {
      if(e.response.status >= 400 && e.response.status < 500) toast.error('Credenciais inválidas! Não foi possível alterar.');
      if(e.response.status >= 500) toast.error('Ocorreu algum problema interno!');

      setNewPassword('');
      setOldPassword('');
    }
  }

  return (
    <FormPageContainer onSubmit={onSubmit}>
      <div className="input-label">
        <label htmlFor="input-email">
          E-mail
        </label>
        <input 
          type="email" 
          id="input-email" 
          name="email" 
          className="input" 
          placeholder="email@dominio.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-label">
        <label htmlFor="input-password">
          Senha antiga
        </label>
        <input 
          type="password" 
          id="input-password" 
          name="password" 
          className="input"  
          placeholder="**********" 
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-label">
        <label htmlFor="input-new-password">
          Nova senha
        </label>
        <input 
          type="password" 
          id="input-new-password" 
          name="password" 
          className="input"  
          placeholder="**********" 
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="button">
       Entrar
      </button>
      <p className="register-label">
        Ainda não tem uma conta?
        <a className="register-link" href="/register">
          registre-se
        </a>
      </p>
    </FormPageContainer>
  );
}

export default UpdatePassword;


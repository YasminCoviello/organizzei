import React, { useState } from 'react';
import FormPageContainer from '../../partials/FormPageContainer';
import { useNavigate } from 'react-router-dom';
import api from '../../modules/api';
import { toast } from 'react-hot-toast';

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmit(ev) {
    ev.preventDefault();

    try {
      await api.post('/user/register', { name, email, imgSrc, password });

      navigate('/login');
    } catch(e) {
      if(e.response.status >= 400 && e.response.status < 500) toast.error(e.response.message);
      if(e.response.status >= 500) toast.error('Ocorreu algum problema interno!');

      setName('');
      setEmail('');
      setImgSrc('');
      setPassword('');
    }
  }

  return (
    <FormPageContainer onSubmit={onSubmit}>
      <div className="input-label">
        <label htmlFor="input-name">
          Nome
        </label>
        <input 
          type="text" 
          id="input-name" 
          className="input" 
          placeholder="João da Silva" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-label">
        <label htmlFor="input-email">
          E-mail
        </label>
        <input 
          type="email" 
          id="input-email" 
          className="input" 
          placeholder="email@teste.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-label">
        <label htmlFor="input-img-src">
          Link da foto de perfil
        </label>
        <input 
          type="text" 
          id="input-img-src" 
          className="input" 
          placeholder="https://google.com/"
          value={imgSrc}
          onChange={(e) => setImgSrc(e.target.value)}
        />
      </div>
      <div className="input-label">
        <label htmlFor="input-password">
          Senha
        </label>
        <input 
          type="password" 
          id="input-password"
          className="input" 
          placeholder="**********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-label">
        <label htmlFor="input-confirm-password">
          Confirmar senha
        </label>
        <input type="password" id="input-confirm-password" className="input" placeholder="**********" />
      </div>
      <button type="submit" className="button">
       Registrar
      </button>
      <p className="register-label">
        Já tem conta?
        <a className="register-link" href="/login">
          log-in
        </a>
      </p>
    </FormPageContainer>
  );
}

export default Register;


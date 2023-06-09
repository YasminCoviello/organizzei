import React, { useContext, useState } from 'react';
import FormPageContainer from '../../partials/FormPageContainer';
import './styles.css';
import { AuthContext } from '../../contexts/auth-context';
import api from '../../modules/api';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);

  async function onSubmit(ev) {
    ev.preventDefault();

    try {
      const { data: user } = await api.post('/user/login', { email, password });

      login(user);

      navigate('/');
    } catch(e) {
      if(e.response.status >= 400 && e.response.status < 500) toast.error('Credenciais de acesso inválidas!');
      if(e.response.status >= 500) toast.error('Ocorreu algum problema interno!');

      setPassword('');
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
          Senha
        </label>
        <input 
          type="password" 
          id="input-password" 
          name="password" 
          className="input"  
          placeholder="**********" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <a 
        className="button contained forgot-password"
        href="/password-recovery"
      >
        Esqueci minha senha
      </a>
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

export default Login;


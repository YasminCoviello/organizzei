import React from 'react';
import FormPageContainer from '../../partials/FormPageContainer';
import './styles.css';

function Login() {
  return (
    <FormPageContainer>
      <div className="input-label">
        <label htmlFor="input-email">
          E-mail
        </label>
        <input type="email" id="input-email" class="input" placeholder="email@teste.com" />
      </div>
      <div className="input-label">
        <label htmlFor="input-password">
          Senha
        </label>
        <input type="password" id="input-password" class="input" placeholder="**********" />
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


import React from 'react';
import FormPageContainer from '../../partials/FormPageContainer';

function Register() {
  return (
    <FormPageContainer>
      <div className="input-label">
        <label htmlFor="input-name">
          Nome
        </label>
        <input type="text" id="input-name" class="input" placeholder="João da Silva" />
      </div>
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
      <div className="input-label">
        <label htmlFor="input-confirm-password">
          Confirmar senha
        </label>
        <input type="password" id="input-confirm-password" class="input" placeholder="**********" />
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


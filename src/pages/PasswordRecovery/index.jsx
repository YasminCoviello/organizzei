import React from 'react';
import FormPageContainer from '../../partials/FormPageContainer';

function PasswordRecovery() {
  return (
    <FormPageContainer>
      <div className="input-label">
        <label htmlFor="input">
          E-mail para recuperação de senha
        </label>
        <input type="email" id="input" class="input" placeholder="email@teste.com" />
      </div>
      <button type="submit" className="button">
       Enviar
      </button>
      <p className="register-label">
        Lembrou sua senha?
        <a className="register-link" href="/login">
          log-in
        </a>
      </p>
    </FormPageContainer>
  );
}

export default PasswordRecovery;


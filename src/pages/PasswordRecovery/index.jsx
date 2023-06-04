import React, { useState } from 'react';
import FormPageContainer from '../../partials/FormPageContainer';
import api from '../../modules/api';
import { toast } from 'react-hot-toast';

function PasswordRecovery() {
  const [email, setEmail] = useState('');

  async function onSubmit(ev) {
    ev.preventDefault();

    try {
      const { data: user } = await api.post('/user/recover-password', { email });

      toast.success(`Sua senha é: ${user.password}`);
    } catch(e) {
      toast.error('Não foi possível recuperar sua senha!')
    }
  }

  return (
    <FormPageContainer onSubmit={onSubmit}>
      <div className="input-label">
        <label htmlFor="input">
          E-mail para recuperação de senha
        </label>
        <input 
          type="email"
          id="input" 
          className="input" 
          placeholder="email@teste.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
        <a
          className="button contained forgot-password"
          href="/update-password"
        >
          Alterar senha
        </a>
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


import React, { useState } from 'react';

const LoginPage = () => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const loginLogic = () => {
    
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Nome de Usuário:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="button" onClick={loginLogic}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
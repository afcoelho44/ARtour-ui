import React, { useState } from 'react';

export default function CreateCategoriaPage() {
  const [nome, setNomeCategoria] = useState('');

  const categoriaLogic = () => {
    // Lógica da categoria aqui
  };

  return (
    <div>
      <h2>Criação de categoria</h2>
      <form>
        <div>
          <label>Nome da categoria</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNomeCategoria(e.target.value)}
          />
        </div>
        
        <button type="button" onClick={categoriaLogic}>
          Entrar
        </button>
      </form>
    </div>
  );
}
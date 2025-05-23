import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Criar.css';

function Criar() {
  const [filme, setFilme] = useState({ nome: '', genero: '', ano: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://682e0c67746f8ca4a47bb2b4.mockapi.io/filmes', filme)
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div className="fundo-escuro">
      <div className='criar-container'>
        <h2 className='criar-title'>Criar Novo Filme</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='criar-label'>Nome:</label>
            <input
              type='text'
              className='form-control'
              onChange={(e) => setFilme({ ...filme, nome: e.target.value })}
            />
          </div>
          <div className='mb-3'>
            <label className='criar-label'>Gênero:</label>
            <input
              type='text'
              className='form-control'
              onChange={(e) => setFilme({ ...filme, genero: e.target.value })}
            />
          </div>
          <div className='mb-3'>
            <label className='criar-label'>Ano:</label>
            <input
              type='text'
              className='form-control'
              onChange={(e) => setFilme({ ...filme, ano: e.target.value })}
            />
          </div>
          <button className='btn btn-success criar-btn'>Criar</button>
          <Link to='/' className='btn btn-secondary ms-2 criar-btn'>Cancelar</Link>
        </form>
      </div>
    </div>
  );
}

export default Criar;

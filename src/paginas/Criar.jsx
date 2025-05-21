import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

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
    <div className='container py-4'>
      <h2>Criar Novo Filme</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label>Nome:</label>
          <input type='text' className='form-control' onChange={(e) => setFilme({ ...filme, nome: e.target.value })} />
        </div>
        <div className='mb-3'>
          <label>Gênero:</label>
          <input type='text' className='form-control' onChange={(e) => setFilme({ ...filme, genero: e.target.value })} />
        </div>
        <div className='mb-3'>
          <label>Ano:</label>
          <input type='text' className='form-control' onChange={(e) => setFilme({ ...filme, ano: e.target.value })} />
        </div>
        <button className='btn btn-success'>Criar</button>
        <Link to='/' className='btn btn-secondary ms-2'>Cancelar</Link>
      </form>
    </div>
  );
}

export default Criar;
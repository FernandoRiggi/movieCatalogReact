import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Alterar() {
  const [id, setId] = useState('');
  const [filme, setFilme] = useState(null);
  const navigate = useNavigate();

  const buscarFilme = () => {
    axios.get(`https://682e0c67746f8ca4a47bb2b4.mockapi.io/filmes/${id}`)
      .then(res => setFilme(res.data))
      .catch(() => setFilme(null));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://682e0c67746f8ca4a47bb2b4.mockapi.io/filmes/${id}`, filme)
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div className='container py-4'>
      <h2>Alterar Filme</h2>
      {!filme ? (
        <div>
          <input type='text' placeholder='ID do filme' className='form-control mb-2' value={id} onChange={(e) => setId(e.target.value)} />
          <button className='btn btn-primary me-2' onClick={buscarFilme}>Procurar</button>
          <Link to='/' className='btn btn-secondary'>Cancelar</Link>
        </div>
      ) : (
        <form onSubmit={handleUpdate}>
          <div className='mb-3'>
            <label>Nome:</label>
            <input type='text' className='form-control' value={filme.nome} onChange={(e) => setFilme({ ...filme, nome: e.target.value })} />
          </div>
          <div className='mb-3'>
            <label>Gênero:</label>
            <input type='text' className='form-control' value={filme.genero} onChange={(e) => setFilme({ ...filme, genero: e.target.value })} />
          </div>
          <div className='mb-3'>
            <label>Ano:</label>
            <input type='text' className='form-control' value={filme.ano} onChange={(e) => setFilme({ ...filme, ano: e.target.value })} />
          </div>
          <button className='btn btn-success'>Alterar</button>
          <Link to='/' className='btn btn-secondary ms-2'>Cancelar</Link>
        </form>
      )}
    </div>
  );
}

export default Alterar;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Apagar() {
  const [id, setId] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`https://682e0c67746f8ca4a47bb2b4.mockapi.io/filmes/${id}`)
      .then(() => {
        setMensagem('Filme apagado com sucesso!');
        setTimeout(() => navigate('/'), 1000);
      })
      .catch(() => setMensagem('Erro ao apagar.'));
  };

  return (
    <div className='container py-4'>
      <h2>Apagar Filme</h2>
      <input type='text' placeholder='ID do filme' className='form-control mb-2' value={id} onChange={(e) => setId(e.target.value)} />
      <button className='btn btn-danger me-2' onClick={handleDelete}>Apagar</button>
      <Link to='/' className='btn btn-secondary'>Cancelar</Link>
      {mensagem && <p className='mt-2'>{mensagem}</p>}
    </div>
  );
}

export default Apagar;
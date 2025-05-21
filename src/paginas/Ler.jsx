import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Ler() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});

  useEffect(() => {
    axios.get(`https://682e0c67746f8ca4a47bb2b4.mockapi.io/filmes/${id}`)
      .then(res => setFilme(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className='container py-4'>
      <h2>Detalhes do Filme</h2>
      <p><strong>ID:</strong> {filme.id}</p>
      <p><strong>Nome:</strong> {filme.nome}</p>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Ano:</strong> {filme.ano}</p>
      <Link to='/' className='btn btn-secondary'>Cancelar</Link>
    </div>
  );
}

export default Ler;
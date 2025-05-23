import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './Ler.css';

function Ler() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});

  useEffect(() => {
    axios.get(`https://682e0c67746f8ca4a47bb2b4.mockapi.io/filmes/${id}`)
      .then(res => setFilme(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="fundo-escuro">
      <div className='ler-container'>
        <h2 className='ler-title'>Detalhes do Filme</h2>
        <p className='ler-info'><strong className='ler-label'>ID:</strong> {filme.id}</p>
        <p className='ler-info'><strong className='ler-label'>Nome:</strong> {filme.nome}</p>
        <p className='ler-info'><strong className='ler-label'>Gênero:</strong> {filme.genero}</p>
        <p className='ler-info'><strong className='ler-label'>Ano:</strong> {filme.ano}</p>
        <Link to='/' className='btn btn-secondary'>Cancelar</Link>
      </div>
    </div>
  );
}

export default Ler;

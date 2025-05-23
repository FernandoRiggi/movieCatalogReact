import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Alterar.css';

function Alterar() {
  const [id, setId] = useState('');
  const [filme, setFilme] = useState(null);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const buscarFilme = async () => {
    if (id.trim() === '') {
      setErro('Por favor, insira um ID.');
      setFilme(null);
      return;
    }

    try {
      const res = await axios.get(`https://682e0c67746f8ca4a47bb2b4.mockapi.io/filmes/${id}`);
      console.log(res.data); 
      if (!res.data || Object.keys(res.data).length === 0) {
        setErro('ID inválido ou filme não encontrado.');
        setFilme(null);
      } else {
        setFilme(res.data);
        setErro('');
      }
    } catch (err) {
      setErro('ID inválido ou filme não encontrado.');
      setFilme(null);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log('Enviando para atualizar:', filme);
      await axios.put(`https://682e0c67746f8ca4a47bb2b4.mockapi.io/filmes/${id}`, filme);
      navigate('/');
    } catch (err) {
      console.log('Erro ao atualizar:', err);
    }
  };

  return (
    <div className="fundo-escuro">
      <div className='alterar-container'>
        <h2 className='alterar-title'>Alterar Filme</h2>

        {!filme ? (
          <div>
            <input
              type='text'
              placeholder='ID do filme'
              className='form-control mb-2'
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button className='btn btn-primary me-2 alterar-btn' onClick={buscarFilme}>Procurar</button>
            <Link to="/" className="btn btn-secondary alterar-btn">Voltar</Link>
            {erro && <p className="text-danger mt-2">{erro}</p>}
          </div>
        ) : (
          <form onSubmit={handleUpdate}>
            <div className='mb-3'>
              <label className='alterar-label'>Nome</label>
              <input
                type='text'
                className='form-control'
                value={filme.nome || ''}
                onChange={(e) => setFilme({ ...filme, nome: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label className='alterar-label'>Gênero</label>
              <input
                type='text'
                className='form-control'
                value={filme.genero || ''}
                onChange={(e) => setFilme({ ...filme, genero: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label className='alterar-label'>Ano</label>
              <input
                type='number'
                className='form-control'
                value={filme.ano || ''}
                onChange={(e) => setFilme({ ...filme, ano: e.target.value })}
              />
            </div>
            <button type='submit' className='btn btn-success me-2 alterar-btn'>Salvar</button>
            <Link to="/" className="btn btn-secondary alterar-btn">Cancelar</Link>
          </form>
        )}
      </div>
    </div>
  );
}

export default Alterar;

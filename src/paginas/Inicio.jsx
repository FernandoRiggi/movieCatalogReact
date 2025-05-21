import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Inicio.css';  // importe o arquivo CSS

function Inicio() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get('https://682e0c67746f8ca4a47bb2b4.mockapi.io/filmes')
      .then(res => setFilmes(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="fundo-escuro">
      <div className="card-dark">
        <h1 className="card-title-dark">Catálogo de Filmes</h1>

        <div className="botao-grupo-dark">
          <Link to="/" className="btn btn-primary-dark btn-dark">Início</Link>
          <Link to="/criar" className="btn btn-success-dark btn-dark">Adicionar</Link>
          <Link to="/alterar/" className="btn btn-warning-dark btn-dark">Alterar</Link>
          <Link to="/apagar/" className="btn btn-danger-dark btn-dark">Apagar</Link>
        </div>

        <table className="table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filmes.map((filme) => (
              <tr key={filme.id}>
                <td>{filme.id}</td>
                <td>{filme.nome}</td>
                <td>
                  <Link to={`/ler/${filme.id}`} className="btn btn-primary-dark btn-dark btn-sm">Ver</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inicio;

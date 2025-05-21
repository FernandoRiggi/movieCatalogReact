import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Ler from './paginas/Ler';
import Criar from './paginas/Criar';
import Alterar from './paginas/Alterar';
import Apagar from './paginas/Apagar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/ler/:id' element={<Ler />} />
        <Route path='/criar' element={<Criar />} />
        <Route path='/alterar' element={<Alterar />} />
        <Route path='/apagar' element={<Apagar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
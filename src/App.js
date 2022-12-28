import { BaseColaboradores } from './Datos/DatosColaboradores.js'
import { useState } from 'react';
import Colaboradores from './Componentes/Colaboradores.jsx'; 
import FormularioColaboradores from './Componentes/FormularioColaboradores.jsx';
import Buscador from './Componentes/Buscador.jsx';

function App() {
const [lstColab, setLstColab] = useState(BaseColaboradores);
const [buscador, setBuscador] = useState('');

  return (
    <div className="App">
      <Buscador lstColab={lstColab} setBuscador={setBuscador} buscador={buscador} />
      <FormularioColaboradores lstColab={lstColab} setLstColab={setLstColab}/>
      <Colaboradores lstColab={lstColab} buscador={buscador} />
      
    </div>
  );
}

export default App;

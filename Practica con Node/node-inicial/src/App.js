import logo from './logo.svg';
import './App.css';
import Coche from './Componentes/Coche';
import Caja from './Componentes/Caja';
import Salario from './Componentes/Salario';
import Empleado from './Componentes/Empleado';

function App() {
  return (
    <div className="App">
      <h1>Practias React</h1>
      <Coche />
      <br/>
      <hr/>
      <br/>
      <Salario salario_total={10000} impuestos={21} />
      <br/>
      <hr/>
      <br/>
      <Caja />
      <br/>
      <hr/>
      <br/>
      <Empleado />
    </div>
  );
}

export default App;

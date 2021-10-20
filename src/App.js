import '../node_modules/primereact/resources/primereact.min.css'; //Core CSS
import '../node_modules/primeicons/primeicons.css'; //Iconos
import '../node_modules/primereact/resources/themes/saga-blue/theme.css'; //Bootstrap 4 Theme

import Personas from './components/lista_personas';
import Contador from './components/contador_hooks';
import ContadorStd from './components/contador_standard';

function App() {
  return (
    <div className="App">
      <Contador></Contador>
    <br/>
    <ContadorStd></ContadorStd>
    <Personas></Personas>
    </div>
  );
}

export default App;

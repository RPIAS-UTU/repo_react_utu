import '../node_modules/primereact/resources/primereact.min.css'; //Core CSS
import '../node_modules/primeicons/primeicons.css'; //Iconos
import '../node_modules/primereact/resources/themes/saga-blue/theme.css'; //Bootstrap 4 Theme


import Personas from './componentes/lista_personas';
import Contador from './componentes/contador_hooks';
import ContadorStd from './componentes/contador_standard';
import Combo from './componentes/combo';
import ComboPrimeReact from './componentes/dropdown_primereact';
import CreadorMemes from './componentes/memes_credor';

function App() {
  return (
    <div className="App">
      <Contador></Contador>
    <br/>
    <ContadorStd></ContadorStd>
    <Personas></Personas>
    <br/>
    { <Combo></Combo> }
    <br/>
    <ComboPrimeReact></ComboPrimeReact>
    <br/>

    <CreadorMemes></CreadorMemes>
    </div>
  );
}

export default App;

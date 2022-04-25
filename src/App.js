import '../node_modules/primereact/resources/primereact.min.css'; //Core CSS
import '../node_modules/primeicons/primeicons.css'; //Iconos
import '../node_modules/primereact/resources/themes/saga-blue/theme.css'; //Bootstrap 4 Theme
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

import Personas from './componentes/lista_personas';

import Combo from './componentes/combo';
import ComboPrimeReact from './componentes/dropdown_primereact';
import CreadorMemes from './componentes/memes_credor';
import Menu from './componentes/menu';
import ContadoresComp from './componentes/contadores';
import Home from './componentes/home';


function App() {
  return (

    <div className="App">

<Router>
    <Switch>
    <Route path="/" component={Home} />
    <Route path="/contador" component={ContadoresComp} />
 
  </Switch>
  </Router>
  <br />

      {/* <Menu></Menu>
     
      <Personas></Personas>
      <br />
      {<Combo></Combo>}
      <br />
      <ComboPrimeReact></ComboPrimeReact> */}
      <br />

      <CreadorMemes></CreadorMemes>

      <br />
      <br />
      <br />
    </div>
  );
}

export default App;

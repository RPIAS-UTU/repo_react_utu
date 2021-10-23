// https://flagpedia.net/data/flags/normal/uy.png
// http://country.io/data/  

import React from 'react';
import axios from "axios";
import {Dropdown} from 'primereact/dropdown';


class ComboPrimeReact extends React.Component {


  constructor(props) {
    super(props);
    this.state = {id_seleccionado: 0, paises: []};
    //  this.onPaisChange = this.onPaisChange.bind(this);
    // this.onPaisSubmit = this.onPaisSubmit.bind(this);
    //    this.paises = [{ name: 'Berlin', value: 'Berlin' },
    //    { name: 'Frankfurt', value: 'Frankfurt' },
    //    { name: 'Hamburg', value: 'Hamburg' },
    //    { name: 'Munich', value: 'Munich' }];

    /*this.paises = this.cargarPaises();*/
  }

  onPaisChange(evento) {

    this.setState({
      id_seleccionado: evento.target.value
    });

    // si quisiera cargar algo despues de la seleccion
    //   this.setState({
    //     id_seleccionado: evento.target.value
    //   },() => { this.cargarAlgo(); });
  }

  onPaisSubmit(event) {
    this.preventDefault();
  }

  componentDidMount() {
    this.cargarPaises();
  }

  cargarPaises() {
    let america = 'region/ame';
    let all = 'all';
    axios.get(`https://restcountries.com/v3.1/${all}`)
      .then(res => {
        console.log(res.data);

        let paises = [];

        // Recorro el array de países de la petición
        res.data.forEach(pais => {
          let pais_reestructurado = {
            name: `${pais.flag} ${pais.translations.spa.common}`,
            code: pais.cca2 // Código de país
          }

          // Lo añado al array de países
          paises.push(pais_reestructurado);
        });
        // Añado el array de paises al state del componente
        this.setState({
          id_seleccionado: this.state.id_seleccionado,
          paises
        });

      }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">

        <Dropdown style={{marginLeft: 10,}}
                  value={this.state.id_seleccionado}
                  /* Le paso el array de países que esta en el state */
                  options={this.state.paises}

                  /* Se le puede agregar un buscador por nombre*/
                  /* filter showClear filterBy="name" */
                  onChange={(e) => this.onPaisChange(e)}
                  optionLabel="name"
                  placeholder="Seleccione País"/>
      </div>
    );
  }
}

export default ComboPrimeReact;
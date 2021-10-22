
// https://flagpedia.net/data/flags/normal/uy.png
// http://country.io/data/  

import React from 'react';
import axios from "axios";
import { Dropdown } from 'primereact/dropdown';


class ComboPrimeReact extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {id_seleccionado: 0 };  
      //  this.onPaisChange = this.onPaisChange.bind(this);
       // this.onPaisSubmit = this.onPaisSubmit.bind(this);
    //    this.paises = [{ name: 'Berlin', value: 'Berlin' }, 
    //    { name: 'Frankfurt', value: 'Frankfurt' },  
    //    { name: 'Hamburg', value: 'Hamburg' }, 
    //    { name: 'Munich', value: 'Munich' }];

       this.paises = this.cargarPaises();
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
    axios.get('https://restcountries.com/v3.1/all')
    .then(res => {
        console.log(res.data);
      return res.data;
    }).catch(error => {
        console.log(error);
    });
}

    render() {
        return (
            <div className="App">

                <Dropdown style={{ marginRight: 10, }} 
                value={this.state.id_seleccionado} 
                options={this.paises}
                onChange={(e) => this.onPaisChange(e)} 
                optionLabel="name" 
                placeholder="Seleccione País" />


            </div>
        );
    }
}

export default ComboPrimeReact;




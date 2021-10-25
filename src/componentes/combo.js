import React from 'react';
import axios from "axios";

 // ES6 - ECMAScript 6

class Combo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ciudades: [] };
    }

    componentDidMount() {

        axios.get('https://direcciones.ide.uy/api/v0/geocode/localidades?departamento=salto')
            .then(res => {
                console.log(res);
                this.setState({ ciudades: res.data });
            }).catch(error => {
                console.log(error);
            });
    }
  
    render() {
        return (
            <div className="App">
                <div className="form-group">
                    <select className="form-control" name="ciudades">
                        <option value="">Seleccione una ciudad</option>
                        {this.state.ciudades.map(ciudad=>(
                            <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>
                        )
                        )}
                    </select>
                </div>
               
            </div>
        );
    }
}

export default Combo;




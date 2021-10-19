import React from 'react';
// import '../../node_modules/primereact/resources/primereact.min.css'; //Core CSS
// import '../../node_modules/primeicons/primeicons.css'; //Iconos
import {DataTable} from '../../node_modules/primereact/datatable';
import {Column} from '../../node_modules/primereact/column';

class Personas extends React.Component
{

    // Si no inicializas el estado y no enlazas los métodos, no necesitas implementar un constructor para tu componente React.
    // El constructor para un componente React es llamado antes de ser montado. Al implementar el constructor para una subclase React.Component, deberías llamar a super(props) antes que cualquier otra instrucción. De otra forma, this.props no estará definido en el constructor, lo que puede ocasionar a errores.
    // Normalmente, los constructores de React sólo se utilizan para dos propósitos:
    // Para inicializar un estado local asignando un objeto al this.state.
    // Para enlazar manejadores de eventos a una instancia.
    // No debes llamar setState() en el constructor(). En su lugar, 
    // si su componente necesita usar el estado local, asigna directamente el estado inicial 
    // al this.state directamente en el constructor.
    // El constructor es el único lugar donde debes asignar this.state directamente. 
    // En todos los demás métodos, debes usar this.setState() en su lugar.
    constructor(props)
    {
        super(props);
        this.state = 
        {
            personas : []
            
        }
    }

    // componentDidMount() se invoca inmediatamente después de que un componente se monte
    // (se inserte en el árbol). La inicialización que requiere nodos DOM debería ir aquí. 
    // Si necesita cargar datos desde un punto final remoto, este es un buen lugar para 
    // instanciar la solicitud de red.
    componentDidMount()
    {
        this.cargarPersonas();
    };

    // El método render() es el único método requerido en un componente de clase.
    // Cuando se llama, debe examinar a this.props y this.state.
    render()
    {
        return(
        <div>
           <div>
                <div className="card">
                    <DataTable value={this.state.personas}>
                        <Column field="cedula" header="cedula"></Column>
                        <Column field="primer_nombre" header="primer_nombre"></Column>
                        <Column field="segundo_nombre" header="segundo_nombre"></Column>
                        <Column field="primer_apellido" header="primer_apellido"></Column>
                        <Column field="segundo_apellido" header="segundo_apellido"></Column>
                        <Column field="fecha_nac" header="fecha_nac"></Column>
                    </DataTable>
                </div>
            </div>
            
        </div>
        );
        
    };


    cargarPersonas()
    {
        this.setState({personas: []});

        var url = "http://localhost:8000/repo_php_utu/datos/api_rest/personas?pagina=2";

        fetch(url,{'mode': 'no-cors'})
        .then(respuesta => respuesta.json())
        .then((datosRespuesta) => 
        {
            this.setState({loadingPersonas: true})
            this.setState({ datosCargados: true, personas: datosRespuesta})
        }).catch(console.log).finally(() => this.setState({loadingPersonas: false}));
    };


}

export default Personas;
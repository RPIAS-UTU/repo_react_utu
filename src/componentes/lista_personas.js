import React from 'react';

import {DataTable} from '../../node_modules/primereact/datatable';

class Personas extends React.Component
{


    constructor(props)
    {
        super(props);
        this.state = 
        {
            personas : []
            
        }
    }

    
    componentDidMount()
    {
        this.cargarLlamados();
    };

    render()
    {
        return(
        <div className="llamados">
            <Toolbar className="p-mb-4" left={this.elementosIzquierdaLlamados.bind(this)} right={this.elementosDerechaLlamados.bind(this)}>

            </Toolbar>
            
            <DataTable ref={(el) => { this.dtLlamados = el; }} value={this.state.llamados} paginator  dataKey="llamadoId"
             paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
             currentPageReportTemplate="Mostrando {first} de {last}" rows={10} rowsPerPageOptions={[10,20,50]}
             selectionMode="single" loading={this.state.loadingLlamados}>
                 
                {
                    this.columnasLlamados.map((col, index) => <Column key={index} field={col.field} header={col.header} style={{fontWeight: 'bold'}} sortable={true} />) 
                }

                {
                    this.state.llamados.length > 0
                    ? <Column header = "Opciones" body={this.botonesLlamado.bind(this)}></Column>
                    : null
                }

            </DataTable>

            {
                this.state.llamadoSeleccionado != null 
                ?<Dialog className="p-fluid" visible={this.state.verLlamadoDialog} onHide={this.cerrarVerLlamado.bind(this)}
                header="Detalles" >
                    <div className="flex justify-content-center flex-wrap card-container yellow-container">
                        <div className="inline-block text-center card-container m-1">
                            <div className="font-bold text-white bg-blue-500 p-2 border-round">
                                Id
                            </div>
                            <p className="surface-overlay p-2 m-0 font-bold">
                                {this.state.llamadoSeleccionado.llamadoId}
                            </p>
                        </div>
                        <div className="inline-block text-center card-container m-1">
                            <div className="font-bold text-white bg-blue-500 p-2 border-round">
                                Codigo
                            </div>
                            <p className="surface-overlay p-2 m-0 font-bold">
                                {this.state.llamadoSeleccionado.codigo}
                            </p>
                        </div>
                        <div className="inline-block text-center card-container m-1">
                            <div className="font-bold text-white bg-orange-600 p-2 border-round">
                                Fecha Inicio
                            </div>
                            <p className="surface-overlay p-2 m-0 font-bold">
                                {this.state.llamadoSeleccionado.fechaInicio}
                            </p>
                        </div>
                        <div className="inline-block text-center card-container m-1">
                            <div className="font-bold text-white bg-orange-600 p-2 border-round">
                                Fecha Fin
                            </div>
                            <p className="surface-overlay p-2 m-0 font-bold">
                                {this.state.llamadoSeleccionado.fechaFin}
                            </p>
                        </div>
                    </div>

                    <div className="block text-center card-container m-1">
                        <div className="font-bold text-white bg-blue-700 p-2 border-round">
                            Titulo
                        </div>
                        <p className="surface-overlay p-2 m-0 font-bold">
                            {this.state.llamadoSeleccionado.titulo}
                        </p>
                    </div>

                    <div className="flex justify-content-center flex-wrap card-container yellow-container">
                        <div className="inline-block text-center card-container m-1">
                            <div className="font-bold text-white bg-blue-700 p-2 border-round">
                                Tipo
                            </div>
                            <p className="surface-overlay p-2 m-0 font-bold">
                                {this.state.llamadoSeleccionado.tipo}
                            </p>
                        </div>
                        <div className="inline-block text-center card-container m-1">
                            <div className="font-bold text-white bg-blue-700 p-2 border-round">
                                Alcance
                            </div>
                            <p className="surface-overlay p-2 m-0 font-bold">
                                {this.state.llamadoSeleccionado.alcance}
                            </p>
                        </div>
                        <div className="inline-block text-center card-container m-1">
                            <div className="font-bold text-white bg-blue-700 p-2 border-round">
                                Estado
                            </div>
                            <p className="surface-overlay p-2 m-0 font-bold">
                                {this.state.llamadoSeleccionado.estado}
                            </p>
                        </div>
                        <div className="inline-block text-center card-container m-1">
                            <div className="font-bold text-white bg-blue-700 p-2 border-round">
                                Id Articulo
                            </div>
                            <p className="surface-overlay p-2 m-0 font-bold">
                                {this.state.llamadoSeleccionado.idArticuloDetalle}
                            </p>
                        </div>
                        <div className="inline-block text-center card-container m-1">
                            <div className="font-bold text-white bg-blue-700 p-2 border-round">
                                Publicado
                            </div>
                            <p className="surface-overlay p-2 m-0 font-bold">
                                {this.state.llamadoSeleccionado.publicado ? "SI" : "NO"}
                            </p>
                        </div>
                        <div className="inline-block text-center card-container m-1">
                            <div className="font-bold text-white bg-orange-600 p-2 border-round">
                                Total de Inscriptos
                            </div>
                            <p className="surface-overlay p-2 m-0 font-bold">
                                {this.state.totalInscriptos}
                            </p>
                        </div>
                    </div>
                    <Toolbar className="p-mb-4" left={this.elementosIzquierdaInscriptos.bind(this)} right={this.elementosDerechaInscriptos.bind(this)}></Toolbar>
                    <DataTable ref={(el) => { this.dtInscriptos = el; }} value={this.state.inscriptos} paginator  dataKey="inscriptoId"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Mostrando {first} de {last}" rows={100} rowsPerPageOptions={[100,200,500]}
                    selectionMode="single" loading={this.state.loadingInscriptos}>
                        
                        {
                            this.columnasInscriptos.map((col, index) => <Column key={index} field={col.field} header={col.header} style={{fontWeight: 'bold'}} sortable={true} />) 
                        }

                    </DataTable>

                </Dialog>
                : null
            }
            
        </div>
        );
        
    };


    cargarLlamados()
    {
        this.setState({personas: []});

        var url = "http://localhost:8000/repo_php_utu/datos/api_rest/personas";

        fetch(url)
        .then(respuesta => respuesta.json())
        .then((datosRespuesta) => 
        {
            this.setState({loadingPersonas: true})
            this.setState({ datosCargados: true, llamados: datosRespuesta})
        })
        .catch(console.log)
        .finally(() => this.setState({loadingPersonas: false}));


    };


}
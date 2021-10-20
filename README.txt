
============================================================================================================
Referecnias

https://es.reactjs.org/docs
https://es.reactjs.org/docs/thinking-in-react.html
https://es.reactjs.org/docs/create-a-new-react-app.html
https://es.reactjs.org/docs/react-component.html

Hooks in React
https://www.youtube.com/watch?v=sxylafSufqc

============================================================================================================

Probar React OnLine

https://codepen.io/pen

============================================================================================================

Instrucciones

Crear y correr proyecto react.

1.- Instalar Node.js
2.- Crear proyecto React : npx create-react-app my-app
3.- Ejecutar proyecto React : npm start

Clonar y construir dependencias.

1.- Clonar repo de Git : https://github.com/rpias/repo_react_utu
2.- Para construir las dependecias de un proyecto en React : npm install

============================================================================================================

Utilizamos Axios para consumir APIs

npm install axios

============================================================================================================

Utilizar PrimeReact : https://primefaces.org/primereact/showcase/#/setup
PrimeReact es un rico conjunto de componentes nativos de código abierto para React.
PrimeReact está disponible en npm, asi que si queremos integrarlo a nuetra app ejecutamos :

1.- npm install primereact --save
2.- npm install primeicons --save
3.- npm install react-transition-group

La mayoría de los componentes de PrimeReact (95%) son nativos y 
hay algunas excepciones que tienen dependencias de terceros, como Google Maps para GMap.
Los componentes requieren la biblioteca PrimeIcons para iconos y react-transition-group para animaciones.


============================================================================================================


El ciclo de vida del componente
Cada componente tiene varios “métodos de ciclo de vida” que puedes sobrescribir para ejecutar código en momentos particulares del proceso. Puedes usar este diagrama de ciclo de vida como una hoja de referencia. En la lista de abajo, los métodos de ciclo de vida comúnmente usados están marcados en negrita. El resto de ellos existen para casos de uso relativamente raros.

Montaje
Estos métodos se llaman cuando se crea una instancia de un componente y se inserta en el DOM:

constructor()
static getDerivedStateFromProps()
render()
componentDidMount()
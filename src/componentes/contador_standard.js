import React from 'react';

class ContadorStd extends React.Component {
  
  constructor(props)
  {
      super(props);
      this.state = {contador: 0};
  }

  // onClickHandler(){
  //   this.setState({
  //      contador : this.state.contador+1
  //   });
  // }

  render()
  {
    return (
        <div>
          <p>Has cliqueado {this.state.contador} veces</p>
          <button onClick={() =>   this.setState({   contador : this.state.contador + 1  })}>
            Incrementar
          </button>
        </div>
      );
  }
 }

export default ContadorStd;
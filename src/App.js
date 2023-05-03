import React, { Component }  from 'react'; 

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: 'Laiza',
      contador: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){
    // console.log('aumentar');
    let state = this.state;
    state.contador += 1; 
    state.name= "Kevin";
    this.setState(state)
  }

  diminuir(){
    // console.log('diminuir');
    let state= this.state;

    if(state.contador === 0 ) {
      alert('Opa, chegou a zero!')
      return;
    }
  
    state.contador  -= 1;
    this.setState(state)
  }

  render(){
    return(
      <div>
        <h1>contador</h1>
        {this.state.name}
          <h3>
            <button onClick={this.diminuir}> - </button> 
              {this.state.contador}
            <button onClick={this.aumentar}> + </button>
          </h3>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';

// class Equipe extends Component {
//   render(){
//     return(
//       <div>
//         <Sobre name={this.props.name} job={this.props.job} />
//       </div>
//     );
//   }
// }

// class Sobre extends Component{
//   render(){
//     return(
//       <div>
//           <h2> Oi, eu sou a {this.props.name} e meu cargo é {this.props.job} </h2>
//       </div>
//     );
//   }
// }
// function App () {
//   return(
//     <div>
//       <h1> conheça nossa equipe: </h1>
//       <Equipe name="Laiza"   job="dev" />
//       <Equipe name="Kevin"   job="eletro" />
//     </div>
//   );
// }

// export default App;
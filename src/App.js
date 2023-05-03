import React, { Component } from 'react';

class Equipe extends Component {
  render(){
    return(
      <div>
        <Sobre name={this.props.name} job={this.props.job} />
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
          <h2> Oi, eu sou a {this.props.name} e meu cargo é {this.props.job} </h2>
      </div>
    );
  }
}
function App () {
  return(
    <div>
      <h1> conheça nossa equipe: </h1>
      <Equipe name="Laiza"   job="dev" />
      <Equipe name="Kevin"   job="eletro" />
    </div>
  );
}

export default App;
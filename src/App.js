import React from 'react';
//componente de uma linha só, por isso comp direto
// const Testcompont = () => <h2> testando componente </h2>

//componente com mais de uma linha 
// const Testcompont = () => {
//   return(
//     <div>
//       <h2>
//         Testando componente2
//       </h2>
//     </div>
//   );
// }

//Componente com props
const Testcompont = (props) => {
  return(
    <div>
      <h2>Bem vindo(a) {props.name} </h2>
      <h3> tenho {props.age} anos!</h3>
    </div>
  );
}


function App(){
  return(
    <div>
      Olá mundo!
      <Testcompont  name="Laíza" age="24"/>
      <Testcompont  name="Kevin" age="24"/>
      <Testcompont  name="Nho" age="5"/>
      <h1>Aprendendo componentes e props</h1>
    </div>
  )
}

export default App;

// export default function App(){
//   return(
//     <div>
//       <h1> focooo</h1>
//       <h2> testando mais</h2>
//     </div>
//   )
// }
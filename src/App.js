/* eslint-disable jsx-a11y/anchor-is-valid */
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
// const Bemvindo = (props) => {
//   return(
//     <div>
//       <h2>Bem vindo(a) {props.name} </h2>
//       <h3> tenho {props.age} anos!</h3>
//     </div>
//   );
// }

const Equipe = (props)  => {
  // return <a> Funcionou </a>
  return(
    <div>
      <Sobre username={props.name}  job={props.job} age={props.age} />
      <Social inst={props.instagram}  fb={props.facebook} />
      <hr />
    </div>
  );
}

const Sobre = (props) =>{
  return(
    <div>
      <h2> Olá sou o(a)  {props.username} </h2>
      <h2>cargo: {props.job} </h2>
      <h2> minha idade é:  {props.age} </h2>
    </div>
  )
}

const Social = (props) => {
  return(
    <div>
      <a href={props.inst}>Instagram</a>
        <a href={props.fb}>Facebook</a>
        <a>LinkedIn</a>
    </div>
  )
}


function App(){
  return(
    <div>
      <h1> venha conhecer nosso time </h1>
      <Equipe name="Iza" job="dev" age="24" instagram="https://instagram.com" />
      <Equipe name="Kevin" job="tecnico" age="24"  facebook="https://facebook.com" />
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
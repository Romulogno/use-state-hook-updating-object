import { useState } from 'react';
import './App.css';

function App() {
  //State with a object with two itens inside
    const [trabalho, setTrabalho] = useState(
      {
        position:"DevOps",
        empresa:"Accenture"
       }
     );
    const [newPosition, setNewPosition] = useState({});
    const [newEmpresa, setNewEmpresa] = useState({}) 

      //function that make a copy of the state and update the item necessary
       function carrerChanging(){
        const copiaTrabalho = {...trabalho};
        copiaTrabalho.position = newPosition;
        setTrabalho(copiaTrabalho);
        
      //Versao seu o Onchange input
       /* copiaTrabalho.empresa = "Frontiers"
        copiaTrabalho.position = "FrontEnd Developer";
        setTrabalho(copiaTrabalho)
        */
       }

       function empresaChanging(){
        const copiaTrabalho = {...trabalho};
        copiaTrabalho.empresa = newEmpresa;
        setTrabalho(copiaTrabalho)
        console.log(copiaTrabalho)
       }

  return (
    <div className="App">
      <h1>Empresa: {trabalho.empresa}</h1>
      <h1> Position: {trabalho.position}</h1>
      <input type="text"
       onChange={(event) => {setNewPosition(event.target.value)}}
      />
      <button 
      onClick={carrerChanging}
      >
     Atualiza trabalho
      </button>
      <br/>
      <input type="text"
       onChange={(event) => {setNewEmpresa(event.target.value)}}
      />
      <button onClick={empresaChanging}>Atualizar Empresa</button>
    </div>
  );
}

export default App;

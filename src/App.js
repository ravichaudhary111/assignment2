import './App.css';
import React,{useState} from "react"

function App() {

  const[valA,setValA]=useState(false);
  function handleClickA(){
   setValA(true);
  }
  const[valB,setValB]=useState(false);
  function handleClickB(){
   setValB(true);
  }
  return (<>
  
    <div className="App">
      <button id="button-a" onClick={handleClickA}>Buttton-A</button>
      <button id="button-b" onClick={handleClickB}>Buttton-A</button>
    </div>
      {
//       valA?<h3>Button id is:-button-a</h3>:null
      valA?console.log("Button id is:-button-a"):null
      
    }
    {
//       valB?<h3>Button id is:-button-b</h3>:null
      valB?console.log("Button id is:-button-b"):null
    }
    </>
  );
}

export default App;

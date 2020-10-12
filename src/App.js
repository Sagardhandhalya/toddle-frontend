import React,{useState} from 'react';
import Header from './components/header'
import Standard from './components/Standard'
import plusIcon from './images/plus.png'
import './App.css';

function App() {
  const [standards, setStandards] = useState([]);
  const [currentlevel, setCurrentLevel] = useState(0);
  const addNewRow =() =>{
    const newStandard = [...standards, { text: "", currentlevel , key:Date.now()}];
    setStandards(newStandard);

    console.log(standards);
  }

  
  return (

    <div className="App">

      <Header/>

      {
        standards.map((standard, i) => < Standard key={standard.key} id={standard.key} text={standard.text} currentlevel = {currentlevel} setCurrentLevel={setCurrentLevel} updateStandard={setStandards} oldstate = {standards}/>)
      }
      <button onClick={addNewRow} className="btn"><img src={plusIcon}  alt = "pluse" /> <span>Add a Standard</span> </button>

    </div>

  
  );
}

export default App;

import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js'
import React, { useState } from 'react';

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },4000);
  }

    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'black'
        showAlert("Dark mode has been enabled", "success")
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled", "success")
      }
  }
  return (
    <>
    <Navbar title = "React" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/> 
     <TextForm heading = "Enter the text to analyze" mode={mode}/> 
     {/* <About/>  */}
    </>
  );
}

export default App;

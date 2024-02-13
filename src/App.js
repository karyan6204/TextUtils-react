import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import Alert from './Components/Alert';
import React,{useState} from 'react'
import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [alert, setAlert]=useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const [mode,setMode]=useState('light')
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0e1138';
      showAlert('Dark Mode enabled','success');
      setTimeout(() => {
        setAlert(null);
      }, 1500);

      // document.title = 'TextUtils - Dark Mode ';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark Mode disabled','success');
      setTimeout(() => {
        setAlert(null);
      }, 1500);
      
      // document.title = 'TextUtils - Light Mode ';
    }
  }
  
  return (
    <>
    {/* <Router> */}
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>  
    <Alert alert = {alert}/>
    <div className = "container my-3">
    
      <TextForm showAlert = {showAlert} heading = "TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode = {mode}/>
    </div>
    </>
  );
}

export default App;

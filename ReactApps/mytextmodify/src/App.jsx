import Navbar from './component/Navbar';
import React,{useState} from 'react';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState("Enable Light Mode");
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


// by default Dark mode
     if(mode !== 'Enable Dark Mode'){
     document.body.style.backgroundColor = '#3F2E3E';
     document.body.style.color="white";
    }
  
  const toggle =()=>{
    if(mode === "Enable Dark Mode"){
      setMode(
        {
          color:'light',
          backgroundColor:'dark'
        }
      )
      document.body.style.backgroundColor = '#3F2E3E';
     document.body.style.color="white";
      setMode('Enable Light Mode');
      showAlert("Dark Mode Activated","success ");
    }else{
     
      setMode(
        {
          color:'dark',
          backgroundColor:'light'
        }
      )
      
      document.body.style.backgroundColor = 'white';
      document.body.style.color="black";
      
      setMode('Enable Dark Mode');
      showAlert("Light Mode Activated","success ");
    }
  }

  return (
    <>
    {/*  exact is must for exact path */}
     <BrowserRouter>
     < Navbar mode={mode} toggle={toggle} logo="MyTextModify" home="Home" about="About MyTextModify"/>
     <Alert alert={alert}/>
      <Routes>
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter your text to analyze below"/>} />
          <Route exact path="/about"  element={  <About mode={mode} logo="MyTextModify"/>} />
       
      </Routes>
      
    </BrowserRouter>
     
    </>
 
  )
}

export default App;

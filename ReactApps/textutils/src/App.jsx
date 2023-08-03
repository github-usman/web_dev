import Navbar from './component/Navbar';
import React,{useState} from 'react';
import TextForm from './component/TextForm';
import Footer from './component/Footer';
import Alert from './component/Alert';
// import About from './component/About';


function App() {

  const [mode, setMode] = useState("Enable Dark Mode");
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

  // setTimeout(
  //   showAlert,3000
  // );

  
  
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
      showAlert("Dark Activated","success ");
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
      showAlert("Light Activated","success ");
    }
  }

  return (
    <>
     < Navbar mode={mode} toggle={toggle} logo="TextUtils" home="Home" about="About TextUtils"/>
     <Alert alert={alert}/>
     <TextForm mode={mode} showAlert={showAlert} heading="Enter your text to analyze below"/>
     {/* <About/> */}
     <Footer mode={mode}/>
     
    </>
 
  )
}

export default App;

import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Footer from './component/Footer';
import About from './component/About';

function App() {
  return (
    <>
     < Navbar  logo="TextUtils" home="Home" about="About TextUtils"/>
     <TextForm heading="Enter your text to analyze below"/>
     <About/>
     <Footer/>
     
    </>
 
  )
}

export default App;

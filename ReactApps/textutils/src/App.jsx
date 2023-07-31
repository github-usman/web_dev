import logo from './logo.svg';
import './App.css';
import img from './component/images/logo192.png'


let name = "Usman Ansari";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact us</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <img src={img} alt="log_of_react" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius, architecto accusamus laborum saepe illum quo debitis quos inventore veritatis ipsum mollitia labore officiis illo a dolorem voluptas, at facere.</p>
    </div>
    </>
  );
}

export default App;

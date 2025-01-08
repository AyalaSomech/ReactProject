import logo from './logo.svg';
import './App.css';
// import Logo from './component/logo1';
import ImagesPass from './lesson_2/component/click'
import { NavbarBrand } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from "./project/Pages/Home";
import About from "./project/Pages/About";
import Connect from "./project/Pages/Connect";
import Services from "./project/Pages/Services";
import TenckYou from "./project/component/TenckYou"


function App() {
  return (
    <div className="App">

  {/* <ImagesPass></ImagesPass> */}
  <BrowserRouter>
  <nav>
    <Link to="/">Home</Link> | 
    <Link to="/about">About</Link> | 
    <Link to="/connect">Connect</Link> | 
    <Link to="/services">Services</Link> | 
  </nav>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/connect' element={<Connect />}/>
    <Route path='/services' element={<Services />}/>
    <Route path='/TenckYou' element={<TenckYou />}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;





















{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Logo></Logo>
      </header> */}
{/* <ImagesPass></ImagesPass> */ }

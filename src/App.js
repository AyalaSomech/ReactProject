import logo from './logo.svg';
import './App.css';
// import Logo from './component/logo1';
import ImagesPass from './lesson_2/component/click'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./project/PageComponent/Home";
import About from "./project/PageComponent/About";
import Connect from "./project/PageComponent/Connect";



function App() {
  return (
    <div className="App">
      <Router>
        <nav>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href='/connect'>Connect</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Router>


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

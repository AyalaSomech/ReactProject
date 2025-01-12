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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useTranslation } from 'react-i18next';
import i18next from "./project/i18next";



// import "container-fluid"
// import 'navbar navbar-expand-lg bg-body-tertiary';


function App() {
  const { t, i18n } = useTranslation();
  const translat = (language) => (i18n.changeLanguage(language));
  return (
    <div className="App">

      {/* <ImagesPass></ImagesPass> */}
      <BrowserRouter>
        <NavbarBrand className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm mb-2">
          <div className='d-flex justify-content-between w-100'>
            <Link className="nav-link active rounded-5" to="/">{t("Home")}</Link>
            <Link className="nav-link active rounded-5" to="/about">{t("About")}</Link>
            <Link className="nav-link active rounded-5" to="/connect">{t("Connect")}</Link>
            <Link className="nav-link active rounded-5" to="/services">{t("Services")}</Link>
          </div>
        </NavbarBrand>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/connect' element={<Connect />} />
          <Route path='/services' element={<Services />} />
          <Route path='/TenckYou' element={<TenckYou />} />
        </Routes>
      </BrowserRouter>
      <div className="position-fixed bottom-0 end-0 p-3">
      <button className='btn btn-outline-primary me-2' onClick={() => translat('en')}>English</button>
      <button className='btn btn-outline-primary' onClick={() => translat('he')}>עברית</button>
      </div>
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

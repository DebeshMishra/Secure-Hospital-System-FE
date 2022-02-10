import logo from './logo.svg';
import './App.css';
import Main from './MainDashboard/Main';
import Header from './HeaderComponent/Header';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Login from './LoginComponent/Login';
import Signup from './LoginComponent/Signup';



function App() {
  return (<BrowserRouter>
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/login"}>Secure Hospital System</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      < Header/>
      <div className="outer">
        <div className="inner">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div></BrowserRouter>
  )
} 
export default App;

import logo from './logo.svg';
import './App.css';
import Main from './MainDashboard/Main';
import Header from './HeaderComponent/Header';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './LoginComponent/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
    <Header/ >
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
    </>
  );
}

export default App;

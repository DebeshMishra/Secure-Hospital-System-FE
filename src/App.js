import logo from './logo.svg';
import './App.css';
import Main from './MainDashboard/Main';
import Header from './HeaderComponent/Header';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './LoginComponent/Login'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

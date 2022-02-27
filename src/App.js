
import './App.css';
import Header from './HeaderComponent/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from './LoginComponent/Login'
import Signup from './SignUpComponent/Signup';
import Dashboard from './components/MainDashboard/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

function PrivateRoute() {
  const user = useSelector((state) => state.user)
  const location = useLocation();
  return user.isLoggedIn
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        < Header />
        <div className="outer">
          <div className="inner">
            <Routes>
              {/* <Route path="/" element={<PrivateRoute />} >
                <Route path="/dashboard" element={<Dashboard />} />
              </Route> */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;

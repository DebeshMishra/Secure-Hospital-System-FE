import "./App.css";
import Header from "./HeaderComponent/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./LoginComponent/Login";
import Signup from "./SignUpComponent/Signup";
import Dashboard from "./components/MainDashboard/Dashboard";
import Account from "./components/Account/Account";
import EditAccount from "./components/Account/EditAccount";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { useState } from "react";
import user from "./features/user";

function PrivateRoute() {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  return user.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

function App() {
  const [userData, setUserData] = useState({ isLoggedIn: false });

  return (
    <BrowserRouter>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}>
        <div className="App">
          <Header userData={userData} setUserData={setUserData} />
          <div className="outer">
            <div className="inner">
              <Routes>
                {/* <Route path="/" element={<PrivateRoute />} >
                <Route path="/dashboard" element={<Dashboard />} />
              </Route> */}
                <Route
                  path="/"
                  element={
                    <Login userData={userData} setUserData={setUserData} />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <Login userData={userData} setUserData={setUserData} />
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <Signup userData={userData} setUserData={setUserData} />
                  }
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/account" element={<Account />} />
                <Route path="/editAccount" element={<EditAccount />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;

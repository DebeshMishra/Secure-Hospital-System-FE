import "./App.css";
import Header from "./components/General/HeaderComponent/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./components/General/LoginComponent/Login";
import CreateUser from "./components/General/CreateUserComponent/CreateUser";
import { useSelector, useDispatch } from "react-redux";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { useState } from "react";
import { permissions, routes } from "./RouteConfig";
import { history } from "./helpers/history";
import Logs from "./components/Admin/Logs";
import ForgotPwd from "./components/General/LoginComponent/ForgotPwd";
import Cookies from 'universal-cookie';
import { useCookies } from "react-cookie";
import { useLocation } from "react-router";
import Unauthorized from "./components/General/Unauthorized"
import Chat from "./components/General/Chat";

const ProtectRouteLogin = (
  { redirectPath = '/dashboard' }
) => {
  const user = useSelector((state) => state.user);

  const location = useLocation();
  console.log(location.pathname);

  if (user.isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

const NoMatch = () => {
  return (<h3>There's nothing here: 404!</h3>);
};

// const ProtectedRoute = (props) => {
//   const user = useSelector((state) => state.user);

//   const route = user.isLoggedIn ? <Outlet /> : <Navigate to="/login" replace/>;
//   console.log(route);
//   return route;
// };

const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  if (!user.isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  if(user.isLoggedIn && location.pathname.split("/")[1]=="dashboard"){
    return <Outlet />;
  }

  if(!permissions[user.userData.user.roles[0].role].includes(location.pathname.split("/")[1])){
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};


const Navigation = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        {routes.map((item, index) => {
          return (
            <Route
              key={index}
              index={item.path == "/dashboard"}
              path={item.path}
              element={item.component}
            />
          );
        })}
      </Route>
      <Route exact path="/" element={<ProtectRouteLogin />}>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPwd" element={<ForgotPwd />} />
      </Route>
      <Route path="/createUser" element={<CreateUser />} />
      <Route path="/unauthorized" element={<Unauthorized /> } />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

function App() {
  const [userData, setUserData] = useState({ isLoggedIn: false });
  const [cookies, setCookie, removeCookie] = useCookies([
    "JWTToken",
    "emailId",
  ]);

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}>
      <div className="App">
        <Header userData={userData} setUserData={setUserData} />
        <Chat />
        <div className="outer">
          <div className="inner">
            <Navigation />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;

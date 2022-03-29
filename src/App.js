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
import { useLocation } from "react-router";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { useState } from "react";
import { routes } from "./RouteConfig";
import { history } from "./helpers/history";
import Logs from "./components/Admin/Logs";

function App() {
  const [userData, setUserData] = useState({ isLoggedIn: false });

  // const ProtectedRoute = ({component: Component, ...rest}) => {
  //   const user = useSelector((state) => state.user)
  //   const location = useLocation();
  //   return (
  //     <Route
  //       {...rest}
  //       render={props => {
  //         if(user.isLoggedIn){
  //           return <component {...props}/>
  //         }else{
  //           return <Navigate to={
  //             {
  //               pathname: "/login",
  //               state: {from: props.location}
  //             }
  //           }/>
  //         }
  //       }}
  //     />
  //   )
  // }

  // function ProtectedRoute({ component, ...restOfProps }) {
  //   const user = useSelector((state) => state.user)
  //   console.log(component, restOfProps);
  //   return (
  //     <Route
  //       {...restOfProps}
  //       render={(props) =>
  //         user.isLoggedIn ? <component {...props} /> : <Navigate to="/login" />
  //       }
  //     />
  //   );
  // }

  const ProtectRouteLogin = (props) => {
    const user = useSelector((state) => state.user);

    const route = !user.isLoggedIn ? <Outlet /> : <Navigate to="/dashboard" />;
    console.log(route);
    return route;
  };

  const PrivateRoute = (props) => {
    const user = useSelector((state) => state.user);

    const route = user.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
    console.log(route);
    return route;
  };

  return (
    <BrowserRouter>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}>
        <div className="App">
          <Header userData={userData} setUserData={setUserData} />
          <div className="outer">
            <div className="inner">
              <Routes>
                <Route exact path="/" element={<PrivateRoute />}>
                  {routes.map((item, index) => {
                    return (
                      <Route
                        key={index}
                        exact
                        path={item.path}
                        element={item.component}
                      />
                    );
                  })}
                </Route>
                <Route exact path="/" element={<ProtectRouteLogin />}>
                  <Route exact path="/" element={<Login />} />
                  <Route exact path="/login" element={<Login />} />
                </Route>
                <Route exact path="/createUser" element={<CreateUser />} />
                <Route exact path="/logs" element={<Logs />} />

                {/* <ProtectedRoute exact path="/dashboard" element={<Dashboard />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;

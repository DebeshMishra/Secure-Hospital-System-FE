
import './App.css';
import Header from './HeaderComponent/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from './LoginComponent/Login'
import Signup from './SignUpComponent/Signup';
import Dashboard from './components/MainDashboard/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { useState } from 'react';
import { routes } from './RouteConfig';
import { history } from './helpers/history';


function App() {

  const [userData, setUserData] = useState({isLoggedIn: false})

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
    const user = useSelector((state) => state.user)
  
    const route =  !user.isLoggedIn ? (
      <Route {...props} />
    ) : (
      <Navigate
        to={{
          pathname: "/dashboard"
        }}
      />
    );
    console.log(route);
    return route;
  };

  const PrivateRoute = (props) => {
    const user = useSelector((state) => state.user)
  
    const route =  user.isLoggedIn ? (
      <Route {...props} />
    ) : (
      <Navigate
        to={{
          pathname: "/login"
        }}
      />
    );
    console.log(route);
    return route;
  }

  return (
    <BrowserRouter>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      >
        <div className="App">
          < Header userData={userData} setUserData={setUserData}/>
          <div className="outer">
            <div className="inner">
              <Routes>
                {routes.map((item, index) => {
                    return <PrivateRoute key={index} exact path="/dashboard" element={<Dashboard />}/>
                })}
                <ProtectRouteLogin exact path='/' element={<Dashboard />} />
                <ProtectRouteLogin exact path="/login" element={<Login />} />
                <ProtectRouteLogin exact path="/signup" element={<Signup />} />
                {/* <ProtectedRoute exact path="/dashboard" element={<Dashboard />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}
export default App;

import Dashboard from "./components/MainDashboard/Dashboard";
import Login from "./LoginComponent/Login";
import Signup from "./SignUpComponent/Signup";
import Account from "./components/Account/Account";
import EditAccount from "./components/Account/EditAccount";


export const routes = [
  {
    path: "/dashboard",
    component: <Dashboard/>
  },
  {
    path:"/profile",
    component: <Account/>
  },
  {
    path : "/editAccount",
    component: <EditAccount/>
  }
];

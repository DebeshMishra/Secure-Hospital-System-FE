import Dashboard from "./components/General/MainDashboard/Dashboard";
import Login from "./components/General/LoginComponent/Login";
import Signup from "./components/General/SignUpComponent/Signup";
import Account from "./components/General/Account/Account";
import EditAccount from "./components/General/Account/EditAccount";


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

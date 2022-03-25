import Dashboard from "./components/General/MainDashboard/Dashboard";
import Login from "./components/General/LoginComponent/Login";
import Signup from "./components/General/SignUpComponent/Signup";
import Account from "./components/General/Account/Account";
import EditAccount from "./components/General/Account/EditAccount";
import Diagnosis from "./components/Patient/Diagnosis/Diagnosis";
import Users from "./components/Admin/users/Users";
import EditUser from "./components/Admin/editUsers/EditUser";
import LabTestReports from "./components/LabStaff/LabTestReports/LabTestReports"
import LabTestRequests from "./components/LabStaff/LabTestRequests/LabTestRequests"
import UpdateLabTestReport from "./components/LabStaff/LabTestReports/UpdateLabTestReport"
import CreateLabTestReport from "./components/LabStaff/LabTestReports/CreateLabTestReport"


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
  },
  {
    path: "/diagnosis",
    component: <Diagnosis />
  },
  {
    path: "/users",
    component: <Users />
  },
  {
    path: "/editUser",
    component: <EditUser />
  },
  {
    path: "/labTestReports",
    component: <LabTestReports />
  },
  {
    path: "/labTestRequests",
    component: <LabTestRequests />
  },
  {
    path: "/updateLabTestReport",
    component: <UpdateLabTestReport />
  },
  {
    path: "/createLabTestReport",
    component: <CreateLabTestReport/>
  },
  
];

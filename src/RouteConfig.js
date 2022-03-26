import Dashboard from "./components/General/MainDashboard/Dashboard";
import Login from "./components/General/LoginComponent/Login";
import CreateUser from "./components/General/CreateUserComponent/CreateUser";
import Account from "./components/General/Account/Account";
import EditAccount from "./components/General/Account/EditAccount";
import Diagnosis from "./components/Patient/Diagnosis/Diagnosis";
import Users from "./components/Admin/Users/Users";
import ViewClaims from "./components/InsuranceStaff/ViewClaims/ViewClaims";
import Coverages from "./components/InsuranceStaff/Coverages/Coverages";
import CreatePolicy from "./components/InsuranceStaff/Policies/CreatePolicy/createPolicy";
import Policies from "./components/InsuranceStaff/Policies/viewPolicies/Policies";
import CreateClaim from "./components/General/CreateClaim/CreateClaim";
import Appointments from "./components/General/Appointments/Appointments";
import LabTestReports from "./components/LabStaff/LabTestReports/LabTestReports";
import UpdateLabTestReport from "./components/LabStaff/LabTestReports/UpdateLabTestReport";
import LabTests from "./components/LabStaff/LabTests/ViewLabTests";

export const routes = [
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    path: "/profile",
    component: <Account />,
  },
  {
    path: "/editAccount",
    component: <EditAccount />,
  },
  {
    path: "/diagnosis",
    component: <Diagnosis />,
  },
  {
    path: "/users",
    component: <Users />,
  },
  {
    path: "/viewClaims",
    component: <ViewClaims />,
  },
  {
    path: "/viewPolicies",
    component: <Policies />,
  },
  {
    path: "/createPolicy",
    component: <CreatePolicy />,
  },
  {
    path: "/coverages",
    component: <Coverages />,
  },
  {
    path: "/raiseClaim",
    component: <CreateClaim />,
  },
  {
    path: "/appointments",
    component: <Appointments />,
  },
  {
    path: "/labTestReports",
    component: <LabTestReports />,
  },
  {
    path: "/updateLabTestReport",
    component: <UpdateLabTestReport />,
  },
  {
    path: "/labTests",
    component: <LabTests />,
  },
];

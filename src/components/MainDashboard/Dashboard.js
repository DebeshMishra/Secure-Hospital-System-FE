import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const Dashboard = () => {

  const user = useSelector((state) => state.user)

  console.log(user)

  return (
    <>
      <h1>Main Page</h1><br />
      <h3>{user.userData.email}</h3>
    </>

  )
};

export default Dashboard;
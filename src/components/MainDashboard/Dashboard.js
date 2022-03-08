import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import './Dashboard.css'


const Dashboard = () => {

  const userInfo = useSelector((state) => state.user)
  // console.log(userInfo);

  return (
    <>
      <div className="jumbotron">
        <h1>Welcome</h1>
        {/* <h3>{userInfo.userData.user.firstName}</h3> */}
      </div>
    </>

  )
};

export default Dashboard;
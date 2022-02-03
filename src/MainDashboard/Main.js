import { Outlet, Link } from "react-router-dom";
import Header from '../HeaderComponent/Header';

const Main = () => {
  return (
    <>
        <Header/ >
       <Outlet />
    </>
  )
};

export default Main;
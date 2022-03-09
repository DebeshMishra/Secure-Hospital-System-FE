
import { useSelector, useDispatch } from 'react-redux';
import './Dashboard.css'
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { navLinks } from '../../../helpers/HeaderConfig';


const Dashboard = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['JWTToken', 'emailId']);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  let navigate = useNavigate();

  // console.log(userInfo);
  return (
    <>
      <div className="jumbotron">
        <h1>Welcome</h1>
        <h3>{userInfo.userData.user.firstName}</h3>
      </div>
      <div className='info'>
        <h3>This is the CSE 545 - Software Security Project</h3>
        <p>Developed By Group - 3</p>
      </div>
    </>
  )
};

export default Dashboard;
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import HeaderConfig from "./HeaderConfig.json"
import HeaderData from "./HeaderImport.json"
import { AppConstants } from '../AppConstants';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUserData, removeUserData, setUserToken } from "../features/user";

function Header() {
  let profile;
  const userIsLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const user = useSelector((state) => state.user)
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // setting this manually but have to make a backend call
  //   dispatch(setUserData({userData: {email: "spapani@asu.edu", role: "ADMIN"}}))
  // }, [userIsLoggedIn])


  if (userIsLoggedIn) {
    profile = <Nav>
      <Container>
        <NavDropdown title="Options" id="header-options">
          {
            AppConstants.profile.map(function (item, i) {
              return <NavDropdown.Item key={i}>{item}</NavDropdown.Item>
            })
          }
        </NavDropdown>
      </Container>
    </Nav>
  } else {
    profile = <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to={"/login"}>Sign in</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/signup"}>Sign up</Link>
        </li>
      </ul>
    </div>
  }

  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/login"}>{AppConstants.appName}</Link>
          {userIsLoggedIn && <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              {user.userData.role == "ADMIN" && <li className="nav-item" href="users"><Link className="nav-link" to={"/users"}>{AppConstants.users}</Link></li>}
              {user.userData.role == "ADMIN" && <li className="nav-item" href="logs"><Link className="nav-link" to={"/logs"}>{AppConstants.logs}</Link></li>}
              {user.userData.role == "PATIENT" && <li className="nav-item" href="appointments"><Link className="nav-link" to={"/appointments"}>{AppConstants.appointments}</Link></li>}
            </ul>
          </div>}

          {profile}
        </div>
      </Navbar>
    </>
  );

}

export default Header;

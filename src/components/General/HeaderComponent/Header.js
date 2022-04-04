import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { navLinks } from "../../../helpers/HeaderConfig";
import { AppConstants } from "../../../AppConstants";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  setUserData,
  removeUserData,
  setAllData,
  setUserToken,
  checkCookiesForToken,
} from "../../../features/user";
import { getUserByEmailId } from "../../../services/authentication.service";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Dropdown } from "react-bootstrap";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const [cookies, setCookie, removeCookie] = useCookies([
    "JWTToken",
    "emailId",
  ]);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    //if user is logged in
    dispatch(checkCookiesForToken());
    console.log(userInfo);

    if (userInfo.isLoggedIn || cookies.JWTToken != undefined) {
      if (cookies.emailId) {
        getUserByEmailId(cookies.emailId).then((response) => {
          dispatch(
            setAllData({
              jwtToken: cookies.JWTToken,
              userData: {
                email: response.email,
                role: response.roles[0].role,
                user: response,
              },
            })
          );
        });
      } else if (userInfo.userData.email) {
        getUserByEmailId(userInfo.userData.email).then((response) => {
          dispatch(
            setUserData({
              jwtToken: userInfo.JWTToken,
              userData: {
                email: response.email,
                role: response.roles[0].role,
                user: response,
              },
            })
          );
        });
      }
    }
  }, [userInfo.isLoggedIn]);

  const logout = () => {
    // removing the local cookiee state
    removeCookie("JWTToken");
    removeCookie("emailId");
    // setIsLogoutClicked(true);
    dispatch(removeUserData());
    console.log("logging out!!!");
    navigate("/login");
  };

  const profileNav = () => {
    navigate("/profile");
  };

  return (
    <>
      <Navbar className="navbar-dark bg-dark" sticky="top">
        <Container>
          <Navbar.Brand>{AppConstants.appName}</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            {userInfo.isLoggedIn && (
              <>
                <Nav className="ms-auto">
                  {userInfo.userData.role &&
                    navLinks[userInfo.userData.role].availableLinks.map(
                      (item, index) => {
                        return (
                          <Nav.Item key={index}>
                            <Nav.Link
                              className="nav-link"
                              onClick={() =>
                                navigate(navLinks.links[item].url)
                              }>
                              {navLinks.links[item].name}
                            </Nav.Link>
                          </Nav.Item>
                        );
                      }
                    )}
                  {/* {userInfo.userData.role == "ADMIN" && <Nav.Item><Nav.Link className="nav-link" href="/users">{AppConstants.users}</Nav.Link></Nav.Item>}
                  {userInfo.userData.role == "ADMIN" && <Nav.Item><Nav.Link className="nav-link" href="/logs">{AppConstants.logs}</Nav.Link></Nav.Item>}
                  {userInfo.userData.role == "PATIENT" && <Nav.Item><Nav.Link className="nav-link" href="/appointments">{AppConstants.appointments}</Nav.Link></Nav.Item>} */}
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {userInfo.userData.email}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={profileNav}>
                        {AppConstants.profile[0]}
                      </Dropdown.Item>
                      <Dropdown.Item onClick={logout}>
                        {AppConstants.profile[2]}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              </>
            )}
            {!userInfo.isLoggedIn && (
              <>
                <Nav className="ms-auto" defaultActiveKey="/login">
                  <Nav.Item>
                    <Nav.Link href="/login">Sign in</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/createUser">Sign up</Nav.Link>
                  </Nav.Item>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import HeaderConfig from "./HeaderConfig.json"
import HeaderData from "./HeaderImport.json"
import { AppConstants } from '../AppConstants';


function Header() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">{AppConstants.appName}</Navbar.Brand>
            <Container>
              <Nav className="AdminNavBar">
                {HeaderData.role == "ADMIN" && <Nav.Link href ="users">{AppConstants.users}</Nav.Link>}
                {HeaderData.role == "ADMIN" && <Nav.Link href ="logs">{AppConstants.logs}</Nav.Link>}
                {HeaderData.role == "PATIENT" && <Nav.Link href ="appointments">{AppConstants.appointments}</Nav.Link>}
              </Nav>
            </Container>
          </Container>
          {HeaderData.role && <Nav>
            <Container>
              <NavDropdown title="Options" id="header-options">
                {
                  AppConstants.profile.map(function(item, i){
                    return <NavDropdown.Item href="HeaderAccount" key={i}>{item}</NavDropdown.Item>
                  })
                }
              </NavDropdown>
            </Container>
          </Nav>}
        </Navbar>
      </>
   );
 
}

export default Header;

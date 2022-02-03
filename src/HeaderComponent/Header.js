import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import HeaderConfig from "./HeaderConfig.json"
import HeaderData from "./HeaderImport.json"




function Header() {
  if (HeaderData.role == "ADMIN"){
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">CSE 545 Secure Hospital System Group 3</Navbar.Brand>
            <Container>
              <Nav className="AdminNavBar">
                <Nav.Link href ="users">Users</Nav.Link>
                <Nav.Link href ="logs">Logs</Nav.Link>
              </Nav>
            </Container>
          </Container>
          <Nav>
            <Container>
              <NavDropdown title="Options" id="header-options">
                <NavDropdown.Item href="HeaderAccount">Account</NavDropdown.Item>
                <NavDropdown.Item href="HeaderSettings">Settings</NavDropdown.Item>
                <NavDropdown.Item href="HeaderLogout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Container>
          </Nav>
        </Navbar>
      </>
   );
  }
  else if (HeaderData.role == "PATIENT"){
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">CSE 545 Secure Hospital System Group 3</Navbar.Brand>
            <Container>
              <Nav className="AdminNavBar">
                <Nav.Link href ="appointments">Appointments</Nav.Link>
              </Nav>
            </Container>
          </Container>
          <Nav>
            <Container>
              <NavDropdown title="Options" id="header-options">
                <NavDropdown.Item href="Account">Account</NavDropdown.Item>
                <NavDropdown.Item href="Settings">Settings</NavDropdown.Item>
                <NavDropdown.Item href="Logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Container>
          </Nav>
        </Navbar>
      </>
   );
  }



  
 
}

export default Header;

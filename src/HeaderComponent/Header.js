import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">CSE 545 Secure Hospital System Group 3</Navbar.Brand>
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

export default Header;

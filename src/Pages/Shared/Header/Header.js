import { signOut } from 'firebase/auth';
import React from 'react';
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="services">Services</Nav.Link>
              <Nav.Link as={Link} to="feedback">Feedback</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="about">About</Nav.Link>
              {
                user ?
                  <Nav.Link onClick={handleSignOut}>
                    Sign out
                  </Nav.Link>
                  :
                  <Nav.Link eventKey={2} as={Link} to="login">
                    Login
                  </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
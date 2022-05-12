import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Link style={{color:"white",textDecoration:'none',transform:"scale(1.5)"}}  to='/'>SHOPHERE</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link style={{color:"white",textDecoration:'none',marginLeft:'16px'}} to="/cart">
                  <i className="fas fa-shopping-cart"></i> Cart
              </Link>
              <Link style={{color:"white",textDecoration:'none',marginLeft:'16px'}} to="/login">
                  <i className="fas fa-user"></i> Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

import React , {useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../actions/userAction";


const Header = () => {


  const dispatch=useDispatch()
  const userLogin=useSelector((state)=>{
    return state.userLogin
  })
  const {userInfo}=userLogin;

  useEffect(()=>{
  })
  const logoutHandler=()=>{
    dispatch(logout())
  }

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
              {userInfo ? (<NavDropdown style={{position:'absolute',marginLeft:"10px",paddingTop:"5px",marginTop:"5px"}} title={userInfo.name} id='username'>
                <NavDropdown.Item>
                  <Link to='/profile'>Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{
                  logoutHandler()
                }}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>):<><Link style={{color:"white",textDecoration:'none',marginLeft:'16px'}} to="/login">
                  <i className="fas fa-user"></i> Login
              </Link></>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

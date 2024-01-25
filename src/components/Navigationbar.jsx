import React, { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cartlogooffcanvas from './Cartlogooffcanvas';
import { Link } from 'react-router-dom';


export default function Navigationbar() {


  
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>



      <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
              width="30"
              height="30"
              className="d-inline-block align-top rounded-circle"
            />{' '}
            STORE
          </Navbar.Brand>
        
        





        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link' to="/profile">Profile</Link>
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/products">Products</Link>
            <Link className='nav-link' to="/login">Login</Link>
            <Link className='ms-4 btn btn-dark' to="/signup">SignUp</Link>
            <Cartlogooffcanvas/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    
    </>
  )
}

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <div className="container-fluid">
      <Navbar.Brand as={NavLink} to="/" className="brand-logo">Hack-a-plane</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mx-auto">
          <Nav.Link as={NavLink} to="/" className="nav-link">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/event" className="nav-link">Event</Nav.Link>
          <Nav.Link as={NavLink} to="/categories" className="nav-link">Categories</Nav.Link>
          <Nav.Link as={NavLink} to="/about-us" className="nav-link">About Us</Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className="nav-link">Contact</Nav.Link>
        </Nav>
        <div className="d-flex align-items-center">
          <NavLink to="/login" className="btn btn-outline-danger mx-2">Login</NavLink>
          <NavLink to="/register" className="btn btn-outline-danger mx-2">Sign up</NavLink>
          <NavLink to="/notifications" className="nav-link text-light mr-4 border border-light rounded p-2">
            <i className="fas fa-bell fa-lg"></i>
          </NavLink>
        </div>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Header;

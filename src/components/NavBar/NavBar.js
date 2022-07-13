import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Logo from './Logo.svg'
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar variant='first' expand="lg">
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand>
          <Link to='/'>
            <img src={Logo} alt=''/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=''/>
        <Navbar.Collapse className='flex-grow-0 w-25' id="basic-navbar-nav">
          <Form className="d-flex w-100 py-2 px-1">
            <Form.Control
              type="search"
              placeholder="Search"
              className="shadow-sm border rounded-3"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
        <Navbar.Collapse className='flex-grow-0' id="basic-navbar-nav">
          <Nav className="">
            <Nav.Item className='py-2 px-1'>
              <Link to='/log-in'>
                <Button variant="first" className='w-100 py-2 px-3 fw-bold'>Login</Button>{' '}
              </Link>
            </Nav.Item>
            <Nav.Item className='py-2 px-1'>
              <Link to='/sign-up'>
                <Button variant="second" className='w-100 py-2 px-3 fw-bold'>Sign up</Button>{' '}
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { assets } from '../assets/assets';
import React from 'react';

const CustomNavbar = () => {
    return (
        <Navbar expand="lg" style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
            <Container fluid style={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}>
                <Navbar.Brand href="/"><img className="w-50" src={assets.logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', gap: '25px', overflowY: 'auto', marginLeft: '50px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">
                            <p>Home</p>
                            <hr style={{ border: 'none', height: '2.5px', backgroundColor: 'black', borderRadius: '5px', marginTop: '-10px' }} />
                        </Nav.Link>
                        <Nav.Link href="/Collections">
                            <p>Collections</p>
                            <hr style={{ border: 'none', height: '2.5px', backgroundColor: 'black', borderRadius: '5px', marginTop: '-10px' }} />   
                        </Nav.Link>
                        <Nav.Link href="/About">
                            <p>About</p>
                            <hr style={{ border: 'none', height: '2.5px', backgroundColor: 'black', borderRadius: '5px', marginTop: '-10px' }} />
                        </Nav.Link>
                        <Nav.Link href="/Contact">
                            <p>Contact Us</p>
                            <hr style={{ border: 'none', height: '2.5px', backgroundColor: 'black', borderRadius: '5px', marginTop: '-10px' }} />
                        </Nav.Link>
                        <Nav.Link href="/Login">
                            <p>Login</p>
                            <hr style={{ border: 'none', height: '2.5px', backgroundColor: 'black', borderRadius: '5px', marginTop: '-10px' }} />
                        </Nav.Link>
                        <Nav.Link href="/Admin">
                            <p>Admin Panel</p>
                            <hr style={{ border: 'none', height: '2.5px', backgroundColor: 'black', borderRadius: '5px', marginTop: '-10px' }} />
                        </Nav.Link>
                        <Nav.Link href="/Cart">
                            <p>Cart</p>
                            <hr style={{ border: 'none', height: '2.5px', backgroundColor: 'black', borderRadius: '5px', marginTop: '-10px' }} />
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-secondary" type="submit">
                            <i className="bi bi-search"></i>
                        </button>   
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar
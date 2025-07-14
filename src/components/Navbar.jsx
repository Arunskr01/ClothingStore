import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { assets } from '../assets/assets';
import { Button } from 'react-bootstrap';

function BasicExample() {
    return (
        <Navbar expand="lg">
            <Container>
                <div>
                    <Navbar.Brand href="#home">
                        <img style={{ marginTop: '10px', width: '85px', height: 'auto' }} src={assets.logo} alt="Logo" />
                    </Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{gap: '15px'}}>
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
                            <Nav.Link href="/Login">
                                <p>Login</p>
                                <hr style={{ border: 'none', height: '2.5px', backgroundColor: 'black', borderRadius: '5px', marginTop: '-10px' }} />
                            </Nav.Link>
                            <Nav.Link href="/order">
                                <p>Orders</p>
                                <hr style={{ border: 'none', height: '2.5px', backgroundColor: 'black', borderRadius: '5px', marginTop: '-10px' }} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div>
                    <Button href="/Cart" variant='success' className='bi bi-cart'></Button>
                </div>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
import React from 'react';
import { Navbar, Nav, Container, NavDropdown, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const ResponsiveNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand to="/"><img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="Koinx" style={{ "height": "50px" }} /></Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav style={{ fontWeight: "500" }}>
                        <Nav.Link to="/cryptotaxes">Crypto Taxes</Nav.Link>
                        <Nav.Link to="/tools">Free Tools</Nav.Link>
                        <Nav.Link to="/resource">Resource Center</Nav.Link>
                    </Nav>
                    <Nav>

                        <Nav.Link to="/resource"><Button variant="primary">Get Started</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default ResponsiveNavbar;

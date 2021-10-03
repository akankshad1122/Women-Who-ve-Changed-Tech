import React from 'react';



import Navbar from 'react-bootstrap/Navbar'
//import Container from 'react-bootstrap/Container';



export default function Nav() {
    return (

        <Navbar >
           
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
           
        </Navbar>

    )
}
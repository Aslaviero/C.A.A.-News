import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function NavBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="warning" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <h1>C.A.A News</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h2>Accounts</h2>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                <Container className="bg-warning justify-content-center">
                  <Form.Label htmlFor="inputPassword">
                    <h4>Sign In</h4>
                  </Form.Label>
                  <Form.Control
                    placeholder="email"
                    type="input"
                    id="input1"
                    aria-describedby="passwordHelpBlock"/>
                  <Form.Control
                    placeholder="password"
                    type="input"
                    id="input2"
                    aria-describedby="passwordHelpBlock"/>
                  <Button>Log In</Button>
                </Container>

                <br></br>
                
                <Container className="bg-warning">
                  <Form.Label htmlFor="inputPassword">
                    <h4>Create Account</h4>
                  </Form.Label>
                  <Form.Control
                    placeholder="Name"
                    type="input"
                    id="input3"
                    aria-describedby="passwordHelpBlock"/>
                  <Form.Control
                    placeholder="Email"
                    type="input"
                    id="input3"
                    aria-describedby="passwordHelpBlock"/>
                    <Form.Control
                    placeholder="password"
                    type="input"
                    id="input5"
                    aria-describedby="passwordHelpBlock"/>
                  <Button>Create</Button>
                </Container>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>

  )
}

export default NavBar;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping, faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div>
      <header className="headerarea">
        <Container>
          <Row>
            <Col md={6}>
              <FontAwesomeIcon icon={faPhone} /> 9508089730
            </Col>
            <Col md={6}>
              {" "}
              <FontAwesomeIcon icon={faEnvelope} /> nupurrani201819@gmail.com
            </Col>
          </Row>
        </Container>
      </header>
      <section>
        <Container>
          <Row>
            <Col>
              <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link as={Link} to="/home">
                        <FontAwesomeIcon icon={faHome} />Home
                      </Nav.Link>
                      <Nav.Link as={Link} to="/category">
                        Category
                      </Nav.Link>
                      <Nav.Link as={Link} to="/product">
                        Product
                      </Nav.Link>
                      <Nav.Link as={Link} to="/orders">
                        My Orders
                      </Nav.Link>
                      <Nav.Link as={Link} to="/cart">
                       <FontAwesomeIcon icon={faCartShopping} />  Cart
                      </Nav.Link>
                      <Nav.Link as={Link} to="/wishlist">
                       <FontAwesomeIcon icon={faCartShopping} />  Wishlist
                      </Nav.Link>
                      <Nav.Link as={Link} to="/register">
                        Register
                      </Nav.Link>
                      <Nav.Link as={Link} to="/address">
                        Address
                      </Nav.Link>
                      <Nav.Link as={Link} to="/login">
                         Login
                      </Nav.Link>
                      <Nav.Link as={Link} to="/addproduct">
                         Add Product
                      </Nav.Link>
                      <Nav.Link as={Link} to="/profile">
                         Profile
                      </Nav.Link>
                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/test">
                          Logout
                        </NavDropdown.Item>
                        
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Header;

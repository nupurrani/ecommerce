import React from "react";
import { Col, Dropdown, Row, Container, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const Profile = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your number"
                    required
                  />
                  <Form.Text muted>
                    Enter a valid 10-digit mobile number.
                  </Form.Text>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Profile;

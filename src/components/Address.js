import React from "react";
import { Col, Dropdown, Row, Container, Card, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
const Address = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Sl. no.</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>C-125, Sector-1, Rohini, Delhi -110085</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      FF09, Global Foyer Mall, Palam Vihar, Gurugram-122017
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>kadma,jamshedpur-831001 </td>
                    {/* <td>@twitter</td> */}
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Address;

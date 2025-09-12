import React from "react";
import { Col, Dropdown, Row, Container, Card, Button } from "react-bootstrap";

const Product = () => {
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];
  return (
    <div>
      <section>
        <Container>
          {/* <Row>
            <Col>
              {products.map((product, index) => {
                return <p>{product.title}</p>;
              })}
            </Col>
          </Row> */}
          <Row>
            {products.map((product, index) => {
              return (
                <Col md={3}>
                  <Card>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        <h6>{product.category}</h6>
                        <p>{product.description}</p>
                        <p>&#8377; {product.price}</p>
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Product;

import React from "react";
import { Col, Dropdown, Row, Container, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHome,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";

const Product = () => {
  const cartData = [
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      size: "S M L XL XXL XXXL",
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
    // {
    //   id: 16,
    //   title:
    //     "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    //   price: 29.95,
    //   description:
    //     "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    //   category: "women's clothing",
    //   image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    //   rating: {
    //     rate: 2.9,
    //     count: 340,
    //   },
    // },
  ];
  return (
    <div>
      <section>
        <Container>
          {cartData.map((product, index) => {
            return (
              <Row>
                <Col md={12}>
                  <Card>
                    <Row>
                      <Col md={3}>
                        <Card.Img  variant="top" src={product.image} className="productImage" />
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title>{product.title}</Card.Title>
                          <Card.Text>
                            <h6>{product.category}</h6>
                            <p>&#8377; {product.price}</p>
                            <div>
                              <Dropdown data-bs-theme="dark">
                                <DropdownButton
                                data-bs-theme="dark"
                                  as={ButtonGroup}
                                  title="Size"
                                  id="bg-nested-dropdown"
                                >
                                  <Dropdown.Item eventKey="1">S</Dropdown.Item>
                                  <Dropdown.Item eventKey="2">M</Dropdown.Item>
                                  <Dropdown.Item eventKey="2">L</Dropdown.Item>
                                  <Dropdown.Item eventKey="2">XL</Dropdown.Item>
                                </DropdownButton>
                              </Dropdown>
                            </div>
                          </Card.Text>

                          <div className="d-flex gap-2 mb-2">
                            <Button variant="primary">
                              <FontAwesomeIcon icon={faCartShopping} />
                              Add to Cart
                            </Button>
                            <Button variant="outline-primary">Buy Now</Button>
                          </div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Container>
      </section>
    </div>
  );
};

export default Product;

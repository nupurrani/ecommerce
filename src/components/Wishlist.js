import React from 'react'
import { Col, Dropdown, Row, Container, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHome,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Wishlist = () => {
  const wishlistData = [
      {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image:
        "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image:
        "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image:
        "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image:
        "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
  ]
  return (
    <div>
        <section>
        <Container>
          {wishlistData.map((product, index) => {
            return (
              <Row>
                <Col md={12}>
                  <Card>
                    <Row>
                      <Col md={3}>
                        <Card.Img variant="top" src={product.image} className="productImage" />
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title>{product.title}</Card.Title>
                          <Card.Text>
                            <h6>{product.category}</h6>
                            <p>&#8377; {product.price}</p>
                          </Card.Text>
                          <div className="d-flex gap-2 mb-2">
                            <Button variant="outline-primary">Buy Now</Button>
                            <Button variant="outline-primary">Remove</Button>
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
  )
}

export default Wishlist
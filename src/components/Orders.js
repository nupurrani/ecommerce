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
import Stack from "react-bootstrap/Stack";
// import ReactStars from "react-rating-stars-component";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Orders = () => {
  const cartData = [
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      category: "jewelery",
      description: "Deliverd on Aug 05, 2025",
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
      category: "jewelery",
      description: "Deliverd on Aug 05, 2025",
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
      category: "jewelery",
      description: "Deliverd on Aug 05, 2025",
      image:
        "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 14,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      price: 999.99,
      category: "electronics",
      description: "Deliverd on Aug 05, 2025",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      category: "women's clothing",
      description: "Deliverd on Aug 05, 2025",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      category: "women's clothing",
      description: "Deliverd on Aug 05, 2025",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
      rating: {
        rate: 2.9,
        count: 340,
      },
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      category: "women's clothing",
      description: "Deliverd on Aug 05, 2025",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
      rating: {
        rate: 3.8,
        count: 679,
      },
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      description: "Deliverd on Aug 05, 2025",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
      rating: {
        rate: 4.7,
        count: 130,
      },
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      category: "women's clothing",
      description: "Deliverd on Aug 05, 2025",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
      rating: {
        rate: 4.5,
        count: 146,
      },
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      category: "women's clothing",
      description: "Deliverd on Aug 05, 2025",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
  ];
  const StarRating = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) stars.push(<FaStar key={i} color="#FFD700" />);
      else if (i === fullStars && hasHalfStar)
        stars.push(<FaStarHalfAlt key={i} color="#FFD700" />);
      else stars.push(<FaRegStar key={i} color="#FFD700" />);
    }

    return <div className="star-rating" style={{ display: "flex", gap: "3px" }}>{stars}</div>;
  };
  return (
    <div>
      <section className="order1">
        <Container>
          {cartData.map((product, index) => {
            return (
              <Row key={index}>
                <Col md={12}>
                  <Card>
                    <Row className="order3">
                      <Col md={3}>
                        <Card.Img
                          variant="top"
                          src={product.image}
                          className="productImage"
                        />
                      </Col>
                      <Col>
                        <Stack direction="horizontal" gap={3}>
                          <div className="p-2">{product.title}</div>
                          <div className="p-2">&#8377; {product.price}</div>
                          <div className="p-2"> {product.description}</div>
                          {/* <div className="p-2"> {product.rating}</div> */}

                          {/* <Star stars={stars} reviws={reviews} /> */}
                        </Stack>
                        {/* <div className="mt-2">
                          <ReactStars
                            count={5}
                            value={product.rating.rate}
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <small className="text-muted">
                            
                            ({product.rating.count} reviews)
                            ({product.rating.rate} reviews)
                          </small>
                        </div> */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <StarRating rating={product.rating.rate} />
                          <span>({product.rating.count} reviews)</span>
                        </div>
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

export default Orders;

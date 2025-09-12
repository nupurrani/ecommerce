import React from "react";
import { Container } from "react-bootstrap";
import { Col, Dropdown, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faTag,
  faEnvelope,
  faPencilSquare,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


const Home = () => {
  return (
    <div>
      <section className="harea">
                  <Container>
                      <Row>
                          <Col>
                              Home
                          </Col>
                      </Row>
                  </Container>
              </section>
      {/* <section className="parea">
        <Container>
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <ExampleCarouselImage text="First slide" />

                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <ExampleCarouselImage text="Second slide" />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <ExampleCarouselImage text="Third slide" />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section> */}
    </div>
  );
};

export default Home;

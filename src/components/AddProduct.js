import React from "react";
import { Col, Dropdown, Row, Container, Card, Button } from "react-bootstrap";
import Category from "./Category";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const AddProduct = () => {
  const SignupSchema = Yup.object().shape({
    productname: Yup.string()
      .min(6, "Must be at least 6 characters!")
      .max(50, "Must be at most 50 characters!")
      .required("Product Name is Mandetory! "),
    category: Yup.string()
      //   .min(6, "Too Short!")
      //   .max(50, "Too Long!")
      .required("Select 1 Category"),
    price: Yup.string()
      .matches(/^[0-9]\d{9}$/, " Only Numbers are allowed")
      .required("Price is Mandetory!"),
    photo: Yup.string()
      // .min(4, "Too Short!")
    //   .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
    //   .max(20, "Too Long!")
      .required("Photo is Mandetory!"),
  });
  return (
    <div>
      <section className="glass-container">
        <Container>
          <Row>
            <Col>
              <h2>Add Product</h2>
              <Formik
                initialValues={{
                  productname: "",
                  Category: "",
                  price: "",
                  photo: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Row className="input-group">
                      <Col>
                        <label>Product Name</label>
                      </Col>
                      <Col>
                        <Field name="productname" />
                        {errors.productname && touched.productname ? (
                          <div>{errors.productname}</div>
                        ) : null}
                      </Col>
                    </Row>
                    <Row className="input-group">
                      <Col>
                        <label>Category</label>
                        <div>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              category
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Men's clothing
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                jewelery
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                electronics
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </Col>
                      {/* <Col>
                        <Field name="category" />
                        {errors.category && touched.category ? (
                          <div>{errors.category}</div>
                        ) : null}
                      </Col> */}
                    </Row>
                    <Row className="input-group">
                      <Col>
                        <label>price</label>
                      </Col>
                      <Col>
                        <Field name="price" type="price" />
                        {errors.price && touched.price ? (
                          <div>{errors.price}</div>
                        ) : null}
                      </Col>
                    </Row>
                    <Row className="input-group">
                      <Col>
                        <label>Photo</label>
                      </Col>
                      <Col>
                        <Field name="photo" type="photo" />
                        {errors.photo && touched.photo ? (
                          <div>{errors.photo}</div>
                        ) : null}
                      </Col>
                    </Row>

                    <button type="submit">Submit</button>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AddProduct;

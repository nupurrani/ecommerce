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
  const products = [
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
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
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
  ];
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
      <section>
        <Container>
          <Row>
            <Col>
                <div>
                  {products.map((product,index)=>{
                    return(
                      <div>
                        <p>{product.category}</p>
                      </div>
                    )
                  }

                  )}
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AddProduct;

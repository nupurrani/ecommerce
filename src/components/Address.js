import React from "react";
import { Col, Dropdown, Row, Container, Card, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Address = () => {
  const SignupSchema = Yup.object().shape({
    addressline1: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("please fill the address1"),
    addressline2: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("please fill the address2"),
    city: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("city is Mandetory!"),
    state: Yup.string()
      .min(4, "Too Short!")
      .max(20, "Too Long!")
      .required("state is Mandetory!"),
    pin: Yup.string()
      .min(6, "Please fill Minimum 6 digit PIN CODE !")
      .max(10, "Invalid PIN CODE!")
      .required("PINCODE is Mandetory!"),
    mobile: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10 Digit Mobile No. ")
      .required("Mobile No. is Mandetory!"),
    // email: Yup.string().email("Invalid email").required("Required"),
  });
  return (
    <div>
      <section className="glass-container">
        <Container>
          <Row>
            <Col>
              <h2>Address</h2>
              <Formik
                initialValues={{
                  addressline1: "",
                  addressline2: "",
                  city: "",
                  state: "",
                  pin: "",
                  mobile: "",
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
                        <label>Address Line 1</label>
                      </Col>
                      <Col>
                        <Field name="addressline1" />
                        {errors.addressline1 && touched.addressline1 ? (
                          <div>{errors.addressline1}</div>
                        ) : null}
                      </Col>
                    </Row>
                    <Row className="input-group">
                      <Col>
                        <label>Address Line 2</label>
                      </Col>
                      <Col>
                        <Field name="addressline2" />
                        {errors.addressline2 && touched.addressline2 ? (
                          <div>{errors.addressline2}</div>
                        ) : null}
                      </Col>
                    </Row>
                    <Row className="input-group">
                      <Col>
                        <label>City</label>
                      </Col>
                      <Col>
                        <Field name="city" type="city" />
                        {errors.city && touched.city ? (
                          <div>{errors.city}</div>
                        ) : null}
                      </Col>
                    </Row>
                    <Row className="input-group">
                      <Col>
                        <label>State</label>
                      </Col>
                      <Col>
                        <Field name="state" type="state" />
                        {errors.state && touched.state ? (
                          <div>{errors.state}</div>
                        ) : null}
                      </Col>
                    </Row>
                    <Row className="input-group">
                      <Col>
                        <label>Pin Code</label>
                      </Col>
                      <Col>
                        <Field name="pin" />
                        {errors.pin && touched.pin ? (
                          <div>{errors.pin}</div>
                        ) : null}
                      </Col>
                    </Row>
                    <Row className="input-group">
                      <Col>
                        <label>Mobile</label>
                      </Col>
                      <Col>
                        <Field name="mobile" />
                        {errors.mobile && touched.mobile ? (
                          <div>{errors.mobile}</div>
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

export default Address;

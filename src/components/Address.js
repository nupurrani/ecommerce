import React from "react";
import { Col, Dropdown, Row, Container, Card, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { InputMask} from "react-input-mask" ;
import * as Yup from "yup";

const Address = () => {
  const SignupSchema = Yup.object().shape({
    addressline1: Yup.string()
      .min(6, "Must be at least 6 characters!")
      .max(50, "Must be at most 50 characters!")
      .required("please fill the address1"),
    addressline2: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("please fill the address2"),
    city: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("city is Mandetory!"),
    state: Yup.string()
      // .min(4, "Too Short!")
      .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
      .max(20, "Too Long!")
      .required("state is Mandetory!"),
    pin: Yup.string()
      .matches(/^[1-9]\d{5}$/, "Enter a valid 6 Digit PIN CODE! ")
      .min(6, "Please fill Minimum 6 digit PIN CODE !")
      .max(10, "Invalid PIN CODE!")
      .required("PINCODE is Mandetory!"),
    mobile: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10 Digit Mobile No. ")
      .required("Mobile No. is Mandetory!"),
    // email: Yup.string().email("Invalid email").required("Required"),
  });
  const addresses = [
    {
      id: 1,
      addressline1: "Sakchi",
      addressline2: "Kadma",
      city: "Jamshedpur",
      state: "Jharkhand",
      pin: "831001",
      mobile: "9801307508",
    },
    {
      id: 2,
      addressline1: "Sonari",
      addressline2: "Adityapur",
      city: "Jamshedpur",
      state: "Jharkhand",
      pin: "831005",
      mobile: "9801307548",
    },
  ];
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
                        {/* <Field name="pin" /> */}
                        <InputMask mask="999999" maskChar={null} name="pin" placeholder="Enter PIN" />
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
      {/* <section>
        <Container>
          <Row>
            <Col>
              <div>
                {addresses.map((address, index) => {
                  return (
                    <div>
                      <p>
                        {address.addressline1}, {address.addressline2},City :{" "}
                        {address.city}, State : {address.state}
                        {-address.pin} Mobile : {address.mobile}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section>
        <Container>
          <Row>
            <Col>
              <Formik
                initialValues={{
                  addressId: "",
                }}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                {({ values }) => (
                  <Form>
                    <div id="my-radio-group">addresses</div>
                    <div role="group" aria-labelledby="my-radio-group">
                      {addresses.map((address, index) => {
                        return (
                          <div>
                            <label>
                              <Field
                                type="radio"
                                name="addressId"
                                value={address.id}
                                
                              />
                              {address.addressline1}, {address.addressline2}
                              ,City : {address.city}, State : {address.state} - 
                              {address.pin} Mobile : {address.mobile}
                              {address.id}
                              
                            </label>
                          </div>
                        );
                      })}

                      <div>addresses: {values.addressId}</div>
                    </div>

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

import React from "react";
import { Col, Dropdown, Row, Container, Card, Button } from "react-bootstrap";
import { Formik,Form, Field } from "formik";
import * as Yup from "yup";
const Profile = () => {
  const SignupSchema = Yup.object().shape({
      name: Yup.string()
      .matches(/^[a-zA-Z ]+$/, "Only letters are allowed") 
      .min(2, "Name must be at least 2 characters !")
      .max(20, "Too Long!")
      .required("Name is Mandatory!"),
      mobile: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Enter a valid 10 Digit Mobile No. ")
        .required("Mobile No. is Mandetory!"),
      password: Yup.string()
        .min(6, "Please fill Minimum 6 digit Password !")
        .max(10, "Invalid Password!")
        .required("Password is Mandetory!"),
      email: Yup.string().email("Invalid email").required(" E-mail Id Required!"),
    });
  return (
    <div>
          <section className="glass-container">
            <Container>
              <Row>
                <Col>
                  <h2>Profile</h2>
                  <Formik 
                    initialValues={{
                      name: "",
                      mobile: "",
                      email: "",
                      password: "",
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
                            {/* <input type="mail" required> */}
                            <label>Name</label>
                          </Col>
                          <Col>
                            <Field name="name" type="name"   placeholder="name" />
                            {errors.name && touched.name ? (
                              <div className="text-danger">{errors.name}</div>
                            ) : null}
                          </Col>
                        </Row>
                        <Row className="input-group">
                          <Col>
                            {/* <input type="mail" required> */}
                            <label>E-Mail</label>
                          </Col>
                          <Col>
                            <Field name="email" type="email"   placeholder="email" />
                            {errors.email && touched.email ? (
                              <div className="text-danger">{errors.email}</div>
                            ) : null}
                          </Col>
                        </Row>
                        <Row className="input-group">
                          <Col>
                            <label>Password</label>
                          </Col>
                          <Col>
                            <Field name="password" type="password"  placeholder="password"/>
                            {errors.password && touched.password ? (
                              <div className="text-danger">{errors.password}</div>
                            ) : null}
                          </Col>
                        </Row>
                        <Row className="form-options" >
                          
                          <Col>
                            <label><input type="checkbox"></input>Remember me <a href="/forgot-password" className="forgot-link">Forgot Password</a> </label>
                          
                          </Col>
                        </Row>
                        <Row>
                          <Col></Col>
                          <Col>
                            <button type="login" >Login</button>
                          </Col>
                        </Row>
                        <Row className="register">
                          
                          <Col>
                            <p>Don't have an account? <a href="#">register here</a> </p>
                          
                          </Col>
                        </Row>
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

export default Profile;


import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const Register = () => {
  const SignupSchema = Yup.object().shape({
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
    <div className="register-page">
      <div className="circle"></div>
      <section  className="glass-container">
        <Container>
          <Row>
            <Col>
              <h2 className="form-title"><b>𝚁𝚎𝚐𝚒𝚜𝚝𝚎𝚛</b> </h2>
              <Formik
                initialValues={{
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
                        <label>Mobile</label>
                      </Col>
                      <Col>
                        <Field name="mobile"  />
                        {errors.mobile && touched.mobile ? (
                          <div className="error">{errors.mobile}</div>
                        ) : null}
                      </Col>
                    </Row>
                    <Row className="input-group">
                      <Col>
                        <label>E-Mail</label>
                      </Col>
                      <Col>
                        <Field name="email" type="email"/>
                        {errors.email && touched.email ? (
                          <div className="error">{errors.email}</div>
                        ) : null}
                      </Col>
                    </Row>
                    <Row className="input-group">
                      <Col>
                        <label>Password</label>
                      </Col>
                      <Col>
                        <Field name="password"   type="password" />
                        {errors.password && touched.password ? (
                          <div className="error">{errors.password}</div>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col></Col>
                      <Col>
                        <button type="submit">Register</button>
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

export default Register;

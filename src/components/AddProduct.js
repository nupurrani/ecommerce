import React from "react";
import {
  Col,
  Row,
  Container,
  Card,
  Button,
  Form as BootstrapForm,
} from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const AddProduct = () => {
  const SUPPORTED_FORMATS = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/gif",
    "image/webp",
  ];
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

  const SignupSchema = Yup.object().shape({
    productname: Yup.string()
      .min(6, "Must be at least 6 characters!")
      .max(50, "Must be at most 50 characters!")
      .required("Product Name is Mandatory!"),
    description: Yup.string()
      .min(10, "Description should be at least 10 characters")
      .required("Description is required"),
    stock: Yup.number()
      .positive("Stock must be positive")
      .integer("Stock must be a whole number")
      .required("Stock quantity is required"),
    category: Yup.string().required("Select a Category"),
    price: Yup.string()
      .matches(
        /^\d+(\.\d{2})?$/,
        "Price must be a number with exactly two decimal places"
      )
      .required("Price is mandatory!"),
    color: Yup.string()
      .required("Color is required"),
    size: Yup.string()
      .required("Size is required"),
    tags: Yup.string()
      .required("Tags are required"),
    status: Yup.string()
      .required("Select product status"),
    shipping: Yup.string()
      .required("Shipping details are required"),
    returnPolicy: Yup
      .boolean(),
    photo: Yup.mixed()
      .nullable()
      .required("A photo is required")
      .test("fileSize", "File too large (max 2MB)", (value) => {
        return value && value.size <= MAX_FILE_SIZE;
      })
      .test("fileFormat", "Unsupported Format", (value) => {
        return value && SUPPORTED_FORMATS.includes(value.type);
      }),
  });

  const categories = [
    {
      id: 3,
      category: "men's clothing",
    },
    {
      id: 5,
      category: "jewelery",
    },
    {
      id: 9,
      category: "electronics",
    },
  ];
  const statuses = [
    {
      id: 10,
      status: "Active",
    },
    {
      id: 11,
      status: "Inactive",
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
                  description: "",
                  stock: "",
                  category: "",
                  price: "",
                  photo: null,
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  console.log("Submitted values:", values);
                  alert("Product submitted successfully!");
                }}
              >
                {({ errors, touched, setFieldValue }) => (
                  <Form>
                    <Row className="input-group mb-3">
                      <Col>
                        <label>Product Name</label>
                      </Col>
                      <Col>
                        <Field name="productname" className="form-control" />
                        {errors.productname && touched.productname && (
                          <div className="text-danger">
                            {errors.productname}
                          </div>
                        )}
                      </Col>
                    </Row>
                    <Row className="input-group mb-3">
                      <Col>
                        <label>Description</label>
                      </Col>
                      <Col>
                        <Field name="description" className="description" />
                        {errors.description && touched.description && (
                          <div className="text-danger">{errors.description}</div>
                        )}
                      </Col>
                    </Row>
                    <Row className="input-group mb-3">
                      <Col>
                        <label>Stock Quantity</label>
                      </Col>
                      <Col>
                        <Field name="stock" className="stock" type="number" />
                        {errors.stock && touched.stock && (
                          <div className="error">{errors.stock}</div>
                        )}
                      </Col>
                    </Row>
                    <Row className="input-group mb-3">
                      <Col>
                        <label>Category</label>
                      </Col>
                      <Col>
                        <Field
                          as="select"
                          name="category"
                          className="form-control"
                        >
                          <option value="">Select a category</option>
                          {categories.map((category, index) => {
                            return (
                              <option value={category.category} key={index}>
                                {category.category}
                              </option>
                            );
                          })}
                        </Field>
                        {errors.category && touched.category && (
                          <div className="text-danger">{errors.category}</div>
                        )}
                      </Col>
                    </Row>

                    <Row className="input-group mb-3">
                      <Col>
                        <label>Price</label>
                      </Col>
                      <Col>
                        <Field
                          name="price"
                          type="text"
                          className="form-control"
                        />
                        {errors.price && touched.price && (
                          <div className="text-danger">{errors.price}</div>
                        )}
                      </Col>
                    </Row>
                    <Row className="input-group mb-3">
                      <Col>
                        <label>Color</label>
                      </Col>
                      <Col>
                        <Field name="color" className="color"/>
                        {errors.color && touched.color && (
                          <div className="text-danger">{errors.color}</div>
                        )}
                      </Col>
                    </Row>
                    <Row className="input-group mb-3">
                      <Col>
                        <label>Size</label>
                      </Col>
                      <Col>
                        <Field name="size" className="size" />
                        {errors.size && touched.size && (
                          <div className="text-danger">{errors.size}</div>
                        )}
                      </Col>
                    </Row>
                    <Row className="input-group mb-3">
                      <Col>
                        <label>Tags</label>
                      </Col>
                      <Col>
                        <Field
                          name="tags"
                          placeholder="e.g. electronics, mobile"
                          className="tags"
                        />
                        {errors.tags && touched.tags && (
                          <div className="text-danger">{errors.tags}</div>
                        )}
                      </Col>
                    </Row>
                    <Row className="input-group mb-3">
                      <Col>
                        <label>Status</label>
                      </Col>
                      <Col>
                        <Field as="select" name="status" className="form-control">
                          <option value="">Select Status</option>
                            {statuses.map((status, index)=>{
                              return(
                                <option value={status.status} key={index}>
                                  {status.status}
                                </option>
                              )
                            }
                            )
                            }
                          {/* <option value="active">Active</option>
                          <option value="inactive">Inactive</option> */}
                        </Field>
                        {errors.status && touched.status && (
                          <div className="text-danger">{errors.status}</div>
                        )}
                      </Col>
                    </Row>
                    <Row className="input-group mb-3">
                      <Col>
                        <label>Photo</label>
                      </Col>
                      <Col>
                        <input
                          name="photo"
                          type="file"
                          accept="image/*"
                          className="form-control"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("photo", file);
                          }}
                        />
                        {errors.photo && touched.photo && (
                          <div className="text-danger">{errors.photo}</div>
                        )}
                      </Col>
                    </Row>

                    <Button type="submit" variant="primary">
                      Submit
                    </Button>
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
            <Col></Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AddProduct;

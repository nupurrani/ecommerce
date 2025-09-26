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
const colors = [
  { "name": "AliceBlue", "hex": "#F0F8FF", "rgb": "rgb(240, 248, 255)" },
    { "name": "AntiqueWhite", "hex": "#FAEBD7", "rgb": "rgb(250, 235, 215)" },
    { "name": "Aqua", "hex": "#00FFFF", "rgb": "rgb(0, 255, 255)" },
    { "name": "Aquamarine", "hex": "#7FFFD4", "rgb": "rgb(127, 255, 212)" },
    { "name": "Azure", "hex": "#F0FFFF", "rgb": "rgb(240, 255, 255)" },
    { "name": "Beige", "hex": "#F5F5DC", "rgb": "rgb(245, 245, 220)" },
    { "name": "Bisque", "hex": "#FFE4C4", "rgb": "rgb(255, 228, 196)" },
    { "name": "Black", "hex": "#000000", "rgb": "rgb(0, 0, 0)" },
    { "name": "BlanchedAlmond", "hex": "#FFEBCD", "rgb": "rgb(255, 235, 205)" },
    { "name": "Blue", "hex": "#0000FF", "rgb": "rgb(0, 0, 255)" },
    { "name": "BlueViolet", "hex": "#8A2BE2", "rgb": "rgb(138, 43, 226)" },
    { "name": "Brown", "hex": "#A52A2A", "rgb": "rgb(165, 42, 42)" },
    { "name": "BurlyWood", "hex": "#DEB887", "rgb": "rgb(222, 184, 135)" },
    { "name": "CadetBlue", "hex": "#5F9EA0", "rgb": "rgb(95, 158, 160)" },
    { "name": "Chartreuse", "hex": "#7FFF00", "rgb": "rgb(127, 255, 0)" },
    { "name": "Chocolate", "hex": "#D2691E", "rgb": "rgb(210, 105, 30)" },
    { "name": "Coral", "hex": "#FF7F50", "rgb": "rgb(255, 127, 80)" },
    { "name": "CornflowerBlue", "hex": "#6495ED", "rgb": "rgb(100, 149, 237)" },
    { "name": "Cornsilk", "hex": "#FFF8DC", "rgb": "rgb(255, 248, 220)" },
    { "name": "Crimson", "hex": "#DC143C", "rgb": "rgb(220, 20, 60)" },
    { "name": "Cyan", "hex": "#00FFFF", "rgb": "rgb(0, 255, 255)" },
    { "name": "DarkBlue", "hex": "#00008B", "rgb": "rgb(0, 0, 139)" },
    { "name": "DarkCyan", "hex": "#008B8B", "rgb": "rgb(0, 139, 139)" },
    { "name": "DarkGoldenRod", "hex": "#B8860B", "rgb": "rgb(184, 134, 11)" },
    { "name": "DarkGray", "hex": "#A9A9A9", "rgb": "rgb(169, 169, 169)" },
    { "name": "DarkGreen", "hex": "#006400", "rgb": "rgb(0, 100, 0)" },
    { "name": "DarkKhaki", "hex": "#BDB76B", "rgb": "rgb(189, 183, 107)" },
    { "name": "DarkMagenta", "hex": "#8B008B", "rgb": "rgb(139, 0, 139)" },
    { "name": "DarkOliveGreen", "hex": "#556B2F", "rgb": "rgb(85, 107, 47)" },
    { "name": "DarkOrange", "hex": "#FF8C00", "rgb": "rgb(255, 140, 0)" },
    { "name": "DarkOrchid", "hex": "#9932CC", "rgb": "rgb(153, 50, 204)" },
    { "name": "DarkRed", "hex": "#8B0000", "rgb": "rgb(139, 0, 0)" },
    { "name": "DarkSalmon", "hex": "#E9967A", "rgb": "rgb(233, 150, 122)" },
    { "name": "DarkSeaGreen", "hex": "#8FBC8F", "rgb": "rgb(143, 188, 143)" },
    { "name": "DarkSlateBlue", "hex": "#483D8B", "rgb": "rgb(72, 61, 139)" },
    { "name": "DarkSlateGray", "hex": "#2F4F4F", "rgb": "rgb(47, 79, 79)" },
    { "name": "DarkTurquoise", "hex": "#00CED1", "rgb": "rgb(0, 206, 209)" },
    { "name": "DarkViolet", "hex": "#9400D3", "rgb": "rgb(148, 0, 211)" },
    { "name": "DeepPink", "hex": "#FF1493", "rgb": "rgb(255, 20, 147)" },
    { "name": "DeepSkyBlue", "hex": "#00BFFF", "rgb": "rgb(0, 191, 255)" },
    { "name": "DimGray", "hex": "#696969", "rgb": "rgb(105, 105, 105)" },
    { "name": "DodgerBlue", "hex": "#1E90FF", "rgb": "rgb(30, 144, 255)" },
    { "name": "FireBrick", "hex": "#B22222", "rgb": "rgb(178, 34, 34)" },
    { "name": "FloralWhite", "hex": "#FFFAF0", "rgb": "rgb(255, 250, 240)" },
    { "name": "ForestGreen", "hex": "#228B22", "rgb": "rgb(34, 139, 34)" },
    { "name": "Fuchsia", "hex": "#FF00FF", "rgb": "rgb(255, 0, 255)" },
    { "name": "Gainsboro", "hex": "#DCDCDC", "rgb": "rgb(220, 220, 220)" },
    { "name": "GhostWhite", "hex": "#F8F8FF", "rgb": "rgb(248, 248, 255)" },
    { "name": "Gold", "hex": "#FFD700", "rgb": "rgb(255, 215, 0)" },
    { "name": "GoldenRod", "hex": "#DAA520", "rgb": "rgb(218, 165, 32)" },
    { "name": "Gray", "hex": "#808080", "rgb": "rgb(128, 128, 128)" },
    { "name": "Green", "hex": "#008000", "rgb": "rgb(0, 128, 0)" },
    { "name": "GreenYellow", "hex": "#ADFF2F", "rgb": "rgb(173, 255, 47)" },
    { "name": "HoneyDew", "hex": "#F0FFF0", "rgb": "rgb(240, 255, 240)" },
    { "name": "HotPink", "hex": "#FF69B4", "rgb": "rgb(255, 105, 180)" },
    { "name": "IndianRed", "hex": "#CD5C5C", "rgb": "rgb(205, 92, 92)" },
    { "name": "Indigo", "hex": "#4B0082", "rgb": "rgb(75, 0, 130)" },
    { "name": "Ivory", "hex": "#FFFFF0", "rgb": "rgb(255, 255, 240)" },
    { "name": "Khaki", "hex": "#F0E68C", "rgb": "rgb(240, 230, 140)" },
    { "name": "Lavender", "hex": "#E6E6FA", "rgb": "rgb(230, 230, 250)" },
    { "name": "LavenderBlush", "hex": "#FFF0F5", "rgb": "rgb(255, 240, 245)" },
    { "name": "LawnGreen", "hex": "#7CFC00", "rgb": "rgb(124, 252, 0)" },
    { "name": "LemonChiffon", "hex": "#FFFACD", "rgb": "rgb(255, 250, 205)" },
    { "name": "LightBlue", "hex": "#ADD8E6", "rgb": "rgb(173, 216, 230)" },
    { "name": "LightCoral", "hex": "#F08080", "rgb": "rgb(240, 128, 128)" },
    { "name": "LightCyan", "hex": "#E0FFFF", "rgb": "rgb(224, 255, 255)" },
    { "name": "LightGoldenRodYellow", "hex": "#FAFAD2", "rgb": "rgb(250, 250, 210)" },
    { "name": "LightGray", "hex": "#D3D3D3", "rgb": "rgb(211, 211, 211)" },
    { "name": "LightGreen", "hex": "#90EE90", "rgb": "rgb(144, 238, 144)" },
    { "name": "LightPink", "hex": "#FFB6C1", "rgb": "rgb(255, 182, 193)" },
    { "name": "LightSalmon", "hex": "#FFA07A", "rgb": "rgb(255, 160, 122)" },
    { "name": "LightSeaGreen", "hex": "#20B2AA", "rgb": "rgb(32, 178, 170)" },
    { "name": "LightSkyBlue", "hex": "#87CEFA", "rgb": "rgb(135, 206, 250)" },
    { "name": "LightSlateGray", "hex": "#778899", "rgb": "rgb(119, 136, 153)" },
    { "name": "LightSteelBlue", "hex": "#B0C4DE", "rgb": "rgb(176, 196, 222)" },
    { "name": "LightYellow", "hex": "#FFFFE0", "rgb": "rgb(255, 255, 224)" },
    { "name": "Lime", "hex": "#00FF00", "rgb": "rgb(0, 255, 0)" },
    { "name": "LimeGreen", "hex": "#32CD32", "rgb": "rgb(50, 205, 50)" },
    { "name": "Linen", "hex": "#FAF0E6", "rgb": "rgb(250, 240, 230)" },
    { "name": "Magenta", "hex": "#FF00FF", "rgb": "rgb(255, 0, 255)" },
    { "name": "Maroon", "hex": "#800000", "rgb": "rgb(128, 0, 0)" },
    { "name": "MediumAquaMarine", "hex": "#66CDAA", "rgb": "rgb(102, 205, 170)" },
    { "name": "MediumBlue", "hex": "#0000CD", "rgb": "rgb(0, 0, 205)" },
    { "name": "MediumOrchid", "hex": "#BA55D3", "rgb": "rgb(186, 85, 211)" },
    { "name": "MediumPurple", "hex": "#9370DB", "rgb": "rgb(147, 112, 219)" },
    { "name": "MediumSeaGreen", "hex": "#3CB371", "rgb": "rgb(60, 179, 113)" },
    { "name": "MediumSlateBlue", "hex": "#7B68EE", "rgb": "rgb(123, 104, 238)" },
    { "name": "MediumSpringGreen", "hex": "#00FA9A", "rgb": "rgb(0, 250, 154)" },
    { "name": "MediumTurquoise", "hex": "#48D1CC", "rgb": "rgb(72, 209, 204)" },
    { "name": "MediumVioletRed", "hex": "#C71585", "rgb": "rgb(199, 21, 133)" },
    { "name": "MidnightBlue", "hex": "#191970", "rgb": "rgb(25, 25, 112)" },
    { "name": "MintCream", "hex": "#F5FFFA", "rgb": "rgb(245, 255, 250)" },
    { "name": "MistyRose", "hex": "#FFE4E1", "rgb": "rgb(255, 228, 225)" },
    { "name": "Moccasin", "hex": "#FFE4B5", "rgb": "rgb(255, 228, 181)" },
    { "name": "NavajoWhite", "hex": "#FFDEAD", "rgb": "rgb(255, 222, 173)" },
    { "name": "Navy", "hex": "#000080", "rgb": "rgb(0, 0, 128)" },
    { "name": "OldLace", "hex": "#FDF5E6", "rgb": "rgb(253, 245, 230)" },
    { "name": "Olive", "hex": "#808000", "rgb": "rgb(128, 128, 0)" },
    { "name": "OliveDrab", "hex": "#6B8E23", "rgb": "rgb(107, 142, 35)" },
    { "name": "Orange", "hex": "#FFA500", "rgb": "rgb(255, 165, 0)" },
    { "name": "OrangeRed", "hex": "#FF4500", "rgb": "rgb(255, 69, 0)" },
    { "name": "Orchid", "hex": "#DA70D6", "rgb": "rgb(218, 112, 214)" },
    { "name": "PaleGoldenRod", "hex": "#EEE8AA", "rgb": "rgb(238, 232, 170)" },
    { "name": "PaleGreen", "hex": "#98FB98", "rgb": "rgb(152, 251, 152)" },
    { "name": "PaleTurquoise", "hex": "#AFEEEE", "rgb": "rgb(175, 238, 238)" },
    { "name": "PaleVioletRed", "hex": "#DB7093", "rgb": "rgb(219, 112, 147)" },
    { "name": "PapayaWhip", "hex": "#FFEFD5", "rgb": "rgb(255, 239, 213)" },
    { "name": "PeachPuff", "hex": "#FFDAB9", "rgb": "rgb(255, 218, 185)" },
    { "name": "Peru", "hex": "#CD853F", "rgb": "rgb(205, 133, 63)" },
    { "name": "Pink", "hex": "#FFC0CB", "rgb": "rgb(255, 192, 203)" },
    { "name": "Plum", "hex": "#DDA0DD", "rgb": "rgb(221, 160, 221)" },
    { "name": "PowderBlue", "hex": "#B0E0E6", "rgb": "rgb(176, 224, 230)" },
    { "name": "Purple", "hex": "#800080", "rgb": "rgb(128, 0, 128)" },
    { "name": "RebeccaPurple", "hex": "#663399", "rgb": "rgb(102, 51, 153)" },
    { "name": "Red", "hex": "#FF0000", "rgb": "rgb(255, 0, 0)" },
    { "name": "RosyBrown", "hex": "#BC8F8F", "rgb": "rgb(188, 143, 143)" },
    { "name": "RoyalBlue", "hex": "#4169E1", "rgb": "rgb(65, 105, 225)" },
    { "name": "SaddleBrown", "hex": "#8B4513", "rgb": "rgb(139, 69, 19)" },
    { "name": "Salmon", "hex": "#FA8072", "rgb": "rgb(250, 128, 114)" },
    { "name": "SandyBrown", "hex": "#F4A460", "rgb": "rgb(244, 164, 96)" },
    { "name": "SeaGreen", "hex": "#2E8B57", "rgb": "rgb(46, 139, 87)" },
    { "name": "SeaShell", "hex": "#FFF5EE", "rgb": "rgb(255, 245, 238)" },
    { "name": "Sienna", "hex": "#A0522D", "rgb": "rgb(160, 82, 45)" },
    { "name": "Silver", "hex": "#C0C0C0", "rgb": "rgb(192, 192, 192)" },
    { "name": "SkyBlue", "hex": "#87CEEB", "rgb": "rgb(135, 206, 235)" },
    { "name": "SlateBlue", "hex": "#6A5ACD", "rgb": "rgb(106, 90, 205)" },
    { "name": "SlateGray", "hex": "#708090", "rgb": "rgb(112, 128, 144)" },
    { "name": "Snow", "hex": "#FFFAFA", "rgb": "rgb(255, 250, 250)" },
    { "name": "SpringGreen", "hex": "#00FF7F", "rgb": "rgb(0, 255, 127)" },
    { "name": "SteelBlue", "hex": "#4682B4", "rgb": "rgb(70, 130, 180)" },
    { "name": "Tan", "hex": "#D2B48C", "rgb": "rgb(210, 180, 140)" },
    { "name": "Teal", "hex": "#008080", "rgb": "rgb(0, 128, 128)" },
    { "name": "Thistle", "hex": "#D8BFD8", "rgb": "rgb(216, 191, 216)" },
    { "name": "Tomato", "hex": "#FF6347", "rgb": "rgb(255, 99, 71)" },
    { "name": "Turquoise", "hex": "#40E0D0", "rgb": "rgb(64, 224, 208)" },
    { "name": "Violet", "hex": "#EE82EE", "rgb": "rgb(238, 130, 238)" },
    { "name": "Wheat", "hex": "#F5DEB3", "rgb": "rgb(245, 222, 179)" },
    { "name": "White", "hex": "#FFFFFF", "rgb": "rgb(255, 255, 255)" },
    { "name": "WhiteSmoke", "hex": "#F5F5F5", "rgb": "rgb(245, 245, 245)" },
    { "name": "Yellow", "hex": "#FFFF00", "rgb": "rgb(255, 255, 0)" },
    { "name": "YellowGreen", "hex": "#9ACD32", "rgb": "rgb(154, 205, 50)" }
];
const sizes = [
    { "name": "Extra Large", "short": "XL", "value": "xl" },
    { "name": "Extra Small", "short": "XS", "value": "xs" },
    { "name": "Large", "short": "L", "value": "l" },
    { "name": "Medium", "short": "M", "value": "m" },
    { "name": "Small", "short": "S", "value": "s" },
    { "name": "XX-Large", "short": "XXL", "value": "xxl" },
    { "name": "XX-Small", "short": "XXS", "value": "xxs" }
]
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
                  color: "",
                  size: "",
                  status: "",
                  tags: "",
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
                        <Field as="textarea" name="description" className="description" />
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
                        <Field name="stock" className="stock form-control" type="number"  />
                        {errors.stock && touched.stock && (
                          <div className="text-danger">{errors.stock}</div>
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
                        {/* <Field name="color" className="color"/> */}
                        <Field as="select" name="color" type="text" className="form-control">
                          <option value="">Select Color</option>
                            {colors.map((color, index)=>{
                              return(
                                <option value={color.name} key={index}>
                                  {color.name}
                                </option>
                              )
                            }
                            )
                            }
                          {/* <option value="active">Active</option>
                          <option value="inactive">Inactive</option> */}
                        </Field>
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
                        {/* <Field name="size" className="size" /> */}
                        <Field as="select" name="size" className="form-control">
                          <option value="">Select Size</option>
                            {sizes.map((size, index)=>{
                              return(
                                <option value={size.name} key={index}>
                                  {size.name}
                                </option>
                              )
                            }
                            )
                            }
                          {/* <option value="active">Active</option>
                          <option value="inactive">Inactive</option> */}
                        </Field>
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
                          className="form-control"
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

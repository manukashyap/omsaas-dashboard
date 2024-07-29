import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Container,
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { Formik, Form, FieldArray } from "formik";
import * as yup from "yup";

const ProductForm = () => {
  const [vendorId, setVendorId] = useState("");

  const initialValues = {
    vendorId: "",
    products: [{ productName: "", unitQty: "", quantity: "", unitPrice: "" }],
  };

  const validationSchema = yup.object().shape({
    vendorId: yup.string().required("Vendor ID is required"),
    products: yup.array().of(
      yup.object().shape({
        productName: yup.string().required("Product Name is required"),
        unitQty: yup.string().required("Unit Quantity is required"),
        quantity: yup
          .number()
          .required("Quantity is required")
          .positive()
          .integer(),
        unitPrice: yup.number().required("Unit Price is required").positive(),
      })
    ),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/v1/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Order created successfully");
      } else {
        alert("Failed to create order");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <Container maxWidth="100%">
      <Box>
        <Typography variant="h4" m="20px" gutterBottom>
          Add Product List
        </Typography>
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <FieldArray name="products">
              {({ push, remove }) => (
                <Box>
                  {values.products.map((product, index) => (
                    <Grid container spacing={2} key={index}>
                      <Grid item xs={3}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Product Name"
                          name={`products[${index}].productName`}
                          value={product.productName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.products?.[index]?.productName &&
                            !!errors.products?.[index]?.productName
                          }
                          helperText={
                            touched.products?.[index]?.productName &&
                            errors.products?.[index]?.productName
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Unit Quantity"
                          name={`products[${index}].unitQty`}
                          value={product.unitQty}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.products?.[index]?.unitQty &&
                            !!errors.products?.[index]?.unitQty
                          }
                          helperText={
                            touched.products?.[index]?.unitQty &&
                            errors.products?.[index]?.unitQty
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Quantity"
                          name={`products[${index}].quantity`}
                          value={product.quantity}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.products?.[index]?.quantity &&
                            !!errors.products?.[index]?.quantity
                          }
                          helperText={
                            touched.products?.[index]?.quantity &&
                            errors.products?.[index]?.quantity
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="Unit Price"
                          name={`products[${index}].unitPrice`}
                          value={product.unitPrice}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.products?.[index]?.unitPrice &&
                            !!errors.products?.[index]?.unitPrice
                          }
                          helperText={
                            touched.products?.[index]?.unitPrice &&
                            errors.products?.[index]?.unitPrice
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        display="flex"
                        alignItems="right"
                        justifyContent="space-between"
                      >
                        <IconButton
                          color="secondary"
                          onClick={() => remove(index)}
                          disabled={values.products.length === 1}
                        >
                          <Remove />
                        </IconButton>
                      </Grid>
                    </Grid>
                  ))}
                  <IconButton
                    color="secondary"
                    onClick={() =>
                      push({
                        productName: "",
                        unitQty: "",
                        quantity: "",
                        unitPrice: "",
                      })
                    }
                    m="20px"
                  >
                    <Add fontSize="large"/>
                  </IconButton>
                </Box>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ProductForm;

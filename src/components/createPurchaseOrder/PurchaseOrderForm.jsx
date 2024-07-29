import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Autocomplete from "@mui/material/Autocomplete";
import ProductForm from "../purchase/ProductForm";
import Header from "../Header";

const mockVendors = [
  {
    id: 1,
    vendorName: "Vendor A",
    email: "vendorA@example.com",
    phoneNumber: "1234567890",
    address: "123 Main St, City, Country",
    pin: "123456",
  },
  {
    id: 2,
    vendorName: "Vendor B",
    email: "vendorB@example.com",
    phoneNumber: "0987654321",
    address: "456 Elm St, City, Country",
    pin: "654321",
  },
];

const PurchaseOrderForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [selectedVendor, setSelectedVendor] = useState(null);

  const handleVendorSelect = (event, value, setFieldValue) => {
    if (value) {
      setSelectedVendor(value);
      setFieldValue("vendorName", value.vendorName);
      setFieldValue("email", value.email);
      setFieldValue("contact", value.phoneNumber);
      setFieldValue("address1", value.address);
      setFieldValue("pin", value.pin);
    } else {
      setSelectedVendor(null);
      setFieldValue("vendorName", "");
      setFieldValue("email", "");
      setFieldValue("contact", "");
      setFieldValue("address1", "");
      setFieldValue("pin", "");
    }
  };

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <Autocomplete
                disablePortal
                options={mockVendors}
                getOptionLabel={(option) => option.vendorName}
                sx={{ gridColumn: "span 4" }}
                onChange={(event, value) =>
                  handleVendorSelect(event, value, setFieldValue)
                }
                onBlur={handleBlur}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Vendor Name"
                    name="vendorName"
                    error={!!touched.vendorName && !!errors.vendorName}
                    helperText={touched.vendorName && errors.vendorName}
                  />
                )}
              />
              {selectedVendor && (
                <Box>
                  <Typography variant="h4" gutterBottom>
                    Selected Vendor Details
                  </Typography>
                  <Card sx={{ mt: 4, mb: 4 }}>
                    <CardContent>
                      <Typography variant="h5">
                        {selectedVendor.vendorName}
                      </Typography>
                      <Typography variant="body1">
                        Email: {selectedVendor.email}
                      </Typography>
                      <Typography variant="body1">
                        Phone: {selectedVendor.phoneNumber}
                      </Typography>
                      <Typography variant="body1">
                        Address: {selectedVendor.address}
                      </Typography>
                      <Typography variant="body1">
                        Pin: {selectedVendor.pin}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              )}
            </Box>
            <ProductForm/>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create Purchase Order
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const faxRegExp = /^\+?[0-9]+$/;

const pinRegExp = /^(\d{4}|\d{6})$/;

const websiteRegExp =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const checkoutSchema = yup.object().shape({
  vendorName: yup.string().required("required"),
  email: yup.string().email("Invalid Email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  fax: yup.string().matches(faxRegExp, "Fax number is not valid"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
  pin: yup
    .string()
    .matches(pinRegExp, "Pincode is not valid")
    .required("required"),
  website: yup.string().matches(websiteRegExp, "Enter correct url"),
});

const initialValues = {
  vendorName: "",
  email: "",
  contact: "",
  fax: "",
  address1: "",
  address2: "",
  pin: "",
  website: "",
};

export default PurchaseOrderForm;

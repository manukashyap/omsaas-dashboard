import { Box, Button, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../Header";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import PinDropIcon from "@mui/icons-material/PinDrop";

const VendorForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [vendor, setVendor] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    pin: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor((prevVendor) => ({
      ...prevVendor,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/v1/vendor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert("Vendor added successfully");
      } else {
        alert("Failed to add vendor");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <Box m="20px">
      {/*<Header title="Create Purchase Order" subtitle="Create a New User Profile" />*/}
      <Header subtitle="Vendor Details" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={vendor}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
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
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Vendor Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DriveFileRenameOutlineIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhoneIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
                name="phoneNumber"
                error={!!touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Pincode"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PinDropIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pin}
                name="pin"
                error={!!touched.pin && !!errors.pin}
                helperText={touched.pin && errors.pin}
                sx={{ gridColumn: "span 1" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Vendor
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

const pinRegExp = /^(\d{4}|\d{6})$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().email("Invalid Email").required("required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address: yup.string().required("required"),
  pin: yup
    .string()
    .matches(pinRegExp, "Pincode is not valid")
    .required("required"),
});

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  pin: "",
};

export default VendorForm;
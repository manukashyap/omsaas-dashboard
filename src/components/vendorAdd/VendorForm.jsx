import { Box, Button, TextField, InputAdornment } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../Header";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaxIcon from '@mui/icons-material/Fax';
import HomeIcon from '@mui/icons-material/Home';
import PinDropIcon from '@mui/icons-material/PinDrop';
import LanguageIcon from '@mui/icons-material/Language';
import { mockDataProduct } from "../../data/mockData";
import Autocomplete from '@mui/material/Autocomplete';

const VendorForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      {/*<Header title="Create Purchase Order" subtitle="Create a New User Profile" />*/}
      <Header subtitle="Vendor Details" />
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
          setFieldValue
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
                  )
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vendorName}
                name="vendorName"
                error={!!touched.vendorName && !!errors.vendorName}
                helperText={touched.vendorName && errors.vendorName}
                sx={{ gridColumn: "span 2" }}
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
                  )
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
                label="Contact Number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhoneIcon />
                    </InputAdornment>
                  )
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fax"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaxIcon />
                    </InputAdornment>
                  )
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fax}
                name="fax"
                error={!!touched.fax && !!errors.fax}
                helperText={touched.fax && errors.fax}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  )
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  )
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Pin"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PinDropIcon />
                    </InputAdornment>
                  )
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pin}
                name="pin"
                error={!!touched.pin && !!errors.pin}
                helperText={touched.pin && errors.pin}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Website"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageIcon />
                    </InputAdornment>
                  )
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.website}
                name="website"
                error={!!touched.website && !!errors.website}
                helperText={touched.website && errors.website}
                sx={{ gridColumn: "span 2" }}
              />
              {/*<Header subtitle="Product Details" />*/}
              <Autocomplete
                disablePortal
                options={mockDataProduct}
                getOptionLabel={option => option.productName}
                sx={{ gridColumn: "span 1" }}
                onChange={(e, value) => {
                  console.log(value);
                  setFieldValue(
                    value !== null ? value : initialValues.productName
                  );
                }}
                onBlur={handleBlur}
                renderInput={(params) =>
                  <TextField
                    {...params}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Product Name"                  
                    name="productName"
                    error={!!touched.productName && !!errors.productName}
                    helperText={touched.productName && errors.productName}
                  />}
              />
              <Autocomplete
                disablePortal
                options={mockDataProduct}
                getOptionLabel={option => option.productType}
                sx={{ gridColumn: "span 1" }}
                onChange={(e, value) => {
                  console.log(value);
                  setFieldValue(
                    value !== null ? value : initialValues.productType
                  );
                }}
                onBlur={handleBlur}
                renderInput={(params) =>
                  <TextField
                    {...params}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Product Type"                  
                    name="productType"
                    error={!!touched.productType && !!errors.productType}
                    helperText={touched.productType && errors.productType}
                  />}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  )
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 1" }}
              />
              <Autocomplete
                disablePortal
                options={mockDataProduct}
                getOptionLabel={option => option.productType}
                sx={{ gridColumn: "span 1" }}
                onChange={(e, value) => {
                  console.log(value);
                  setFieldValue(
                    value !== null ? value : initialValues.productType
                  );
                }}
                onBlur={handleBlur}
                renderInput={(params) =>
                  <TextField
                    {...params}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Product Type"                  
                    name="productType"
                    error={!!touched.productType && !!errors.productType}
                    helperText={touched.productType && errors.productType}
                  />}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add Vendor
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

const faxRegExp =
  /^\+?[0-9]+$/;

const pinRegExp =
  /^(\d{4}|\d{6})$/;

const websiteRegExp =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const checkoutSchema = yup.object().shape({
  vendorName: yup.string().required("required"),
  email: yup.string().email("Invalid Email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  fax: yup
    .string()
    .matches(faxRegExp, "Fax number is not valid"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
  pin: yup
    .string()
    .matches(pinRegExp, "Pincode is not valid")
    .required("required"),
  website: yup.string()
  .matches(websiteRegExp, "Enter correct url")
});
const initialValues = {
  vendorName: "",
  email: "",
  contact: "",
  fax:"",
  address1: "",
  address2: "",
  pin:"",
  website:""
};

export default VendorForm;

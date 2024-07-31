import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { mockDataStoreDetails } from '../../data/mockData';
import { Box, Typography, TextField, Button, InputAdornment, MenuItem, Tabs, Tab, useTheme } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import TimerOffIcon from '@mui/icons-material/TimerOff';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import RestoreIcon from '@mui/icons-material/Restore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Header from "../../components/Header";

// List of timezones
const timezones = [
  "UTC",
  "GMT",
  "EST",
  "CST",
  "MST",
  "PST",
  "IST",
  "CET",
  "EET",
  "AST",
  "HST",
  // Add other timezones as needed
];

// List of operational statuses
const operationalStatuses = ["True", "False"];

// Days of the week
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const StoreDetails = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { id } = useParams();
  const navigate = useNavigate();
  const store = mockDataStoreDetails.find((store) => store.storeId === parseInt(id));

  const [selectedTab, setSelectedTab] = useState(0);

  if (!store) {
    return <Typography variant="h4">Store not found</Typography>;
  }

  const initialValues = {
    storeName: store.storeName,
    storeStartTime: store.storeStartTime,
    storeEndTime: store.storeEndtime,
    timezone: store.timezone,
    storeOperationalStatus: store.storeOperationalStatus,
    storeCalendar: store.storeCalendar,
    storeType: store.storeType,
  };

  const validationSchema = Yup.object({
    storeName: Yup.string().required('Required'),
    storeStartTime: Yup.string().required('Required'),
    storeEndTime: Yup.string().required('Required'),
    timezone: Yup.string().required('Required'),
    storeOperationalStatus: Yup.string().required('Required'),
    storeCalendar: Yup.object().shape({
      Monday: Yup.string().required('Required'),
      Tuesday: Yup.string().required('Required'),
      Wednesday: Yup.string().required('Required'),
      Thursday: Yup.string().required('Required'),
      Friday: Yup.string().required('Required'),
      Saturday: Yup.string().required('Required'),
      Sunday: Yup.string().required('Required'),
    }),
    storeType: Yup.object().shape({
      Inflow: Yup.object().shape({
        purchaseOrder: Yup.string().required('Required'),
        stockTransfer: Yup.string().required('Required'),
      }),
      Outflow: Yup.object().shape({
        stockTransfer: Yup.string().required('Required'),
        salvage: Yup.string().required('Required'),
        sales: Yup.string().required('Required'),
      }),
    }),
  });

  const handleSave = (values) => {
    // Handle save logic here, e.g., update the data source or make an API call
    console.log('Updated store data:', values);
    alert('Store details saved successfully!');
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this store?");
    if (confirmDelete) {
      const updatedStoreList = [...mockDataStoreDetails];
      const index = updatedStoreList.findIndex((store) => store.storeId === parseInt(id));
      if (index !== -1) {
        updatedStoreList.splice(index, 1);
        alert('Store deleted successfully!');
        navigate('/stores');
      }
    }
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        {store.storeName} Details
      </Typography>
      <Typography variant="body1">
        <strong>Store ID:</strong> {store.storeId}
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSave}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form>
            <Box mt="20px">
              <Header subtitle="Basic Details"/>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <Field
                  as={TextField}
                  name="storeName"
                  label="Store Name"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DriveFileRenameOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={touched.storeName && !!errors.storeName}
                  helperText={touched.storeName && errors.storeName}
                  //margin="normal"
                  sx={{ gridColumn: "span 4" }}
                />
                <Field
                  as={TextField}
                  name="storeStartTime"
                  label="Start Time"
                  type="time"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccessTimeIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={touched.storeStartTime && !!errors.storeStartTime}
                  helperText={touched.storeStartTime && errors.storeStartTime}
                  //margin="normal"
                  sx={{ gridColumn: "span 2" }}
                />
                <Field
                  as={TextField}
                  name="storeEndTime"
                  label="End Time"
                  type="time"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TimerOffIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={touched.storeEndTime && !!errors.storeEndTime}
                  helperText={touched.storeEndTime && errors.storeEndTime}
                  //margin="normal"
                  sx={{ gridColumn: "span 2" }}
                />
                <Field
                  as={TextField}
                  name="timezone"
                  label="Timezone"
                  fullWidth
                  variant="filled"
                  select
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LanguageIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleChange}
                  error={touched.timezone && !!errors.timezone}
                  helperText={touched.timezone && errors.timezone}
                  //margin="normal"
                  sx={{ gridColumn: "span 2" }}
                >
                  {timezones.map((timezone) => (
                    <MenuItem key={timezone} value={timezone}>
                      {timezone}
                    </MenuItem>
                  ))}
                </Field>
                <Field
                  as={TextField}
                  name="storeOperationalStatus"
                  label="Operational Status"
                  fullWidth
                  variant="filled"
                  select
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SettingsIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleChange}
                  error={touched.storeOperationalStatus && !!errors.storeOperationalStatus}
                  helperText={touched.storeOperationalStatus && errors.storeOperationalStatus}
                  //margin="normal"
                  sx={{ gridColumn: "span 2" }}
                >
                  {operationalStatuses.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Field>
              </Box>
            </Box>
            <Box mt="20px">
              <Header subtitle="Store Calendar" />
              <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap="10px" mt="10px">
                {daysOfWeek.map((day) => (
                  <Field
                    as={TextField}
                    key={day}
                    fullWidth
                    variant="filled"
                    select
                    label={day}
                    name={`storeCalendar.${day}`}
                    value={values.storeCalendar[day]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.storeCalendar?.[day] && !!errors.storeCalendar?.[day]}
                    helperText={touched.storeCalendar?.[day] && errors.storeCalendar?.[day]}
                  >
                    {operationalStatuses.map((status) => (
                      <MenuItem key={status} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </Field>
                ))}
              </Box>
            </Box>
            <Box mt="20px">
              <Header subtitle="Store Configuration" />
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                textColor="inherit"
                indicatorColor="primary"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: theme.palette.primary.main,
                  },
                  "& .MuiTab-root": {
                    color: theme.palette.mode === 'dark' ? '#ffffff' : 'inherit',
                    fontWeight: 'normal',
                  },
                  "& .MuiTab-root.Mui-selected": {
                    fontWeight: 'bold',
                    color: theme.palette.mode === 'dark' ? '#ffffff' : theme.palette.primary.main,
                  }
                }}
              >
                <Tab label="Inflow" />
                <Tab label="Outflow" />
              </Tabs>
              <Box display="grid" gridTemplateColumns={`repeat(${selectedTab === 0 ? 2 : 3}, 1fr)`} gap="10px" mt="10px">
                {selectedTab === 0 && (
                  <>
                    <Field
                      as={TextField}
                      fullWidth
                      variant="filled"
                      select
                      label="Purchase Order"
                      name="storeType.Inflow.purchaseOrder"
                      value={values.storeType.Inflow.purchaseOrder}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.storeType?.Inflow?.purchaseOrder && !!errors.storeType?.Inflow?.purchaseOrder}
                      helperText={touched.storeType?.Inflow?.purchaseOrder && errors.storeType?.Inflow?.purchaseOrder}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocalShippingIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {operationalStatuses.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Field>
                    <Field
                      as={TextField}
                      fullWidth
                      variant="filled"
                      select
                      label="Stock Transfer"
                      name="storeType.Inflow.stockTransfer"
                      value={values.storeType.Inflow.stockTransfer}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.storeType?.Inflow?.stockTransfer && !!errors.storeType?.Inflow?.stockTransfer}
                      helperText={touched.storeType?.Inflow?.stockTransfer && errors.storeType?.Inflow?.stockTransfer}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <InventoryIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {operationalStatuses.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Field>
                  </>
                )}
                {selectedTab === 1 && (
                  <>
                    <Field
                      as={TextField}
                      fullWidth
                      variant="filled"
                      select
                      label="Stock Transfer"
                      name="storeType.Outflow.stockTransfer"
                      value={values.storeType.Outflow.stockTransfer}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.storeType?.Outflow?.stockTransfer && !!errors.storeType?.Outflow?.stockTransfer}
                      helperText={touched.storeType?.Outflow?.stockTransfer && errors.storeType?.Outflow?.stockTransfer}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <InventoryIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {operationalStatuses.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Field>
                    <Field
                      as={TextField}
                      fullWidth
                      variant="filled"
                      select
                      label="Salvage"
                      name="storeType.Outflow.salvage"
                      value={values.storeType.Outflow.salvage}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.storeType?.Outflow?.salvage && !!errors.storeType?.Outflow?.salvage}
                      helperText={touched.storeType?.Outflow?.salvage && errors.storeType?.Outflow?.salvage}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <RestoreIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {operationalStatuses.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Field>
                    <Field
                      as={TextField}
                      fullWidth
                      variant="filled"
                      select
                      label="Sales"
                      name="storeType.Outflow.sales"
                      value={values.storeType.Outflow.sales}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.storeType?.Outflow?.sales && !!errors.storeType?.Outflow?.sales}
                      helperText={touched.storeType?.Outflow?.sales && errors.storeType?.Outflow?.sales}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <ShoppingCartIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {operationalStatuses.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Field>
                  </>
                )}
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="contained" color="secondary" type="submit">
                Save
              </Button>
              <Button variant="contained" color="secondary" onClick={handleDelete}>
                Delete
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default StoreDetails;

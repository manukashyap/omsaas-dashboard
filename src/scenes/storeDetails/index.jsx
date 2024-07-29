import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockDataStoreList } from '../../data/mockData';
import { Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const StoreDetails = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { id } = useParams();
  const navigate = useNavigate();
  const store = mockDataStoreList.find((store) => store.id === parseInt(id));

  if (!store) {
    return <Typography variant="h4">Store not found</Typography>;
  }

  const initialValues = {
    storeName: store.storeName,
    storeStartTime: store.storeStartTime,
    storeEndTime: store.storeEndTime,
    timezone: store.timezone,
    storeOperationalStatus: store.storeOperationalStatus,
  };

  const validationSchema = Yup.object({
    storeName: Yup.string().required('Required'),
    storeStartTime: Yup.string().required('Required'),
    storeEndTime: Yup.string().required('Required'),
    timezone: Yup.string().required('Required'),
    storeOperationalStatus: Yup.string().required('Required'),
  });

  const handleSave = (values) => {
    // Handle save logic here, e.g., update the data source or make an API call
    console.log('Updated store data:', values);
    alert('Store details saved successfully!');
  };

  const handleDelete = () => {
    const updatedStoreList = [...mockDataStoreList];
    const index = updatedStoreList.findIndex((store) => store.id === parseInt(id));
    if (index !== -1) {
      updatedStoreList.splice(index, 1);
      alert('Store deleted successfully!');
      navigate('/stores');
    }
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        {store.storeName} Details
      </Typography>
      <Typography variant="body1">
        <strong>Store ID:</strong> {store.id}
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSave}
      >
        {({ errors, touched }) => (
          <Form>
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
                margin="normal"
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
                      <AccessTimeIcon />
                    </InputAdornment>
                  ),
                }}
                error={touched.storeEndTime && !!errors.storeEndTime}
                helperText={touched.storeEndTime && errors.storeEndTime}
                margin="normal"
                sx={{ gridColumn: "span 2" }}
              />
              <Field
                as={TextField}
                name="timezone"
                label="Timezone"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageIcon />
                    </InputAdornment>
                  ),
                }}
                error={touched.timezone && !!errors.timezone}
                helperText={touched.timezone && errors.timezone}
                margin="normal"
                sx={{ gridColumn: "span 2" }}
              />
              <Field
                as={TextField}
                name="storeOperationalStatus"
                label="Operational Status"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SettingsIcon />
                    </InputAdornment>
                  ),
                }}
                error={touched.storeOperationalStatus && !!errors.storeOperationalStatus}
                helperText={touched.storeOperationalStatus && errors.storeOperationalStatus}
                margin="normal"
                sx={{ gridColumn: "span 2" }}
              />
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

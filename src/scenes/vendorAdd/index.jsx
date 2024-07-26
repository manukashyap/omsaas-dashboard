import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import VendorForm from "../../components/vendorAdd/VendorForm";
import AddIcon from '@mui/icons-material/Add';

const VendorAdd = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Purchases" subtitle="Add Vendor Details" />
      </Box>
      <VendorForm/>
    </Box>
  );
};

export default VendorAdd;

import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import AddIcon from "@mui/icons-material/Add";

import { Link } from "react-router-dom";
import BackendPurchaseList from "../../components/purchase/BackendPurchaseList";


const Pending = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Pending Orders" subtitle="Pending order details" />
      </Box>
      {/* <PurchaseList /> */}
      <BackendPurchaseList/>
    </Box>
    
  );
};

export default Pending;

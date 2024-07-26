import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import PurchaseOrderForm from "../../components/createPurchaseOrder/PurchaseOrderForm";
import AddIcon from '@mui/icons-material/Add';

const PurchaseOrder = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Purchases" subtitle="Create New Purchase Order" />
      </Box>
      <PurchaseOrderForm/>
    </Box>
  );
};

export default PurchaseOrder;

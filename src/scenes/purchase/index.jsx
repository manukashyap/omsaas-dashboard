import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import PurchaseList from "../../components/purchase/PurchaseList";
import AddIcon from '@mui/icons-material/Add';

const Purchase = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Purchase Order" subtitle="Purchase order details page" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <AddIcon sx={{ mr: "10px" }} />
            Create new purchase order
          </Button>
        </Box>
      </Box>
      <PurchaseList/>
    </Box>
  );
};

export default Purchase;

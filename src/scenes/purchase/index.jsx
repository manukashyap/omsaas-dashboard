import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Purchase = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Purchase Order" subtitle="Purchase Order details page" />
      
    </Box>
  );
};

export default Purchase;

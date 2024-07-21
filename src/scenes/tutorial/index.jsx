import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Tutorial = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Tutorial" subtitle="Tutorials page" />
      
    </Box>
  );
};

export default Tutorial;

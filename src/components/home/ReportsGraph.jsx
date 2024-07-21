import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import LineChart from "./LineChart";

const ReportsGraph = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box height="250px" m="-20px 0 0 0">
    <LineChart isDashboard={true} />
  </Box>
  );
};

export default ReportsGraph;

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AssignmentIcon from '@mui/icons-material/Assignment';
import BoxHeader from "./BoxHeader";
import ReportsGrid from "./ReportsGrid";


const ReportsBox = ({}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%"  justifyContent="center">
      {/* Heading and icon box */}
      <BoxHeader
            icon={
              <AssignmentIcon
                sx={{ color: colors.greenAccent[600], fontSize: "40px" }}
              />
            }
            title="Reports"
          />

      <Box
          display="flex"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          padding="10px 10px"
        >
          <ReportsGrid/>
      </Box>

    </Box> // Parent box ending
  );
};

export default ReportsBox;

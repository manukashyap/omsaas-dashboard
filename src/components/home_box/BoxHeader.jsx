import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AssignmentIcon from '@mui/icons-material/Assignment';

const BoxHeader = ({icon, title}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
      <Box width="100%"  justifyContent="center">
        {/* Heading and icon box */}
        <Box display="flex" flexDirection="row" justifyContent="center" padding="10px 10px">
          {icon}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: colors.grey[100], padding: "10px 10px" }}
          >
            {title}
          </Typography>
        </Box>
    </Box>
    );
};

export default BoxHeader;

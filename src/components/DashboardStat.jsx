import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const DashboardStat = ({ title, subtitle, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px" alignItems="center">
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" justifyContent="space-between" mt="10px">
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            alignItems="center"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" >
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          1001
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="10px">
      <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
        {subtitle}
      </Typography>
      <Typography
        variant="h5"
        fontStyle="italic"
        sx={{ color: colors.greenAccent[600] }}
      >
        1001
      </Typography>
      </Box>
    </Box>
  );
};

export default DashboardStat;

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { tokens } from "../../theme";
import { styled } from '@mui/material/styles';
import { Box, Typography, useTheme } from "@mui/material";

const ReportsGrid = ({}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <Grid display="flex" container rowSpacing={4} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Item>1</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>2</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>3</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>4</Item>
      </Grid>
    </Grid>
  );
};

export default ReportsGrid;

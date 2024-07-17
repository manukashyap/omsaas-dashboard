import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AssignmentIcon from '@mui/icons-material/Assignment';

const ReportsBox = ({}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%"  justifyContent="center">
      {/* Heading and icon box */}
      <Box display="flex" flexDirection="row" justifyContent="center" padding="10px 10px">
        <AssignmentIcon sx={{ fontSize: 40 }} />
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ color: colors.grey[100], padding: "10px 10px" }}
        >
          Reports
        </Typography>
      </Box>

      <Box
          display="flex"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          padding="10px 10px"
        >
            <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Create purchase order"  primaryTypographyProps={{fontSize: '16px'}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Add new vendor"  primaryTypographyProps={{fontSize: '16px'}} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

    </Box> // Parent box ending
  );
};

export default ReportsBox;

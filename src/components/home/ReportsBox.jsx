import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BoxHeader from "./BoxHeader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ReportsGraph from "./ReportsGraph";

const ReportsBox = ({}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" justifyContent="center">
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
        flexDirection="row"
        justifyContent="center"
        padding="2px 2px"
      >
        <Box
       
        width="50%"
      >
        <List width="50%">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                primary="Sales reports"
                primaryTypographyProps={{ fontSize: "16px" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Product reports"
                primaryTypographyProps={{ fontSize: "16px" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Store reports"
                primaryTypographyProps={{ fontSize: "16px" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
        <Box
       
       width="50%"
       height="100%"
     >
        <List width="50%">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                primary="Order reports"
                primaryTypographyProps={{ fontSize: "16px" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Warehouse reports"
                primaryTypographyProps={{ fontSize: "16px" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Vendor reports"
                primaryTypographyProps={{ fontSize: "16px" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      </Box>
      {/* <Box
        display="flex"
        width="100%"
        flexDirection="row"
        justifyContent="center"
        padding="2px 2px"
      > */}
        <ReportsGraph/>
      {/* </Box> */}
    </Box> // Parent box ending
  );
};

export default ReportsBox;

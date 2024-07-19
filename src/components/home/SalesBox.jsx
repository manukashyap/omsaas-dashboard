import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TagIcon from "@mui/icons-material/Tag";
import Divider from "@mui/material/Divider";
import { ClassNames } from "@emotion/react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SellIcon from '@mui/icons-material/Sell';
import BoxHeader from "./BoxHeader";

const SalesBox = ({}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
      <Box width="100%"  justifyContent="center">
        {/* Heading and icon box */}
        <BoxHeader
            icon={
              <SellIcon
                sx={{ color: colors.greenAccent[600], fontSize: "40px" }}
              />
            }
            title="Sales"
          />
  
        {/* Two boxes displaying number and amount of PO */}
        <Box
          display="flex"
          flexDirection="row"
          padding="0px 0px"
          justifyContent="center"
        >
          {/* PriceBox */}
  
          <Box
            display="flex"
            width="100%"
            flexDirection="column"
            justifyContent="center"
            padding="10px 10px"
          >
            <AttachMoneyIcon sx={{ fontSize: 35 }} />
  
            <Typography
              variant="h4"
              sx={{ color: colors.grey[100] }}
              padding="3px 3px"
            >
              Rs 45,500
            </Typography>
            <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
              Order Value
            </Typography>
          </Box>
          <Divider orientation="vertical" variant="fullwidth" flexItem />
          {/* Number */}
          <Box
            display="flex"
            width="100%"
            flexDirection="column"
            justifyContent="center"
            padding="10px 40px"
          >
            <TagIcon sx={{ fontSize: 35 }} />
            <Typography
              variant="h4"
              sx={{ color: colors.grey[100] }}
              padding="3px 3px"
            >
              57
            </Typography>
            <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
              Active order
            </Typography>
          </Box>
  
          
        </Box>
        <Divider orientation="horizontal" variant="fullwidth" flexItem />
      
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
  
  export default SalesBox;
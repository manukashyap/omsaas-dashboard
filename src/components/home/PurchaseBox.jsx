import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TagIcon from "@mui/icons-material/Tag";
import Divider from "@mui/material/Divider";
import { ClassNames } from "@emotion/react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BoxHeader from "./BoxHeader";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const PurchaseBox = ({}) => {
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
        title="Purchases"
      />
      {/* Two boxes displaying number and amount of PO */}
      <Box
        display="flex"
        flexDirection="row"
        padding="0px 0px"
        justifyContent="center"
        borderBottom={`2px solid ${colors.primary[500]}`}
      >
        {/* PriceBox */}

        <Box
          display="flex"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          padding="10px 10px"
        >
          <CurrencyRupeeIcon sx={{ fontSize: 35 }} />

          <Typography
            variant="h4"
            sx={{ color: colors.grey[100] }}
            padding="3px 3px"
          >
            ₹ 4,10,000
          </Typography>
          <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
            Pending Order Value
          </Typography>
        </Box>
        <Divider orientation="vertical" variant="fullwidth" flexItem />
        {/* Number */}
        <Box
          display="flex"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          padding="10px 10px"
        >
          <TagIcon sx={{ fontSize: 35 }} />
          <Typography
            variant="h4"
            sx={{ color: colors.grey[100] }}
            padding="3px 3px"
          >
            5
          </Typography>
          <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
            Pending Orders
          </Typography>
        </Box>
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
              <ListItemText
                primary="Create purchase order"
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
                primary="Add new vendor"
                primaryTypographyProps={{ fontSize: "16px" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box> // Parent box ending
  );
};

export default PurchaseBox;

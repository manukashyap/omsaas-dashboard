import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TagIcon from "@mui/icons-material/Tag";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BoxHeader from "./BoxHeader";

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
        borderBottom={`2px solid ${colors.grey[500]}`}
        sx={{ width: "100%" }}
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
            4,10,000
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
          m="10px 10px"
        >
          <TagIcon sx={{ fontSize: 35 }} />
          <Typography
            variant="h4"
            sx={{ color: colors.grey[100] }}
            m="10px 10px"
          >
            5
          </Typography>
          <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
            Pending Orders
          </Typography>
        </Box>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{ width: "80%", height: "80%", margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6}>
          <Button
            variant="text"
            startIcon={<InboxIcon />}
            sx={{ width: "100%", height: "100%", fontSize: "16px" }}
          >
            Create new PO
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="text"
            startIcon={<DraftsIcon />}
            sx={{ width: "100%", height: "100%", fontSize: "16px" }}
          >
            Add new vendor
          </Button>
        </Grid>
      </Grid>
    </Box> // Parent box ending
  );
};

export default PurchaseBox;

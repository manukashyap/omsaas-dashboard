import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I check latest sales value?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The latest sales value is displayed readily in the admin home page. If you wish to do a deepdive at a store level or at a product level, the relevant reports can be obtained from the Reports section.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What does the Recent Activity tab show?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The recent activity tab displays the latest sales across stores or warehouse, as well as any order fulfillments from your vendors. The tab is continuosly updated, providing you a bird's eye view of the activities happening across your entire organisation at a single glance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How frequently is the Recent Activity tab updated?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The tab is updated when an activity is posted at any of your warehouses or stores. The transaction details should be available within a few minutes of the transaction being entered by the respective users.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I raise a new purchase order?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A new purchase order can be initiated from the home page via the purchases tab. A new purchase order can also be placed by navigating to the All orders tab and clicking on the "Create new purchase" order button.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I check which items need to be replenished?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The item level inventory can be tracked by navigating to the Inventory tab in the homepage sidebar and clicking on Inventory. Make use of the auto-alerts feature to set up reorder points when a new purchase order will automatically be created and sent to the admin for approval.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

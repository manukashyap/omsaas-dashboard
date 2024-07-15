import React from "react";
import {Grid, Link, Divider ,Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {  } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import SellIcon from "@mui/icons-material/Sell";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const sections = [
    {
      title: "Purchase",
      icon: <ShoppingCartIcon fontSize="large" />,
      dataPoints: ["Total Purchases: 150", "Pending Orders: 20"],
      links: ["New Purchase", "View Orders"],
      actions: ["Place purchase order", "Add vendor"],
    },
    {
      title: "Inventory",
      icon: <InventoryIcon fontSize="large" />,
      dataPoints: ["Total Items: 500", "Low Stock: 30","Total Items: 500", "Low Stock: 30"],
      links: ["Add Item", "View Inventory"],
      actions: ["Transfer stock", "Adjust stock"],
    },
    {
      title: "Sales",
      icon: <SellIcon fontSize="large" />,
      dataPoints: ["Total Sales: 200", "Returns: 5"],
      links: ["New Sale", "View Sales"],
      actions: ["Create promotions", "Manage fulfilment"],
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 2 , color: colors.grey[100] }}>
      <Grid container spacing={2}>
        {sections.map((section) => (
          <Grid item xs={12} md={4} key={section.title}>
            <Box
              sx={{ border: "1px solid #ccc", borderRadius: "8px", padding: 2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 2,
                }}
              >
                {section.icon}
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ marginLeft: 1, fontSize: "1.5rem" }}
                >
                  {section.title}
                </Typography>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginY: 2,
                }}
              >
                {section.dataPoints.map((point, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{ flex: 1, textAlign: "center" }}
                  >
                    {point}
                  </Typography>
                ))}
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginY: 2,
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ marginTop: 2 }}>
                  Quick Actions
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", marginY: 2 , marginX:2}}
                >
                  {section.actions.map((action, index) => (
                    <Link href="#" key={index} sx={{ marginY: 1 }}>
                      {action}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;

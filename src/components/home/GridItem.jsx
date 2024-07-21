import React, { Component } from "react";
import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";

const GridItem = ({ text }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      width="100%"
      m="0 auto"
      p="5px"
      display="flex"
      justifyContent="center"
      backgroundColor="colors.greenAccent[700]"
      borderRadius="4px"
    >
      <Typography color={colors.grey[400]} sx={{ ml: "5px" }}>
        {text}
      </Typography>
    </Box>
  );
};

export default GridItem;

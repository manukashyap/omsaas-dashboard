import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";

const AlertsBox = ({}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" height="75%" gridColumn="span 4">
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        alignItems="left"
        borderBottom={`4px solid ${colors.primary[500]}`}
        colors={colors.grey[100]}
        p="15px"
        
      >
        <Typography color={colors.grey[100]} variant="h3" fontWeight="600" p="10px">
          Recent activity
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="left"
          // borderTop={`4px solid ${colors.primary[500]}`}
          p="5px"
        >
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="600"
          >
            Item
          </Typography>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="600"
          >
            Time
          </Typography>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="600"
          >
            Value
          </Typography>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="600"
          >
            Quantity
          </Typography>

        </Box>
      </Box>
      <Box
      display="flex"
      flexDirection="column"
      className="alert-list"
      height="100%" 
      overflow="scroll">
        
      {mockTransactions.map((transaction, i) => (
        <Box
          key={`${transaction.txId}-${i}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          p="15px"
        >
          <Box width="25%">
            <Typography
              color={colors.greenAccent[500]}
              variant="h6"
              fontWeight="400"
            >
              {transaction.productId}
            </Typography>
            <Typography color={colors.grey[100]}>{transaction.storeId}</Typography>
          </Box>
          <Box width="15%" color={colors.grey[100]}>{transaction.timestamp}</Box>
          <Box
            backgroundColor={colors.greenAccent[500]}
            width="15%"
            p="5px 10px"
            borderRadius="4px"
          >
            ₹{transaction.cost}
          </Box>
          <Box
            backgroundColor={colors.greenAccent[500]}
            p="5px 10px"
            borderRadius="4px"
            width="15%"
          >
            {transaction.quantity}
          </Box>
        </Box>
        
      ))}
      </Box>
    </Box>
  );
};

export default AlertsBox;

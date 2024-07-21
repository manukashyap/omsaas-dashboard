import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const BackendPurchaseList = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Button variant="contained" onClick={fetchOrders} sx={{ marginBottom: 2 }}>
        Fetch Pending Orders
      </Button>
      <List>
        {orders.map((order, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={`Order Status: ${order.orderStatus}`}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      {`Order ID: ${order.creatorUser.id} - Order Type: ${order.orderType} - Origin Store: ${order.originStore || 'N/A'}`}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default BackendPurchaseList;
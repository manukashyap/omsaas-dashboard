import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInventoryDetails, mockDataProductDetails, mockDataStoreDetails } from "../../data/mockData"; // Updated import
import { useNavigate } from 'react-router-dom';

const InventoryList = () => { // Updated component name
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  // Create a map for quick lookup of product names and store names
  const productNameMap = {};
  mockDataProductDetails.forEach((product) => {
    productNameMap[product.productId] = product.productName;
  });

  const storeNameMap = {};
  mockDataStoreDetails.forEach((store) => {
    storeNameMap[store.storeId] = store.storeName;
  });

  const columns = [
    { field: "productId", headerName: "Product ID", flex: 0.5 },
    { field: "productName", headerName: "Product Name", flex: 1 },
    { field: "storeId", headerName: "Store ID", flex: 0.5 },
    { field: "storeName", headerName: "Store Name", flex: 1 },
    { field: "inventory", headerName: "Inventory", flex: 1 },
    {
      field: "measurement",
      headerName: "Measurement",
      flex: 1,
    }
  ];

  // Add product names and store names to each inventory detail
  const inventoryDetailsWithNames = mockDataInventoryDetails.map((inventoryDetail) => ({
    ...inventoryDetail,
    productName: productNameMap[inventoryDetail.productId] || "Unknown",
    storeName: storeNameMap[inventoryDetail.storeId] || "Unknown",
  }));

  const handleRowClick = (params) => {
    navigate(`/productDetails/${params.id}`);
  };

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          getRowId={(row) => `${row.productId}-${row.storeId}`} // Ensure unique row ID
          rows={inventoryDetailsWithNames} // Updated data source
          columns={columns}
          onRowClick={handleRowClick}
          hideFooter
        />
      </Box>
    </Box>
  );
};

export default InventoryList; // Updated export

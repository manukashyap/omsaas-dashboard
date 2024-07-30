import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import SidebarBackup from "./scenes/global/SidebarBackup";
import FAQ from "./scenes/faq";
import Home from "./scenes/home";
import Purchase from "./scenes/purchase";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Inventory from "./scenes/inventory";
import Sales from "./scenes/sales";
import Tutorial from "./scenes/tutorial";
import PurchaseOrder from "./scenes/purchase_order";
import Pending from "./scenes/pending";
import Vendors from "./scenes/vendors";
import VendorAdd from "./scenes/vendorAdd";
import AllStores from "./scenes/allStores";
import StoreDetails from "./scenes/storeDetails";
import NewStore from "./scenes/createNewStore";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarBackup isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/pending" element={<Pending />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/purchaseOrderCreate" element={<PurchaseOrder />} />
              <Route path="/vendorAdd" element={<VendorAdd />} />
              <Route path="/stores" element={<AllStores />} />
              <Route path="/storeDetails/:id" element={<StoreDetails />} />
              <Route path="/createNewStore" element={<NewStore />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/tutorial" element={<Tutorial />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

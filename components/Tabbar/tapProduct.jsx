import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductTable from "../Product/Producttable";
import BrandTable from "../Product/Brandtable";
import AddProductForm from "../AddProduct/addProduct";
import AddBrandForm from "../AddProduct/addBrand";

export default function ProductTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Product" value="1" />
            <Tab label="Brand" value="2" />
            <Tab label="Promotion" value="3" />
            <Tab label="Add New Product" value="4" />
            <Tab label="Add New Brand" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ProductTable />
        </TabPanel>
        <TabPanel value="2">
          <BrandTable />
        </TabPanel>
        <TabPanel value="3">
          
        </TabPanel>
        <TabPanel value="4">
          <AddProductForm />
        </TabPanel>
        <TabPanel value="5">
          <AddBrandForm/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

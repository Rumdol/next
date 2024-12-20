import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardforDashboard from '../DashboardComponent/Card';
import ProductPage from '@/app/Product/page';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { label: 'Dashboard', icon: '/static/img/dashboard.png' },
    { label: 'Orders', icon: '/static/img/order.png' },
    { label: 'Products', icon: '/static/img/product.png' },
    { label: 'Customers', icon: '/static/img/user.png' },
    { label: 'Settings', icon: '/static/img/setting.png' },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: '100vh',
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px 0',
          bgcolor: '#fdfefe',
        }}
      >
        {/* Logo Section */}
        <Box sx={{ marginBottom: '32px', textAlign: 'center' }}>
          <img
            src="/static/img/logo.png"
            alt="Logo"
            style={{ width: '80px', height: 'auto', marginBottom: '8px' }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: '#0b1279' }}
          >
          </Typography>
        </Box>

        {/* Tabs with Icons */}
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            width: '100%',
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <img
                    src={tab.icon}
                    alt={tab.label}
                    style={{ width: '24px', height: '24px' }}
                  />
                  {tab.label}
                </Box>
              }
              {...a11yProps(index)}
              sx={{
                textTransform: 'none',
                alignItems: 'flex-start', // Align icon and text
                justifyContent: 'flex-start',
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        <TabPanel value={value} index={0}>
          <CardforDashboard />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Orders Content
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProductPage/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          Customers Content
        </TabPanel>
        <TabPanel value={value} index={4}>
          Settings Content
        </TabPanel>
      </Box>
    </Box>
  );
}

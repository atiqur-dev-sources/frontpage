import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Login
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: '100vh', backgroundImage: 'url("/background.jpg")', backgroundSize: 'cover' }}>
        {children}
      </Box>
    </>
  );
};

export default Layout;

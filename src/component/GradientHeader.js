import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const GradientHeader = () => {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#FFFFFF' }}>
          My Gradient Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default GradientHeader;

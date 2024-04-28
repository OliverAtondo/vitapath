import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import campanita from '../assets/campanita.svg'

export default function VitapathAppBar() {
  return (
    <Box sx={{ flexGrow: 1, borderRadius: 20 }}>
      <AppBar position="sticky" sx={{ backgroundColor: "white", borderEndEndRadius: 20 }}>
        <Toolbar>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1, color: "red", fontWeight: "bold" }}></Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={campanita} style={{ height: 24 }} alt="Vitapath Logo" />
          </IconButton>
          <Box margin={3}>
            <Typography color="black" fontWeight="bold"> Admin Console </Typography>
            <Typography color="#B5B5B5" fontWeight="light"> admin@vitapath.com </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

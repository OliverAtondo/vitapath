import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import VitapathTable from './VitapathTable'

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: '100%'
        },
          pl: 10,
          pr: 10
      }}
    >
    <h1 color='#FFFFF'>Dashboard</h1>
    <h2 color='#353535' >Emergencies</h2>
      <Paper elevation={5} sx={{p: 5, width: '100%', height: '100%', backgroundColor: '#353535'}} >
        <VitapathTable />
      </Paper >
    </Box>
  );
}

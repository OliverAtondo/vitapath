import * as React from 'react';
import Box from '@mui/material/Box';
import MedicalRecordCard from './MedicalRecordCard'

export default function MedicalRecord() {
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
    <h1 color='#FFFFF'>Medical Records</h1>
    <h2 color='#353535' >Admin Database</h2>
    <MedicalRecordCard/>
    <MedicalRecordCard/>
    <MedicalRecordCard/>
    <MedicalRecordCard/>
    <MedicalRecordCard/>
    <MedicalRecordCard/>
    <MedicalRecordCard/>
    <MedicalRecordCard/>
    </Box>
  );
}

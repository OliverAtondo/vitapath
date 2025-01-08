import * as React from 'react';
import Box from '@mui/material/Box';
import MedicalRecordCard from './MedicalRecordCard';

export default function MedicalRecord() {
  const [patients, setPatients] = React.useState([]);

  React.useEffect(() => {
    async function fetchPatients() {
      try {
        const response = await fetch("https://dl1671m2pa.execute-api.us-west-1.amazonaws.com/api/get-users");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Failed to fetch patients:', error);
      }
    }
    fetchPatients();
  }, []);

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
      <h1 style={{ color: '#FFFFFF' }}>Medical Records</h1>
      <h2 style={{ color: '#353535' }}>Admin Database</h2>
      {patients.map((patient) => (
        <MedicalRecordCard key={patient.id} patient={patient} />
      ))}
    </Box>
  );
}

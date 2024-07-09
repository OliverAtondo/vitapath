import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function getStatusColor(status) {
  switch (status) {
    case 'Pending':
      return '#d31a1b'; // Rojo
    case 'Canceled':
      return 'grey'; // Gris
    case 'Ongoing':
      return '#ffc107'; // Amarillo
    case 'Completed':
      return '#4caf50'; // Verde
    case 'Transported':
      return '#1E90FF'; // Azul (Dodger Blue)
    default:
      return 'black';
  }
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/MedicalRecords`);
  };


  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <img src={row.pictureURL} alt={row.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.medicalCondition}</TableCell>
        <TableCell align="right" style={{ color: getStatusColor(row.status) }}>
          {row.status}
        </TableCell>
        <TableCell align="right">{row.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Button onClick={handleButtonClick}>Go to Medical Records Tab</Button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    pictureURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    medicalCondition: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default function VitapathTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      console.log('Fetching data from API...');
      const response = await axios.get('https://api.react.vita-path.com/api/get-emergencies');
      console.log('Data fetched:', response.data);
      const formattedData = response.data.map(emergency => ({
        id: emergency.id, // Asegúrate de tener un campo `id` único en tus datos
        pictureURL: emergency.pictureURL,
        name: emergency.patientName,
        medicalCondition: emergency.patientMedicalCondition,
        status: emergency.emergencyStatus,
        date: emergency.date
      }));
      setRows(formattedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // Sondea la API cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <Typography variant="subtitle2" fontWeight="bold">Picture</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2" fontWeight="bold">Name</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2" fontWeight="bold">Medical Condition</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2" fontWeight="bold">Status</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2" fontWeight="bold">Date</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} /> // Usar `row.id` como clave única
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
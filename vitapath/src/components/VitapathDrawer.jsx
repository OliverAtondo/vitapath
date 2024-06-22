import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ReactComponent as Casita } from '../assets/casita.svg';
import { ReactComponent as Notita } from '../assets/notita.svg';
// import { ReactComponent as Settings } from '../assets/settings.svg';
import logo from '../assets/vitapath.svg';
import { useNavigate } from 'react-router-dom';

export default function VitapathDrawer() {
    const navigate = useNavigate();
    const [seleccionado, setSeleccionado] = React.useState(1);

    const handleNavigation = (route) => {
        navigate(route);
    };

    // const handleSetting = () => {
        
    // };

    return (
        <Drawer
        variant="permanent"
        anchor="left"
        sx={{
            width: 350,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
            width: 350,
            boxSizing: 'border-box',
            backgroundColor: "#D31A1B", 
            borderTopRightRadius: 25, 
            borderBottomRightRadius: 25,
            }
        }}
        >
        <Box sx={{ padding: '16px 0 16px 0px' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '0px 0 0px 81px'
            }}>
                <img src={logo} style={{ height: 50, display: 'block', marginRight: 16 }} alt="Vitapath Logo" />
                <Typography variant="h4" color="white" fontWeight="bold">Vitapath</Typography>
            </div>
            <List>
            <Box sx={{ height: 72 }} />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                {seleccionado === 1 &&
                
                <Box sx={{
                    backgroundColor: "white",
                    width: 5,
                    height: 72,
                    borderTopRightRadius: 25, 
                    borderBottomRightRadius: 25
                    }} />
                }
                
                <Button
                  onClick={() => {
                    setSeleccionado(1);
                    handleNavigation('/');
                  }}
                sx={{
                    height: 72,
                    width: "100%", 
                    color: "white",
                    justifyContent: 'flex-start',
                    padding: '0px 0 0px 81px'
                }}>
                    <Casita style={{ height: 32, marginRight: 16, fill: 'white' }} />
                    Dashboard
                </Button>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                {seleccionado === 2 &&
                
                <Box 
                sx={{
                    backgroundColor: "white",
                    width: 5,
                    height: 72,
                    borderTopRightRadius: 25, 
                    borderBottomRightRadius: 25
                    }} />
                }
                <Button 
                onClick={() => {
                    setSeleccionado(2);
                    handleNavigation('/MedicalRecords');
                  }}
                sx={{
                    height: 72,
                    width: "100%", 
                    color: "white",
                    justifyContent: 'flex-start',
                    padding: '0px 0 0px 81px'
                }}>
                    <Notita style={{ height: 32, marginRight: 16, fill: 'white' }} />
                    Medical Record
                </Button>
            </div>
            </List>
            {/* <List>
            <Box sx={{ height: '50vh' }} />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                {seleccionado === 3 &&
                
                <Box sx={{
                    backgroundColor: "white",
                    width: 5,
                    height: 72,
                    borderTopRightRadius: 25, 
                    borderBottomRightRadius: 25
                    }} />
                }
                <Button 
                onClick={() => {
                    setSeleccionado(3);
                    handleSetting();
                  }}
                sx={{
                    height: 72,
                    width: "100%", 
                    color: "white",
                    justifyContent: 'flex-start',
                    padding: '0px 0 0px 81px'
                }}>
                    <Settings style={{ height: 32, marginRight: 16, fill: 'white' }} />
                    Settings
                </Button>
            </div>
            </List> */}
        </Box>
        </Drawer>
    );
}

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, IconButton, Avatar, Grid, Card, CardContent, CardMedia } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function MedicalRecordPopup({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" sx={{ '& .MuiDialog-paper': { borderRadius: 2 } }}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Medical Records
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Avatar
              alt="Robert Fox"
              src="path_to_robert_fox_avatar.jpg" // Reemplaza con el path de la imagen real
              sx={{ width: 90, height: 90, mb: 2 }}
            />
            <Typography variant="h4" gutterBottom component="div">
              Robert Fox
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Male, 24
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ color: 'secondary.main' }}>
              Asthmatic Patient
            </Typography>
            {/* Agrega los detalles adicionales como Allergies, Medications, etc. */}
            
            {/* Asumiendo que tienes imágenes para la sección de Medical Record, puedes utilizar CardMedia */}
            <Typography variant="h6" gutterBottom component="div" sx={{ mt: 4 }}>
              Medical record
            </Typography>
            <Card>
              <CardMedia
                component="img"
                image="path_to_medical_record_image.jpg" // Reemplaza con el path de la imagen real
                alt="Medical Record"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Vital Signs
            </Typography>
            {/* Agrega los detalles para Vital Signs */}
            <Typography variant="body1" sx={{ mb: 1 }}>
              Blood Type: A+
            </Typography>
            {/* Repite la estructura para Height & Weight y BMI */}
            
            {/* Repite la estructura similar para Immunization Records y Medical History */}
            <Typography variant="h6" gutterBottom component="div" sx={{ mt: 4 }}>
              Immunization Records
            </Typography>
            {/* Agrega contenido para Immunization Records */}
            
            <Typography variant="h6" gutterBottom component="div" sx={{ mt: 4 }}>
              Medical History
            </Typography>
            {/* Agrega contenido para Medical History */}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}


function MedicalRecordCard() {
    const [openPopup, setOpenPopup] = useState(false);

    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };
    
  return (
    <>
    <Card sx={{
        maxWidth: 345,
        borderRadius: 1,
        boxShadow: 1,
        textAlign: 'left',
        p: 2,
        position: 'relative',
        cursor: 'pointer'
    }}
    onClick={handleOpenPopup}>
      <Avatar
        alt="Cody Fisher"
        src="path_to_avatar_image.jpg"
        sx={{
          width: 56,
          height: 56,
          position: 'absolute',
          top: 16,
          right: 16,
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 22, fontWeight: 'bold' }}>
          Cody Fisher
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14, mb: 2 }}>
          Male, 24
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hipertension
        </Typography>
        <div>
          <Typography variant="body2" component="p">
            Allergies: [Allergy 1], [Allergy 2], ...
          </Typography>
          <Typography variant="body2" component="p">
            Current Medications: [Medication 1], [Medication 2], ...
          </Typography>
        </div>
      </CardContent>
    </Card>
    <MedicalRecordPopup open={openPopup} onClose={handleClosePopup} />
    </>
  );
}

export default MedicalRecordCard;

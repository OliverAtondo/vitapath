import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, IconButton, Avatar, Grid, Card, CardContent, CardMedia } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function MedicalRecordPopup({ open, onClose, patient }) {
  // Directly accessing properties, assuming they are singular objects now
  const personalInfo = patient.userDetails.personalInformation[0];
  const medicalHistory = patient.userDetails.medicalHistory[0];
  const vitalStats = patient.userDetails.vitalStatistics[0];
  const digitalDocumentsLinks = patient.userDetails.digitalDocumentsLinks[0];

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
              alt={personalInfo.fullName}
              src={personalInfo.profilePictureURL}
              sx={{ width: 90, height: 90, mb: 2 }}
            />
            <Typography variant="h4" gutterBottom component="div">
              {personalInfo.fullName}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {personalInfo.gender}, {personalInfo.age}
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ color: 'secondary.main' }}>
              Chronic Diseases: {medicalHistory.chronicDiseases}
            </Typography>
            <Typography variant="h6" gutterBottom component="div" sx={{ mt: 4 }}>
              Medical record
            </Typography>
            <Card>
              <CardMedia
                component="img"
                image={digitalDocumentsLinks.medicalRecordFilesFiles}
                alt="Medical Record"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Vital Signs
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Blood Type: {vitalStats.bloodType}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Weight: {vitalStats.weight} kg
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Height: {vitalStats.height} cm
            </Typography>
            <Typography variant="h6" gutterBottom component="div" sx={{ mt: 4 }}>
              Immunization Records
            </Typography>
            <a href={digitalDocumentsLinks.immunizationFilesFiles} target="_blank" rel="noopener noreferrer">View Immunization Record</a>
            <Typography variant="h6" gutterBottom component="div" sx={{ mt: 4 }}>
              Medical History
            </Typography>
            <Typography variant="body1">
              Chronic Diseases: {medicalHistory.chronicDiseases}
            </Typography>
            <Typography variant="body1">
              Known Allergies: {medicalHistory.knownAllergies}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}



function MedicalRecordCard({ patient }) {
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
                  alt={patient.userDetails.personalInformation[0].fullName}
                  src={patient.userDetails.personalInformation[0].profilePictureURL}
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
                      {patient.userDetails.personalInformation[0].fullName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14, mb: 2 }}>
                      {patient.userDetails.personalInformation[0].gender}, {patient.userDetails.personalInformation[0].age}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      {patient.userDetails.medicalHistory[0].chronicDiseases}
                  </Typography>
                  {/* Additional patient details */}
              </CardContent>
          </Card>
          <MedicalRecordPopup open={openPopup} onClose={handleClosePopup} patient={patient} />
      </>
  );
}

export default MedicalRecordCard;

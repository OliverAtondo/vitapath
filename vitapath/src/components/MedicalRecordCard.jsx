import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, IconButton, Avatar, Grid, Card, CardContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Modal, Button } from '@mui/material';

function MedicalRecordPopup({ open, onClose, patient }) {
  // State to handle modal open/close
  const [openModal, setOpenModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');

  const handleOpen = (file) => {
    setSelectedFile(file);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const toSentenceCase = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // Directly accessing properties, assuming they are singular objects now
  const personalInfo = patient.userDetails.personalInformation[0];
  const medicalHistory = patient.userDetails.medicalHistory[0];
  const vitalStats = patient.userDetails.vitalStatistics[0];
  const digitalDocumentsLinks = patient.userDetails.digitalDocumentsLinks[0];
  const insuranceDetails = patient.userDetails.insurance[0];

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg" sx={{ '& .MuiDialog-paper': { borderRadius: 2 } }}>
      <DialogTitle>
        <span style={{ fontWeight: 'bold' }}>Medical Records</span>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          sx={{ position: 'absolute', right: 16, top: 12 }}
        >
          <CloseIcon/>
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
            <Typography variant="h5" gutterBottom component="div" sx={{ color: '#d31a1b' }}>
              {personalInfo.fullName}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {toSentenceCase(personalInfo.gender)}, {personalInfo.age}
            </Typography>

            <Typography variant="h5" gutterBottom component="div" sx={{ color: '#d31a1b' }}>
              Emergency Contact Information
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Full Name: </span> {personalInfo.emergencyName}
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Relationship: </span> {personalInfo.emergencyRelationship}
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Phone Number: </span> {personalInfo.emergencyPhoneNumber}
            </Typography>

            <Typography variant="h5" gutterBottom component="div" sx={{ color: '#d31a1b' }}>
              Digital Documents
            </Typography>
            <Typography variant="h7" gutterBottom component="div">
              Medical Record Files
            </Typography>
            <div>
              {digitalDocumentsLinks.medicalRecordFilesFiles.map((file, index) => (
                <Button key={index} onClick={() => handleOpen(file)}>
                  View Document {index + 1}
                </Button>
              ))}
            </div>
            <Typography variant="h7" gutterBottom component="div">
              Diagnostic Files
            </Typography>
            <div>
              {digitalDocumentsLinks.diagnosticFilesFiles.map((file, index) => (
                <Button key={index} onClick={() => handleOpen(file)}>
                  View Document {index + 1}
                </Button>
              ))}
            </div>
            <Typography variant="h7" gutterBottom component="div">
              Inmunization Files
            </Typography>
            <div>
              {digitalDocumentsLinks.immunizationFilesFiles.map((file, index) => (
                <Button key={index} onClick={() => handleOpen(file)}>
                  View Document {index + 1}
                </Button>
              ))}
            </div>

          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
              {selectedFile.endsWith('.pdf') ? (
                <object data={selectedFile} type="application/pdf" width="100%" height="750">
                  <a href={selectedFile} target="_blank" rel="noopener noreferrer">Open PDF</a>
                </object>
              ) : (
                <img src={selectedFile} alt="Document" style={{ width: '100%'}} />
              )}
            </div>
          </Modal>

          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ color: '#d31a1b' }}>
              Vital Signs
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <span style={{ fontWeight: 'bold' }}>Blood Type: </span> {vitalStats.bloodType}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <span style={{ fontWeight: 'bold' }}>Weight: </span> {vitalStats.weight} kg
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <span style={{ fontWeight: 'bold' }}>Height: </span> {vitalStats.height} cm
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <span style={{ fontWeight: 'bold' }}>DNR Consent: </span> {vitalStats.dnrConsent ? 'Yes' : 'No'}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <span style={{ fontWeight: 'bold'}}>Chronic Diseases:</span> <span style={{ color: '#d31a1b'}}>{medicalHistory.chronicDiseases}</span>
            </Typography>

            <Typography variant="h5" gutterBottom component="div" sx={{ color: '#d31a1b' }}>
              Medical History
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Chronic Diseases: </span> {medicalHistory.chronicDiseases}
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Known Allergies: </span> {medicalHistory.knownAllergies}
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Family Medical History: </span> {medicalHistory.familyMedicalHistory}
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Current Medications: </span> {medicalHistory.currentMedications}
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Past Surgeries: </span> {medicalHistory.pastSurgeries}
            </Typography>
             <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Organ Transplant: </span> {medicalHistory.organTransplantDetails}
            </Typography>

            <Typography variant="h5" gutterBottom component="div" sx={{ color: '#d31a1b' }}>
              Insurance Details
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Insurance Provider: </span> {insuranceDetails.insuranceProvider}
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Coverage Details: </span> {insuranceDetails.coverageDetails}
            </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Policy Number: </span> {insuranceDetails.policyNumber}
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

  const toSentenceCase = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
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
                      {toSentenceCase(patient.userDetails.personalInformation[0].gender)}, {patient.userDetails.personalInformation[0].age}
                  </Typography>
                  <Typography variant="body2" color='#d31a1b'>
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

import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';

function TrialRequestModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    message: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Send the formData to your backend server
    fetch('https://gujju-tiffin-840v.onrender.com/api/trial-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleClose();
        resetForm();
        setSnackbarMessage('We will Reach you soon 😉!');
        setSnackbarOpen(true);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      address: '',
      contact: '',
      message: '',
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box component="section" py={6}>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Request Trial
        </Button>
      </Box>
      <Modal open={open} onClose={handleClose} sx={{ display: 'grid', placeItems: 'center' }}>
        <Slide direction="down" in={open} timeout={500}>
          <Box position="relative" bgcolor="background.paper" p={4} borderRadius={4}>
            <Button
              variant="text"
              color="inherit"
              onClick={handleClose}
              style={{ position: 'absolute', right: 0, top: 0 }}
            >
              <CloseIcon />
            </Button>
            <Typography variant="h6" component="h2" gutterBottom>
              Request a Trial Meal
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <TextField
              required
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Contact Number"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Message (Optional)"
              name="message"
              value={formData.message}
              onChange={handleChange}
              margin="normal"
            />
            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
          </Box>
        </Slide>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </Box>
  );
}

export default TrialRequestModal;

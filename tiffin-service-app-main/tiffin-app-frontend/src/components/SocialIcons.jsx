import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook'; // Import FacebookIcon
import { Typography, Grid, Link } from '@mui/material';
import styled from '@emotion/styled';

const SocialMediaIcons = () => {
  const StyledLink = styled(Link)(({ theme }) => ({
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      color: '#FF7F50',
    },
  }));

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <StyledLink href="https://wa.me/qr/POCU27D4OL5BB1" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon fontSize="large" color="primary" />
          </StyledLink>
          <StyledLink href="https://www.instagram.com/gujju_tiffin_service/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="large" color="secondary" />
          </StyledLink>
          <StyledLink href="https://www.facebook.com/profile.php?id=61551521978264" target="_blank" rel="noopener noreferrer">
            <FacebookIcon fontSize="large" color="action" /> {/* Replace PhoneIcon with FacebookIcon */}
          </StyledLink>
        </Grid>
      </Grid>
    </div>
  );
};

export default SocialMediaIcons;

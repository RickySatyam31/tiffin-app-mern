import React from 'react';
import { Typography, Grid, Link } from '@mui/material';
import styled from '@emotion/styled';
import SocialMediaIcons from './SocialIcons';
import Logo from '../images/logo.png';
import '../Styles/Footer.css';

const StyledLink = styled(Link)(({ theme }) => ({
  color: '#333',
  textDecoration: 'none',
  '&:hover': {
    color: '#FF7F50',
  },
}));

const Footer = () => {
  return (
    <div className="footer-container">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
        <Typography variant="h6" className="navbar__logo">
          <img src={Logo} alt="Logo" width="100" height="auto" />
        </Typography>
          <Typography variant="body1" gutterBottom className="about-us">
            We are a Tiffin service that provides healthy and delicious meals to our customers.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Phone: <StyledLink href="tel:+12262016868">+12262016868</StyledLink>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: <StyledLink href="mailto:info@mytiffinservice.com">info@mytiffinservice.com</StyledLink>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Address: <StyledLink href="https://maps.app.goo.gl/E9oZB8TJSbhKRzmU6?g_st=ic">2-27 Wellington St N, Kitchener, ON, N2H 5J3</StyledLink>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className="social-icons">
          <SocialMediaIcons />
        </Grid>
      </Grid>
      <br/>
      <br/>
     

      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}
        {new Date().getFullYear()}
        {' Gujju Tiffin Service. All rights reserved.'}
      </Typography>
    </div>
  );
};

export default Footer;

import React from 'react';
import { styled } from '@mui/system';
import logoImage from '../images/logo.png';
import bgImage from '../images/bg2.jpeg'; // Import and assign the background image

const LaunchScreenContainer = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `rgba(0, 0, 0, 0.7) url(${bgImage}) no-repeat center center`, // Apply opacity to the background image
  backgroundSize: 'cover', // Ensure the background covers the entire screen
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const LogoImage = styled('img')({
  width: '300px', // Adjust the size as needed
  height: 'auto',
  opacity: 1, // The logo remains fully opaque
});

function LaunchScreen() {
  return (
    <LaunchScreenContainer>
      <LogoImage
        src={logoImage}
        alt="Business Logo"
      />
    </LaunchScreenContainer>
  );
}

export default LaunchScreen;

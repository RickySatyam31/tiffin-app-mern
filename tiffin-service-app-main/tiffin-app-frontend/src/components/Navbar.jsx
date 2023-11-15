import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../images/logo.png';
import '../Styles/Navbar.css';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLinkClick = (sectionId) => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        handleClose();
      }
    }
  };

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="navbar__toolbar" disableGutters>
        <Typography variant="h6" className="navbar__logo">
          <img src={Logo} alt="Logo" width="100" height="auto" />
        </Typography>
        {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className="navbar__menuIcon"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        )}
        {/* Show links for larger screens */}
        {!isMobile && (
          <div className="navbar__links">
            <Button
              className="navbar__tab"
              onClick={() => handleLinkClick('home-section')}
            >
              Home
            </Button>
            <Button
              className="navbar__tab"
              onClick={() => handleLinkClick('req-trail-section')}
            >
              Req-Trail
            </Button>
            <Button
              className="navbar__tab"
              onClick={() => handleLinkClick('feedback_Section')}
            >
              Feedback
            </Button>
            <Button
              className="navbar__tab"
              onClick={() => handleLinkClick('MyTeam_Section')}
            >
              Our Team
            </Button>
          </div>
        )}
        <Button
          variant="contained"
          sx={{ borderRadius: '30px', padding: '10px 20px' }}
          onClick={() => {
            window.location.href = 'tel:+1234567890';
          }}
        >
          <PhoneIcon sx={{ mr: '0.5rem' }} />
          Call Now
        </Button>
        {/* Mobile view menu */}
        {isMobile && (
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className="navbar__menu"
          >
            <MenuItem
              className="navbar__menuItem"
              onClick={() => handleLinkClick('home-section')}
            >
              Home
            </MenuItem>
            <MenuItem
              className="navbar__menuItem"
              onClick={() => handleLinkClick('req-trail-section')}
            >
              Req-Trail
            </MenuItem>
            <MenuItem
              className="navbar__menuItem"
              onClick={() => handleLinkClick('feedback-section')}
            >
              Feedback
            </MenuItem>
            <MenuItem
              className="navbar__menuItem"
              onClick={() => handleLinkClick('contact-us-section')}
            >
              Contact Us
            </MenuItem>
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
}

import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link as ScrollLink } from 'react-scroll';
import bgImage from '../images/kitchen.png';
import '../Styles/MoreInfo.css';

const MoreInfo = () => {
  return (
    <div id="MoreInfo_section" className="more-info-section">
      <ScrollLink to="MoreInfo_section" smooth={true} duration={500}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {/* Left Side */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" className="tagline">
                Authentic Gujarati Cuisine Delivered to Your Doorstep
              </Typography>
              <ul className="text">
                <li>Enjoy freshly prepared tiffins filled with a variety of authentic Gujarati dishes</li>
                <li>Quality ingredients and hygienic preparation ensure that you enjoy vegetarian delights that are both delicious and healthy</li>
                <li>Choose from our convenient weekly plans and experience Gujarati flavors like never before</li>
              </ul>
            </Grid>

            {/* Right Side - Founder's Image */}
            <Grid item xs={12} md={6}>
              <Paper>
                <img
                  src={bgImage}
                  alt="Founder"
                  className="image"
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </ScrollLink>
    </div>
  );
};

export default MoreInfo;

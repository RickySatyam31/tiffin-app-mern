import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import SocialMediaIcons from './SocialIcons';

const ContactUs = () => {
  return (
    <div id = "contact-us-section">
      <ScrollLink to="contact-us-section" smooth={true} duration={500}>
     <SocialMediaIcons/>
      </ScrollLink>
    </div>
  );
};

export default ContactUs;

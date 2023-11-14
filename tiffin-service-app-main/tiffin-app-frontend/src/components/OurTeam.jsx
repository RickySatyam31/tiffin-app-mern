import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { LinkedIn, Instagram, Facebook } from '@mui/icons-material';
import '../Styles/OurTeam.css'
import { ScrollLink } from "react-scroll";
import { Link } from "react-scroll";
import SocialMediaIcons from "./SocialIcons";
import shreya from '../images/founder.jpeg';
import ricky from '../images/ricky.jpeg';
import alish from '../images/alish.jpeg';


const TeamMember = ({ image, name, description, delay }) => {
  const controls = useAnimation();

  const handleScroll = () => {
    const element = document.getElementById(name);
    if (element) {
      const topPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (topPosition < windowHeight * 0.8) {
        controls.start({ y: 0, opacity: 1 });
      } else {
        controls.start({ y: 100, opacity: 0 });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      id={name}
      className="team-member"
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5, delay: delay }} // Add delay property
    >
      <div className="team-member-image">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="social-icons">
         <SocialMediaIcons/>
        </div>
      </div>
    </motion.div>
  );
};
    const MyTeamPage = () => {
        return (
          <div id="MyTeam_Section">
            <div className="my-team-page">
              <h1 className="team-heading">Our Team</h1>
              <div className="team-members-container">
                <div className="team-card">
                  <TeamMember
                    image={ricky}
                    name="Ricky (Tech-Marketing Architect)"
                    description=
                    "Tech enthusiast and marketing maven, I drive the digital experience, fusing code with creativity to elevate businesses in the online realm."                    
                    delay={0} // Add delay for the first card
                  />
                </div>
                <div className="team-card">
                  <TeamMember
                    image={shreya}
                    name="Shreya (Founder)"
                    description="Visionary Founder, steering the ship with innovation and passion, while our Culinary Maestro adds the magic touch, crafting culinary wonders that delight the senses"
                    delay={0.2} // Add delay for the second card
                  />
                </div>
                <div className="team-card">
                  <TeamMember
                    image={alish}
                    name="Alish (Co-founder)"
                    description=
                    "Strategic Co-founder shaping growth with foresight, and our Financial Wizard navigating the financial seas for success at every turn."
                    delay={0.4} // Add delay for the third card
                  />
                </div>
              </div>
            </div>
          </div>
        ); 
      };

export default MyTeamPage;

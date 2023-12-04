import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import EventIcon from '@mui/icons-material/Event';

import '../Styles/CustomerCountUp.css';

const CustomerCountUp = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [tiffinCount, setTiffinCount] = useState(0);
  const [daysCount, setDaysCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCustomerCount((prevCount) => {
        if (prevCount < 15) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTiffinCount((prevCount) => {
        if (prevCount < 450) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysCount((prevCount) => {
        if (prevCount < 60) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="customer-count-up">
      <div className="count-box">
        <EmojiPeopleIcon sx={{ fontSize: '4rem', color: '#3f51b5' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', m: 0 }}>
          {customerCount}
        </Typography>
        <Typography variant="h6" sx={{ color: '#888', m: 0 }}>
          Total Customers
        </Typography>
      </div>
      <div className="count-box">
        <LocalDiningIcon sx={{ fontSize: '4rem', color: '#3f51b5' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', m: 0 }}>
          {tiffinCount}
        </Typography>
        <Typography variant="h6" sx={{ color: '#888', m: 0 }}>
          Tiffins Delivered
        </Typography>
      </div>
      <div className="count-box">
        <EventIcon sx={{ fontSize: '4rem', color: '#3f51b5' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', m: 0 }}>
          {daysCount}
        </Typography>
        <Typography variant="h6" sx={{ color: '#888', m: 0 }}>
          Days Worked
        </Typography>
      </div>
    </div>
  );
};

export default CustomerCountUp;

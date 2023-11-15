import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import feedbackImg from '../images/feedback.png';
import '../Styles/Feedback.css';

function RaitingFeedback() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = () => {
    // Create an object to send to the server
    const data = {
      rating: rating,
      feedback: feedback,
    };

    // Send a POST request to your server
    fetch('https://gujju-tiffin.onrender.com/api/trial-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log('Feedback submitted successfully');
          setSubmitted(true); // Update state to show "Thank you" message
        } else {
          console.error('Error submitting feedback');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Adjust layout for different screen sizes
        alignItems: 'center',
        textAlign: 'center',
      }}
      className="feedback-section"
    >
      <Box sx={{ mr: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}>
        <img
          src={feedbackImg}
          alt="placeholder"
          className="floating-image"
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '60%' } }}>
        <Typography variant="h6" className="feedback-title">
          How was your experience?
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' ,             justifyContent: 'center', // Align stars to the center
}}>
          <Rating
            name="rating"
            value={rating}
            onChange={handleRatingChange}
            size="large"
          />
          <Typography variant="h6" sx={{ ml: 2 }}>
            {rating}
          </Typography>
        </Box>
        {submitted ? (
          <div className="feedback-submitted">
            <Typography variant="h6">Thank you for your feedback!</Typography>
          </div>
        ) : (
          <div className="feedback-form">
            <TextField
              id="feedback"
              label="Provide feedback"
              multiline
              rows={4}
              variant="outlined"
              value={feedback}
              onChange={handleFeedbackChange}
            /><br/>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitFeedback}
              className="feedback-button"
            >
              Submit Feedback
            </Button>
          </div>
        )}
      </Box>
    </Box>
  );
}

export default RaitingFeedback;

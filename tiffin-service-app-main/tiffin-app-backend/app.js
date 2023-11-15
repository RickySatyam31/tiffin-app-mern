const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3002;

require('dotenv').config(); // Load environment variables

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Enable CORS middleware before defining routes
app.use(
    cors({
      origin: 'https://gujju-tiffin.onrender.com/api/trial-request', // Replace with your React frontend's URL
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
);

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Define routes for your application
app.get('/', (req, res) => {
    res.send('Welcome to your API!');
});

const trialRequestRoutes = require('./routes/trialRequestRoutes');

// Use the trial request routes
app.use('/api', trialRequestRoutes);

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

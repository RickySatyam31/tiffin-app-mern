// routes/trialRequestRoutes.js
const express = require('express');
const router = express.Router();
const trialRequestController = require('../controllers/trialRequestController');

// POST request to create a trial request
router.post('/trial-request', trialRequestController.createTrialRequest);

module.exports = router;

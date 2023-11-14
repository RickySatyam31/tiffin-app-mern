const TrialRequest = require('../models/TrialRequest');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Outlook', // Use the Outlook service
    auth: {
        user: process.env.OUTLOOK_EMAIL, // Use your Outlook email address from environment variable
        pass: process.env.OUTLOOK_PASSWORD, // Use your Outlook email password from environment variable
    },
});

module.exports = {
    createTrialRequest: async (req, res) => {
        try {
            const { name, address, contact, message, feedback, rating } = req.body;
            const trialRequest = new TrialRequest({ name, address, contact, message, feedback, rating });
            await trialRequest.save();

            // Send an email with the user's information
            const mailOptions = {
                from: process.env.OUTLOOK_EMAIL, // Use your Outlook email address from environment variable
                to: process.env.OUTLOOK_EMAIL, // Replace with your recipient's Outlook email address
                subject: 'New Trial Request',
                html: `
                    <p>Name: ${name}</p>
                    <p>Address: ${address}</p>
                    <p>Contact: ${contact}</p>
                    <p>Message: ${message}</p>
                    <p>Feedback: ${feedback}</p>
                    <p>Rating: ${rating}</p>
                `,
            };

            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');

            res.status(201).json({ message: 'Trial request created successfully' });
        } catch (error) {
            console.error('Error creating trial request:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    // Add more functions if needed
};

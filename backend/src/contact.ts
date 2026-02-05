// Contact form API route handler
// Processes contact form submissions and sends emails using Resend API

import express, { Request, Response } from 'express';
import { Resend } from 'resend';

const router = express.Router();

// POST endpoint for contact form submissions
router.post('/contact', async (req: Request, res: Response) => {
    console.log('Received contact form request:', req.body);
    
    try { 
        // Extract form data from request body
        const { name, email, message } = req.body;

        // Validate that all required fields are present
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        console.log('Attempting to send email via Resend...');

        // Initialize Resend email service with API key from environment variables
        const resend = new Resend(process.env.RESENDAPIKEY);

        // Send email using Resend service
        const result = await resend.emails.send({
            from: 'mywebsite@resend.dev', // Resend verified sender
            to: 'acmorack@gmail.com', // Recipient (my personal email)
            replyTo: email, // Allow replying directly to the sender
            subject: `Contact Form: Message from ${name}`, // Dynamic subject line
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        console.log('Email sent successfully:', result);
        // Return success response to client
        return res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (error: any) {
        // Log error details for debugging
        console.error('Error submitting contact form:', error);
        console.error('Error details:', error.message, error.statusCode);
        // Return error response to client
        return res.status(500).json({ 
            message: 'Internal server error',
            error: error.message 
        });
    }
});

export default router;
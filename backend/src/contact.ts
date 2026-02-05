import express, { Request, Response } from 'express';
import { Resend } from 'resend';

const router = express.Router();

router.post('/contact', async (req: Request, res: Response) => {
    console.log('Received contact form request:', req.body);
    
    try { 
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        console.log('Attempting to send email via Resend...');

        // Initialize Resend with API key
        const resend = new Resend(process.env.RESENDAPIKEY);

        // Send email using Resend
        const result = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'acmorack@gmail.com',
            replyTo: email,
            subject: `Contact Form: Message from ${name}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        console.log('Email sent successfully:', result);
        return res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (error: any) {
        console.error('Error submitting contact form:', error);
        console.error('Error details:', error.message, error.statusCode);
        return res.status(500).json({ 
            message: 'Internal server error',
            error: error.message 
        });
    }
});

export default router;
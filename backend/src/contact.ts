import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Configure email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // or 'outlook', 'yahoo', etc.
    auth: {
        user: 'acmorack@gmail.com', 
        pass: 'jimq gnbo clcd wxap' 
    }
});

router.post('/contact', async (req: Request, res: Response) => {
    try { 
        const { name, email, message } = req.body;

        // Email options
        const mailOptions = {
            from: email, // Sender's email
            to: 'acmorack@gmail.com', 
            subject: `Contact Form: Message from ${name}`,
            text: message,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log('Contact form submitted:', { name, email, message });
        res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
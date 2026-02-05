// Main Express server for Adrian Morack's personal website
// Handles API routes, contact form submissions, and serves the React frontend

import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import contactRoutes from './contact';

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();
const PORT = process.env.PORT || 5001; // Use environment PORT or default to 5001

// Middleware Configuration
// Enable CORS for frontend origins (development and production)
app.use(cors({
  origin: ['http://localhost:3000', 'https://adrianmorack.com', 'https://www.adrianmorack.com'],
  credentials: true // Allow cookies and credentials
}));
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data

// Serve static files from the React frontend build directory
// This allows the backend to serve the compiled React app
app.use(express.static(path.join(__dirname, '../../../frontend/build')));

// API Routes - all API endpoints are prefixed with /api
app.use('/api', apiRoutes); // General API routes (users, etc.)
app.use('/api', contactRoutes); // Contact form endpoint

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import contactRoutes from './contact';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://adrianmorack.com', 'https://www.adrianmorack.com'],
  credentials: true
})); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Serve static files from the React frontend build
app.use(express.static(path.join(__dirname, '../../../frontend/build')));

// API Routes
app.use('/api', apiRoutes);
app.use('/api', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

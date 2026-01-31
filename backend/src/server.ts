import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import apiRoutes from './routes/api';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Serve static files from the React frontend build
app.use(express.static(path.join(__dirname, '../../../frontend/build')));

// API Routes
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// General API routes for the application
// Currently contains mock endpoints for future features

import { Router, Request, Response } from 'express';

const router = Router();

// GET endpoint to retrieve all users (mock data)
// TODO: Replace with actual database queries when user system is implemented
router.get('/users', (req: Request, res: Response) => {
  // Mock user data - replace with database calls later
  res.json([
    { id: 1, name: 'Adrian Morack', email: 'adrian@example.com' },
    { id: 2, name: 'John Doe', email: 'john@example.com' }
  ]);
});

// POST endpoint to create a new user (mock implementation)
// TODO: Add validation and database integration
router.post('/users', (req: Request, res: Response) => {
  // Handle creating a new user
  res.status(201).json({ message: 'User created', user: req.body });
});

export default router;

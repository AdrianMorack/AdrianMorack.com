import { Router, Request, Response } from 'express';

const router = Router();

// Example API routes
router.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'API endpoint working!', timestamp: new Date() });
});

router.get('/users', (req: Request, res: Response) => {
  // Mock user data - replace with database calls later
  res.json([
    { id: 1, name: 'Adrian Morack', email: 'adrian@example.com' },
    { id: 2, name: 'John Doe', email: 'john@example.com' }
  ]);
});

router.post('/users', (req: Request, res: Response) => {
  // Handle creating a new user
  res.status(201).json({ message: 'User created', user: req.body });
});

export default router;

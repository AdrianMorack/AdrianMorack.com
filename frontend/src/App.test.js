// Basic test suite for App component
// Uses React Testing Library to verify component rendering

import { render, screen } from '@testing-library/react';
import App from './App';

// Test that the app renders without crashing
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

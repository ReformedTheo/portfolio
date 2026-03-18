import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the About section with bio text', () => {
  render(<App />);
  expect(screen.getByText(/Backend developer with proven experience/i)).toBeInTheDocument();
});

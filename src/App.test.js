import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Test 2: The "About Me" section is present
test('renders the About Me section', () => {
  render(<App />);
  expect(screen.getByText(/I am a Software Developer/i)).toBeInTheDocument();
});
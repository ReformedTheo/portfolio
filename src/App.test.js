import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Test 2: The "About Me" section is present
test('renders the About Me section', () => {
  render(<App />);
  expect(screen.getByText(/software developer with insatiable curiosity! /i)).toBeInTheDocument();
});
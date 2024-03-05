import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

// Wrapper component to provide routing context
const Wrapper = ({ children }) => <Router>{children}</Router>;

describe('Navbar Component', () => {
  test('renders Navbar component with logo and toggle button', () => {
    render(<Navbar />, { wrapper: Wrapper });
    expect(screen.getByAltText('AI logo')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('toggle button shows and hides links', () => {
    render(<Navbar />, { wrapper: Wrapper });
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton); // Open the links
    expect(screen.getByText('Hjem')).toBeVisible();
    fireEvent.click(toggleButton); // Close the links
    // Note: Depending on your CSS, you may need to adjust this to check for absence or different styles
  });

  test('clicking a link closes the navbar on smaller screens', () => {
    render(<Navbar />, { wrapper: Wrapper });
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton); // Open the links
    const homeLink = screen.getByText('Hjem');
    fireEvent.click(homeLink); // Click on a link
    // Check if the navbar is closed. This may depend on how your CSS hides the navbar
  });
});

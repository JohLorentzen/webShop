import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/NavBar.js';
import { BrowserRouter as Router } from 'react-router-dom';

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
    fireEvent.click(toggleButton);
    expect(screen.getByText('Hjem')).toBeVisible();
    fireEvent.click(toggleButton); 
  });

  test('clicking a link closes the navbar on smaller screens', () => {
    render(<Navbar />, { wrapper: Wrapper });
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton); 
    const homeLink = screen.getByText('Hjem');
    fireEvent.click(homeLink); 
  });
});

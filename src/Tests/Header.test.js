import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Components/Layout/Header'; // Adjust the import path as necessary

// Mock ResizeObserver
global.ResizeObserver = class {
    constructor(callback) {
      this.callback = callback;
    }
    observe() {
      // Mock implementation
    }
    unobserve() {
      // Mock implementation
    }
    disconnect() {
      // Mock implementation
    }
  };

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('renders the logo', () => {
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders desktop navigation links', () => {
    const aboutLink = screen.getByTestId('nav-desktop-About');
    const projectsLink = screen.getByTestId('nav-desktop-Projects');
    const contactLink = screen.getByTestId('nav-desktop-Contact');

    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('renders download CV button', () => {
    const downloadButton = screen.getByText(/Download my CV/i);
    expect(downloadButton).toBeInTheDocument();
  });

  test('opens mobile menu when burger button is clicked', () => {
    const burgerButton = screen.getByRole('button', { name: /Open main menu/i });
    fireEvent.click(burgerButton);
  
    const mobileMenu = screen.getByRole('dialog'); // Ensure this matches the role of the dialog
    expect(mobileMenu).toBeInTheDocument();
  });
  
  test('closes mobile menu when close button is clicked', () => {
    const burgerButton = screen.getByRole('button', { name: /Open main menu/i });
    fireEvent.click(burgerButton);
  
    const closeButton = screen.getByRole('button', { name: /Close menu/i });
    fireEvent.click(closeButton);
  
    const mobileMenu = screen.queryByRole('dialog');
    expect(mobileMenu).not.toBeInTheDocument();
  });

  test('closes mobile menu when a navigation link is clicked', () => {
    const burgerButton = screen.getByRole('button', { name: /Open main menu/i });
    fireEvent.click(burgerButton);

    const aboutLink = screen.getByTestId('nav-mobile-About');
    fireEvent.click(aboutLink);

    const mobileMenu = screen.queryByRole('dialog');
    expect(mobileMenu).not.toBeInTheDocument();
  });
});
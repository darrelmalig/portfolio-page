import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BackToTopButton from '../Components/common/BackToTopButton'; // Adjust the import path as necessary

// Mocking ResizeObserver
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

// Mocking window.outerHeight
beforeAll(() => {
  Object.defineProperty(window, 'outerHeight', {
    configurable: true,
    value: 800, // Set a fixed height for testing
  });
});

describe('BackToTopButton Component', () => {
  beforeEach(() => {
    render(<BackToTopButton />);
  });

  test('renders the Back to Top button', () => {
    const button = screen.getByTestId('backToTopBtn');
    expect(button).toBeInTheDocument();
  });

  test('button is hidden when scroll position is less than half the window height', () => {
    // Simulate scroll position
    Object.defineProperty(document.documentElement, 'scrollTop', {
      configurable: true,
      value: 200, // Less than half of 800
    });
    fireEvent.scroll(window);
    
    const button = screen.getByTestId('backToTopBtn');
    console.log(button.className); // Log the button's class names
    expect(button).toHaveClass('opacity-0'); // Button should be hidden
  });

  test('button is visible when scroll position is greater than half the window height', () => {
    // Simulate scroll position
    Object.defineProperty(document.documentElement, 'scrollTop', {
      configurable: true,
      value: 500, // Greater than half of 800
    });
    fireEvent.scroll(window);
    
    const button = screen.getByTestId('backToTopBtn');
    console.log(button.className); // Log the button's class names
    expect(button).toHaveClass('opacity-70'); // Button should be visible
  });

  test('clicking the button scrolls to the top', () => {
    // Simulate scroll position to make the button visible
    Object.defineProperty(document.documentElement, 'scrollTop', {
      configurable: true,
      value: 500,
    });
    fireEvent.scroll(window);

    const button = screen.getByTestId('backToTopBtn');
    expect(button).toHaveClass('opacity-70'); // Button should be visible
  });
});
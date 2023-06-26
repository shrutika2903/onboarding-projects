import { render } from '@testing-library/react';

import App from "./App";

test('Renders main page correctly', () => {
    render(<App />)
  expect(true).toBeTruthy();
});

test('displays the correct number of birthdays', () => {
    render(<App />);
    const projects = [
      { id: 1, name: 'Project 1', birthday: '1990-01-01' },
      { id: 2, name: 'Project 2', birthday: '1995-02-10' },
      { id: 3, name: 'Project 3', birthday: '1985-07-25' },
    ];
    expect(screen.getByText(/3 Birthdays Today/i)).toBeInTheDocument();

  
    expect(screen.getByText(/0 Birthdays Today/i)).toBeInTheDocument();
  });
import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders react frontend heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/react frontend/i); // Updated text matcher
  expect(linkElement).toBeInTheDocument();
});

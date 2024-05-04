import { render, screen } from '@testing-library/react';
import Login from './pages/login';

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});
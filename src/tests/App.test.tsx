import { render, screen } from '@testing-library/react';
import App from "../App";

test.skip('App', () => {
  render(<App />);
  const headline = screen.getByText(/Click on the Vite and React logos to learn more/i);
  expect(headline).toBeInTheDocument();
});
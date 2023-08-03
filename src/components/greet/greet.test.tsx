import {render, screen} from '@testing-library/react';    

import { Greet } from './greet';

test("Greet renders correctly", () => {
  render(<Greet />)
  const testElement = screen.getByText(/hello/i)
  expect(testElement).toBeInTheDocument()
})

test("Greet renders with a name", () => {
  render(<Greet name="Vishwas" />)
  const testElement = screen.getByText('Hello Vishwas')
  expect(testElement).toBeInTheDocument()
})
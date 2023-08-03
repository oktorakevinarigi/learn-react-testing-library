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

/* Contoh jika hanya ingin menjalankan test berikut dan test lain dalam file ini aka di skip */
// test.only("Greet renders correctly", () => {
// })

/* Contoh jika ingin skip test dan yang lain dijalankan didalam file ini */
// test.skip("Greet renders with a name", () => {
// })
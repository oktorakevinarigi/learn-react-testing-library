import {render, screen} from '@testing-library/react';

import { Greet } from './greet';

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />)
    const testElement = screen.getByText(/hello/i)
    expect(testElement).toBeInTheDocument()
  })

  describe("Nested", () => {
    test("renders with a name", () => {
      render(<Greet name="Vishwas" />)
      const testElement = screen.getByText('Hello Vishwas')
      expect(testElement).toBeInTheDocument()
    })
  })
})

/* Contoh jika hanya ingin menjalankan test berikut dan test lain dalam file ini akan di skip */
// test.only("Greet renders correctly", () => {
// })

/* Contoh jika ingin skip test dan yang lain dijalankan didalam file ini */
// test.skip("Greet renders with a name", () => {
// })

/* Contoh Group juga dapat jika menjalankan hanya test berikut dan test lain dalam file ini akan di skip */
// describe.only("Greet", () => {
// })

/* Contoh Group juga dapat jika ingin skip test dan yang lain dijalankan didalam file ini */
// describe.skip("Greet", () => {
// })
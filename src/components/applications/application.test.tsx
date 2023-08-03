import {render, screen} from '@testing-library/react';

import {Application} from './application'
import { describe } from 'vitest';

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole('textbox')
    expect(nameElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termElement = screen.getByRole('checkbox')
    expect(termElement).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
  })
})
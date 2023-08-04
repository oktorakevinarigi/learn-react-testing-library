import {render, screen} from '@testing-library/react';

import {Application} from './application'
import { describe } from 'vitest';

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {level: 1})
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole("heading", {level: 2})
    expect(sectionHeading).toBeInTheDocument()

    // Mendapatkan element dengan text All fields are mandatory baik dalam pararaf atau div
    const paragraphElement = screen.getByText("All fields are mandatory")
    expect(paragraphElement).toBeInTheDocument()

    // Mendapatkan element dengan attribut yang memiliki alt
    // seperti image, input, dll
    const imageElement = screen.getByAltText("a person with a laptop")
    expect(imageElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', {name: "Name"})
    expect(nameElement).toBeInTheDocument()

    // Mendapatkan element dengan text Name dan menambahkan selector input untuk 
    // mendapatkan element yg lebih spesifik jika ada text yg lain sama namanya
    const nameElement2 = screen.getByLabelText("Name", {selector: 'input'}) 
    expect(nameElement2).toBeInTheDocument()

    // Mendapatkan element dengan placeholder, jika terdapat satu placeholder dengan
    // name yg sudah di tentukan maka akan di anggap ada
    const nameElement3 = screen.getByPlaceholderText("Fullname")
    expect(nameElement3).toBeInTheDocument()

    // Mencari value dari tag input menggunakan getByDisplayValue
    const nameElement4 = screen.getByDisplayValue("Vishwas")
    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {name: "Bio"})
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termElement = screen.getByRole('checkbox')
    expect(termElement).toBeInTheDocument()

    const termElement2 = screen.getByLabelText('I agree to the term and conditions')
    expect(termElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
  })
})
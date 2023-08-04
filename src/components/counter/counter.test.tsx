import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event'
import {Counter} from './counter'

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', {name: "Increment"})
    expect(incrementButton).toBeInTheDocument()
  })

  test("renders a count of 0", () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0') // toHaveTextContent ada text di DOM
  })

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup() // initial user event
    render(<Counter />)
    
    const incrementButton = screen.getByRole('button', {name: "Increment"})
    await user.click(incrementButton) // user click button
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup()
    render(<Counter />)
    
    const amountInput = screen.getByRole('spinbutton') // spinbutton untuk input number
    await user.type(amountInput, '10') // user.type untuk user menginputkan data melalui keyboard
    expect(amountInput).toHaveValue(10) // toHaveValue untuk mengetahui value

    const setButton = screen.getByRole('button', {name: "Set"})
    await user.click(setButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  test("elemnts are focused in the right order", async () => {
    user.setup()
    render(<Counter />)
    
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', {name: "Set"})
    const incrementButton = screen.getByRole('button', {name: "Increment"})
    await user.tab() // user tab maka element focus
    expect(incrementButton).toHaveFocus() // apakah element focus
    await user.tab()
    expect(amountInput).toHaveFocus()
    await user.tab()
    expect(setButton).toHaveFocus()
  })
})

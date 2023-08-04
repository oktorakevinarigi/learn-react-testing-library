import {render, screen} from '@testing-library/react';
import {Sklills} from './sklills'

describe("Skills", () => {
  const sklills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Sklills skills={sklills} />)
    const listElement = screen.getByRole("list")
    expect(listElement).toBeInTheDocument()
  })

  test("renders a list of skills", () => {
    render(<Sklills skills={sklills} />)

    // Mencari berapa banyak element di DOM
    // Mengembalikan array element node
    const listItemElement = screen.getAllByRole("listitem")
    expect(listItemElement).toHaveLength(sklills.length)
  })

  test("renders Login button", () => {
    render(<Sklills skills={sklills} />)

    const loginButton = screen.getByRole("button", {name: "Login"})
    expect(loginButton).toBeInTheDocument()
  })

  test("Start Learning button is not rendered", () => {
    render(<Sklills skills={sklills} />)

    // Mencari element yang tidak di render pada DOM
    const startLearningButton = screen.queryByRole("button", {name: "Start learning"})
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test("Start learning button is eventualy displayed", async () => {
    render(<Sklills skills={sklills} />)

    // Mencari element dengan kemungkinan munculan async
    // dapat menggunakan find, default timeout 500 jika tidak di set
    const startLearningButton = await screen.findByRole("button", 
      {name: "Start learning"}, 
      {timeout: 2000}
    )
    expect(startLearningButton).toBeInTheDocument()
  })
})
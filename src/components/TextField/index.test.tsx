// TextField.test.tsx
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import TextField from "."

describe("[Component] - TextField", () => {
  it("renders without crashing", () => {
    render(<TextField />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("renders a label when passed", () => {
    const labelText = "Username"
    render(<TextField label={labelText} id="username" />)
    expect(screen.getByText(labelText)).toBeInTheDocument()
  })

  it("renders an error message when passed", () => {
    const errorMessage = "This field is required"
    render(<TextField error={errorMessage} />)
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })

  it("applies input attributes correctly", () => {
    render(<TextField placeholder="Enter your username" id="username" />)
    const inputElement = screen.getByRole("textbox")
    expect(inputElement).toHaveAttribute("placeholder", "Enter your username")
    expect(inputElement).toHaveAttribute("id", "username")
  })
})

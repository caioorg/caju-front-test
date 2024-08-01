// TextFieldMask.test.tsx
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { TextFieldMask } from "./"

jest.mock("react-input-mask", () => ({
  __esModule: true,
  default: (props: any) => <input {...props} />, // Mock básico
}))

// Mocking the styled components if necessary
jest.mock("./styles", () => ({
  Wrapper: "div",
  Input: "input",
  MessageError: "span",
}))

describe("TextFieldMask", () => {
  it("renders without crashing", () => {
    render(<TextFieldMask mask="__-__-____" />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("renders a label when passed", () => {
    const labelText = "Date"
    render(<TextFieldMask label={labelText} id="date" mask="__-__-____" />)
    expect(screen.getByText(labelText)).toBeInTheDocument()
  })

  it("renders an error message when passed", () => {
    const errorMessage = "Invalid date"
    render(<TextFieldMask error={errorMessage} mask="__-__-____" />)
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })

  it("applies mask correctly", () => {
    render(<TextFieldMask mask="__-__-____" id="masked-input" />)
    const inputElement = screen.getByRole("textbox")
    expect(inputElement).toHaveAttribute("mask", "__-__-____")
  })
})

import { render, screen } from "@testing-library/react"
import Button from "."

describe("[Component] - Button", () => {
  it("should render button", () => {
    render(<Button>Ativar</Button>)
    expect(screen.getByRole("button", { name: /ativar/i }))
  })
})

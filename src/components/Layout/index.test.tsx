import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Layout } from "."

describe("[Component] - Layout", () => {
  it("should render the header and children", () => {
    const testContent = "Test Content"
    const { asFragment } = render(
      <Layout>
        <div>{testContent}</div>
      </Layout>
    )

    expect(screen.getByText("Caju Front Teste")).toBeInTheDocument()
    expect(screen.getByText(testContent)).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})

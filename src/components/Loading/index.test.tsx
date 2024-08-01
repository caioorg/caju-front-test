import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { LoadingSpinner } from "."

describe("[Component] - Loading", () => {
  it("should render component loading", () => {
    const { asFragment } = render(<LoadingSpinner />)

    expect(asFragment()).toMatchSnapshot()
  })
})

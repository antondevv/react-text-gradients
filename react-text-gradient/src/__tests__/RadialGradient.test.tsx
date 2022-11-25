import * as React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { RadialGradient } from "../components"

const RadialGradientTest = () => (
  <RadialGradient
    fallbackColor="red"
    className="linear-gradient-text"
    gradient={["#fff", "#000"]}
  >
    Radial Gradient Text
  </RadialGradient>
)

describe("RadialGradient", () => {
  test("renders correctly", () => {
    render(<RadialGradientTest />)
    expect(screen.getByText("Radial Gradient Text")).toBeInTheDocument()
  })

  test("should have background-image", () => {
    const { container } = render(<RadialGradientTest />)
    // NOTE: There are problems with `toHaveStyle` to be able to check the precise style of an property. And it only really checks if the style property exists.
    expect(container.firstChild).toHaveStyle(
      "background-image: radial-gradient(#fff, #000)"
    )
  })
})

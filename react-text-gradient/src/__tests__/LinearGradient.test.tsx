import * as React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { LinearGradient } from "../components"

const LinearGradientTest = () => (
  <LinearGradient
    fallbackColor="red"
    className="linear-gradient-text"
    gradient={["to left", "#fff, #000"]}
  >
    Linear Gradient Text
  </LinearGradient>
)

describe("LinearGradient", () => {
  test("should renders correctly", () => {
    render(<LinearGradientTest />)
    expect(screen.getByText("Linear Gradient Text")).toBeInTheDocument()
  })

  test("should have background-image", () => {
    const { container } = render(<LinearGradientTest />)
    // NOTE: There are problems with `toHaveStyle` to be able to check the precise style of an property. And it only really checks if the style property exists.
    expect(container.firstChild).toHaveStyle(
      "background-image: radial-gradient(#fff, #000)"
    )
  })
})

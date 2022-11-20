import { Linear, Radial } from "../GradientText"

const directions = [
  "to left",
  "to top left",
  "to bottom left",
  "to right",
  "to top right",
  "to bottom right",
  "to top",
  "to bottom",
] as const

export type Directions = typeof directions[number]

const toRadialStyle = (gradient: Radial) => {
  const colors = gradient
  return {
    background: `radial-gradient(${colors})` as const,
  }
}

const toLinearStyle = (gradient: Linear) => {
  const [dir, colors] = gradient

  const direction = directions.includes(dir as any) ? dir : null

  if (!direction)
    throw new Error(
      `Expected gradient to be of type (linearGradient={["<direction>", [<color values>]]), got '${gradient}'`
    )
  return {
    background: `linear-gradient(${direction}, ${colors})` as const,
  }
}

const checkTypeOfGradient = (gradient: Radial | Linear) => {
  const [, maybeArray] = gradient
  return Array.isArray(maybeArray) ? "linear" : "radial"
}

export const transformGradientToStyle = (gradient: Radial | Linear) => {
  const typeOfGradient = checkTypeOfGradient(gradient)
  if (typeOfGradient === "radial") return toRadialStyle(gradient as Radial)
  if (typeOfGradient === "linear") return toLinearStyle(gradient as Linear)
}

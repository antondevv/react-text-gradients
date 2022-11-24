import { GradientTypes, Linear, Radial } from "../types"

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

const defaultStyles = {
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}

export const toRadialStyle = (gradient: Radial, fallbackColor?: string) => {
  const colors = gradient
  return {
    ...defaultStyles,
    backgroundColor: fallbackColor,
    background: `radial-gradient(${colors})` as const,
  }
}

export const toLinearStyle = (gradient: Linear, fallbackColor?: string) => {
  const [dir, colors] = gradient

  const direction = directions.includes(dir as any) ? dir : null

  if (!direction)
    throw new Error(
      `Expected gradient to be of type (linearGradient={["<direction>", [<color values>]]), got '${gradient}'`
    )
  return {
    ...defaultStyles,
    backgroundColor: fallbackColor,
    backgroundImage: `linear-gradient(${direction}, ${colors})` as const,
  }
}

export const toGradientStyle = (
  gradient: Linear | Radial,
  gradientType: GradientTypes,
  fallbackColor?: string
) => {
  if (gradientType === "radial")
    return toRadialStyle(gradient as Radial, fallbackColor)
  if (gradientType === "linear")
    return toLinearStyle(gradient as Linear, fallbackColor)
}

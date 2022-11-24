import {
  LinearGradientProps,
  RadialGradientProps,
  GradientTypes,
  Linear,
  Radial,
} from "../types"

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

export const toRadialStyle = (gradient: Radial) => {
  const colors = gradient
  return {
    ...defaultStyles,
    background: `radial-gradient(${colors})` as const,
  }
}

export const toLinearStyle = (gradient: Linear) => {
  const [dir, colors] = gradient

  const direction = directions.includes(dir as any) ? dir : null

  if (!direction)
    throw new Error(
      `Expected gradient to be of type (linearGradient={["<direction>", [<color values>]]), got '${gradient}'`
    )
  return {
    ...defaultStyles,
    background: `linear-gradient(${direction}, ${colors})` as const,
  }
}

export const toGradientStyle = (
  gradient: Linear | Radial,
  gradientType: GradientTypes
) => {
  if (gradientType === "radial") return toRadialStyle(gradient as Radial)
  if (gradientType === "linear") return toLinearStyle(gradient as Linear)
}

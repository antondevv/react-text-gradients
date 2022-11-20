import * as React from "react"
import type { RequireExactlyOne } from "type-fest"
import { Directions, transformGradientToStyle } from "./helpers"

export type Linear = [Directions, string[]]
export type Radial = string[]

export type GradientTextProps = React.ComponentPropsWithRef<"span"> & {
  children: React.ReactNode
  compatebility?: { legacy: boolean }
  fallbackColor?: string
  radialGradient: Radial
  linearGradient: Linear
}

export const GradientText = ({
  children,
  linearGradient,
  radialGradient,
  fallbackColor,
  ...rest
}: RequireExactlyOne<
  GradientTextProps,
  "linearGradient" | "radialGradient"
>) => {
  const gradient = linearGradient || radialGradient
  if (!gradient) throw new Error("missing gradient")

  const gradientStyle = transformGradientToStyle(gradient)
  const style = {
    background: fallbackColor,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    ...gradientStyle,
  }

  return (
    <span style={style} {...rest}>
      {children}
    </span>
  )
}

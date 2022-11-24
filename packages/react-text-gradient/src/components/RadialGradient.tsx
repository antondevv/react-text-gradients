import * as React from "react"
import { toGradientStyle } from "../helpers"
import { RadialGradientProps } from "../types"
import { Span } from "./Span"

export const RadialGradient = ({
  children,
  gradient,
  fallbackColor,
  ...rest
}: RadialGradientProps) => {
  if (!gradient) throw new Error("missing gradient")
  const style = toGradientStyle(gradient, "radial")

  return (
    <Span style={{ ...style, background: fallbackColor }} {...rest}>
      {children}
    </Span>
  )
}

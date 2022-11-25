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
  const style = toGradientStyle(gradient, "radial", fallbackColor)
  return (
    <Span style={style} {...rest}>
      {children}
    </Span>
  )
}

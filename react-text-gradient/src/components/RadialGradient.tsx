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
  const style = {
    ...toGradientStyle(gradient, "radial", fallbackColor),
    ...rest.style,
  }
  return (
    <Span {...rest} style={style}>
      {children}
    </Span>
  )
}

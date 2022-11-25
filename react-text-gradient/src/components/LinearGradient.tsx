import * as React from "react"
import { toGradientStyle } from "../helpers"
import { LinearGradientProps } from "../types"
import { Span } from "./Span"

export const LinearGradient = ({
  children,
  gradient,
  fallbackColor,
  ...rest
}: LinearGradientProps) => {
  const style = toGradientStyle(gradient, "linear", fallbackColor)
  return (
    <Span style={style} {...rest}>
      {children}
    </Span>
  )
}

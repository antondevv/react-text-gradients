import * as React from "react"
import { toGradientStyle } from "../helpers"
import { TextGradientProps } from "../types"
import { Span } from "./Span"

export const TextGradient = ({
  children,
  gradient,
  fallbackColor,
  ...rest
}: TextGradientProps) => {
  if (!gradient) throw new Error("missing gradient")
  const style = toGradientStyle(gradient, fallbackColor)
  return (
    <Span style={style} {...rest}>
      {children}
    </Span>
  )
}

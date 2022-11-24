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
  if (!gradient) throw new Error("missing gradient")
  const style = toGradientStyle(gradient, "linear")

  return (
    <Span style={{ ...style, background: fallbackColor }} {...rest}>
      {children}
    </Span>
  )
}

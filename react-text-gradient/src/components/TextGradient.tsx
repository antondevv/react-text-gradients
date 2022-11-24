import * as React from "react"
import { toGradientStyle } from "../helpers"
import { TextGradientProps } from "../types"
import { Span } from "./Span"

export const TextGradient = ({
  children,
  linearGradient,
  fallbackColor,
  ...rest
}: TextGradientProps) => {
  if (!linearGradient) throw new Error("missing gradient")
  const style = toGradientStyle(linearGradient, fallbackColor)
  return (
    <Span style={style} {...rest}>
      {children}
    </Span>
  )
}

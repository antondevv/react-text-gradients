import * as React from "react"
import { SpanProps } from "../types"

export const Span = ({ children, ...rest }: SpanProps) => (
  <span {...rest}>{children}</span>
)

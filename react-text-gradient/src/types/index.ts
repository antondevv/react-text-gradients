import { Directions } from "../helpers"

export type LinearGradient = [Directions, string[]]
export type SpanProps = React.ComponentPropsWithRef<"span">

export type TextGradientProps = SpanProps & {
  fallbackColor?: string
  linearGradient: LinearGradient
}

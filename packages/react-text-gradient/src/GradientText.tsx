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

const allowedNodes = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "a"] as const

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
  const ref = React.useRef<HTMLSpanElement>(null)
  const gradient = linearGradient || radialGradient
  if (!gradient) throw new Error("missing gradient")
  const gradientStyle = transformGradientToStyle(gradient)

  const childrenT = children as React.ReactElement | undefined | null
  const typeOfNode = childrenT && childrenT["type"] ? childrenT["type"] : null
  if (!allowedNodes.includes(typeOfNode as typeof allowedNodes[number]))
    throw new Error("Wrong type")

  const TextNode = children as React.ReactNode
  if (!TextNode || !typeOfNode) throw new Error("Wrong html element")
  const style = {
    background: fallbackColor,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    ...gradientStyle,
  }

  const { children: __, style: _, ...res } = childrenT?.props
  const { style: styleProp } = childrenT?.props
  const styles = { ...style, ...styleProp }
  const props = { style: styles, ...res, ...rest, ref }
  return React.createElement(typeOfNode, props, childrenT?.props?.children)
}

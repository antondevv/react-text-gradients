import { Directions } from "../helpers";

export type GradientTypes = "linear" | "radial";
export type Linear = [Directions, string];
export type Radial = string[];
export type SpanProps = React.ComponentPropsWithRef<"span">;
export type FallbackColor = string;

export type LinearGradientProps = SpanProps & {
  fallbackColor?: FallbackColor;
  gradient: Linear;
};

export type RadialGradientProps = SpanProps & {
  fallbackColor?: FallbackColor;
  gradient: Radial;
};

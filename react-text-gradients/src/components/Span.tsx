import * as React from 'react'
import { SpanProps } from '../types'

export const Span = ({
  children,
  ...rest
}: { children: React.ReactNode } & SpanProps) => (
  <span {...rest}>{children}</span>
)

import Link from "next/link"
import { ComponentPropsWithRef, ReactNode } from "react"
import styles from "./Button.module.css"
type ButtonLinkProps = ComponentPropsWithRef<"a"> & {
  children: ReactNode
  theme: "dark" | "light"
  hrefTo: string
}
export const ButtonLink = ({
  children,
  theme = "light",
  hrefTo,
  ...rest
}: ButtonLinkProps) => {
  return (
    <Link href={hrefTo} legacyBehavior>
      <a
        {...rest}
        className={`${styles["button"]} ${styles[`button-${theme}`]}`}
      >
        {children}
      </a>
    </Link>
  )
}

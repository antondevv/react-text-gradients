import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { LinearGradient as Lg, RadialGradient as Rg } from "react-text-gradient"

export default function Home() {
  return (
    <div className={styles.App}>
      <h1 className="h1">
        <Lg gradient={["to left", "#17acff ,#ff68f0"]}>Hey i'm a linear!</Lg>
      </h1>

      <h1 className="h1">
        <Rg
          gradient={[
            "circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%",
          ]}
        >
          Hey i'm a radial!
        </Rg>
      </h1>
    </div>
  )
}

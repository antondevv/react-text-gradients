import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { LinearGradient as Lg, RadialGradient as Rg } from "react-text-gradient"

export default function Home() {
  return (
    <div className={styles.App}>
      <h1 className={styles.h1}>
        <Lg gradient={["to left", ["#17acff", "#ff68f0"]]}>
          Hey i'm a linear!
        </Lg>
      </h1>

      <h1 className={styles.h1}>
        <Rg
          gradient={[
            "#17acff 23.45%",
            "#ff68f0 73.52%",
            "rgba(201, 68, 100, 0.7) 120.73%",
          ]}
          fallbackColor="#000"
        >
          Hey i'm a radial!
        </Rg>
      </h1>
    </div>
  )
}

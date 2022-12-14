import Head from "next/head"
import Image from "next/image"
import { ButtonLink } from "../components/Button"
import { Nav } from "../components/Nav"
import styles from "../styles/Home.module.css"
// @ts-ignore
import ghIcon from "../../public/gh.svg"
import imagePreview from "../../public/c-prev.png"
import { LinearGradient } from "react-text-gradients"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Text Gradient</title>
        <meta name="React Text Gradient" content="Gradient Text For React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.flex}>
        <div className={styles.grid}>
          {/* 
          TODO: Maybe add custom documentation and have a navbar for it 
          <div className={styles.gridNav}>
            <Nav />
          </div> */}
          <main>
            <div className={styles.gridContent}>
              <div className={styles.content}>
                <div className={styles.contentFlex}>
                  <div className={styles.contentText}>
                    <h1 className={styles.title}>
                      <LinearGradient
                        gradient={[
                          "to left",
                          "#17acff 23.45%, #ff68f0 73.52%, rgba(201, 68, 100, 0.7) 120.73%",
                        ]}
                        fallbackColor="red"
                      >
                        Gradient Text <br />
                        For React.
                      </LinearGradient>
                    </h1>
                    <p className={styles.description}>
                      A React component for easily making gradient texts in
                      React 🚀
                    </p>
                    <div className={styles.features}>
                      <div className={styles.featureWrapper}>
                        <p className={styles.featureText}>
                          🔥 Written 100% in TypeScript
                        </p>
                        <div className={styles.onlyMobile}>
                          <p className={styles.featureText}>
                            💥 Linear & Radial gradient component
                          </p>
                        </div>
                        <p className={styles.featureText}>
                          💅 Fully customize colors by props
                        </p>
                      </div>
                      <div className={styles.featureWrapper}>
                        <p className={styles.featureText}>
                          ⚙️ Supports tree shaking
                        </p>
                        <p className={styles.featureText}>
                          ⚡ Lightweight ~ 500 bytes/component
                        </p>
                      </div>
                      <div className={styles.featureWrapper}>
                        <p className={styles.featureText}>
                          🧩 Built using 0 dependencies
                        </p>

                        <p className={styles.featureText}>
                          🚀 Supports ems, cjs & umd
                        </p>
                      </div>
                    </div>
                    <div className={styles.buttonWrapper}>
                      <ButtonLink
                        hrefTo="https://www.npmjs.com/package/react-text-gradients"
                        theme="light"
                      >
                        Get started
                      </ButtonLink>
                      <ButtonLink
                        hrefTo="https://github.com/antondevv/react-text-gradients"
                        theme="dark"
                      >
                        <div className={styles.githubButton}>
                          <img src={ghIcon.src} />
                          GitHub
                        </div>
                      </ButtonLink>
                    </div>
                  </div>
                  <div className={styles.contentMedia}>
                    <div className={styles.media}>
                      <img src={imagePreview.src} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

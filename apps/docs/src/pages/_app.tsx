import "../styles/globals.css"
import type { AppProps } from "next/app"
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        defer
        data-domain="react-text-gradients.vercel.app"
        src="https://plausible.io/js/script.js"
      ></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

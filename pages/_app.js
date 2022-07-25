import '../styles/globals.css'
import { CounterContextProvider } from "./store";

function MyApp({ Component, pageProps }) {
  return (
    <CounterContextProvider>
      <Component {...pageProps} />
    </CounterContextProvider>
  )
}

export default MyApp

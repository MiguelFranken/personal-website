import '../styles/globals.css'
import { CounterContextProvider } from "./store";

// TODO
// - State Management with either redux or zustand
function MyApp({ Component, pageProps }) {
  return (
    <CounterContextProvider>
      <Component {...pageProps} />
    </CounterContextProvider>
  )
}

export default MyApp

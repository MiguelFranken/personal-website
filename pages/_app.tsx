import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CounterContextProvider } from "./store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CounterContextProvider>
      <Component {...pageProps} />
    </CounterContextProvider>
  )
}

export default MyApp

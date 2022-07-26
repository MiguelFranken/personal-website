import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ArticlesContextProvider } from "./store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ArticlesContextProvider>
      <Component {...pageProps} />
    </ArticlesContextProvider>
  );
}

export default MyApp;

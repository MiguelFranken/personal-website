import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ArticlesContextProvider } from "./store";
import Navigation from "@/components/navigation";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ArticlesContextProvider>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </ArticlesContextProvider>
  );
}

export default MyApp;

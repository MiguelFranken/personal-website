import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ArticlesContextProvider } from "@/lib/store";
import React from "react";
import Container from "@/components/container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ArticlesContextProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ArticlesContextProvider>
  );
}

export default MyApp;

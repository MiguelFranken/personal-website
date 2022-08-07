import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ArticlesContextProvider } from "@/lib/store";
import React from "react";
import Layout from "@/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ArticlesContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ArticlesContextProvider>
  );
}

export default MyApp;

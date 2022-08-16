import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

const BorderContainer = (props) => {
  return (
    <div className="sm:bg-clip-border sm:border-l-20 sm:border-t-20 sm:border-gray-900 min-h-screen bg">
      {props.children}
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        <meta name="theme-color" content="white" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="white" />

        <title>Miguel Franken</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <BorderContainer>
        <Component {...pageProps} />
      </BorderContainer>
    </>
  );
}

export default MyApp;

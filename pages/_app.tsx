import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

const BorderContainer = (props) => {
  return (
    <div className="bg-clip-border sm:border-l-20 border-t-20 border-gray-900 min-h-screen bg">
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
        <title>Miguel Franken</title>
      </Head>

      <BorderContainer>
        <Component {...pageProps} />
      </BorderContainer>
    </>
  );
}

export default MyApp;

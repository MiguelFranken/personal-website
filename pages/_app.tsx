import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

const BorderContainer = (props) => {
  return (
    <div className="bg-clip-border sm:border-l-20 border-t-20 border-gray-900 min-h-screen bg">
      {props.children}
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BorderContainer>
      <Component {...pageProps} />
    </BorderContainer>
  );
}

export default MyApp;

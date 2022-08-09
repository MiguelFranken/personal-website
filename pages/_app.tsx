import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ArticlesContextProvider } from "@/lib/store";
import React from "react";

const Container = (props) => {
  return (
    <div className="bg-clip-border border-l-20 border-t-20 border-gray-900 min-h-screen bg">
      {props.children}
    </div>
  );
};

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

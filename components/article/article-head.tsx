import Head from "next/head";
import React from "react";
import { ArticleHeadProps } from "@/components/article/types";

export const siteTitle = "Miguel Franken";

export default function ArticleHead({ title }: ArticleHeadProps) {
  return (
    <Head>
      <title>{title} - Miguel Franken</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="description" content="Some project description" />
      <meta name="theme-color" content="#facc15" />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}

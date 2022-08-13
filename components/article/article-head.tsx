import Head from "next/head";

export const siteTitle = "Miguel Franken";

export default function ArticleHead() {
  return (
    <Head>
      <title>Awesome Title</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Some project description" />
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

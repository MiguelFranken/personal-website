import Head from "next/head";
import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import Container from "@/components/layout/container";
import styles from "@/styles/article-layout.module.css";
import classNames from "classnames";
import { ReactElement } from "react";
import Footer from "@/components/footer";
import TableOfContents from "@/components/article/table-of-contents";
import { Heading } from "@/lib/rehype-extract-headings";

export type ProjectArticleProps = {
  title: string;
  description: string;
  image: string;
  demo?: string;
  github?: string;
  headings: Heading[];
  children?: ReactElement;
};

export const siteTitle = "Miguel Franken";

export default function ArticleLayout({
  title,
  description,
  image,
  children,
  demo,
  github,
  headings,
}: ProjectArticleProps) {
  return (
    <>
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

      <div className="pb-16">
        <Container className="pt-16">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-16">
              <nav
                className="flex items-center justify-between lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/pages">
                      <a className="flex flex-col gap-3">
                        <img
                          className="h-24 w-24 object-cover border-2 border-current"
                          src="/portrait.jpg"
                          alt="Miguel Franken"
                        />
                        <span className="font-extrabold text-3xl tracking-wide leading-8">
                          Miguel Franken
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>

              <div className="flex flex-col sm:items-center lg:items-start justify-center">
                <div>
                  <span className="block text-sm text-gray-900 font-medium tracking-wide uppercase">
                    Introducing
                  </span>
                  <span className="mt-1 pb-1 -mb-1 block text-5xl sm:text-6xl leading-8 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-300">
                    {title}
                  </span>
                </div>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {description}
                </p>
                {demo && (
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="mt-3 sm:mt-0">
                      <a
                        href={demo}
                        className="relative inline-block group focus:outline-none focus:ring w-full"
                      >
                        <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-gradient-to-r from-yellow-300 to-yellow-200 group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

                        <span className="w-full relative inline-flex justify-center items-center gap-2 px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current">
                          <ExternalLinkIcon
                            className="h-6 w-6 fill-current"
                            aria-hidden="true"
                          />
                          <span>Live Demo</span>
                        </span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-end">
              <img
                className={classNames(
                  "border-2 border-current box-border",
                  styles.coverImage
                )}
                src={image}
                alt=""
              />
            </div>
          </div>

          <div className="my-32 relative">
            <TableOfContents headings={headings} />

            <div className="pointer-events-none hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
              <div
                className="relative h-full text-lg max-w-prose mx-auto"
                aria-hidden="true"
              >
                <svg
                  className="absolute bottom-1/2 left-full transform translate-x-32"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                >
                  <defs>
                    <pattern
                      id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                      x={0}
                      y={0}
                      width={24}
                      height={24}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={8}
                        height={8}
                        className="text-yellow-400/50"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                  />
                </svg>
                <svg
                  className="absolute bottom-12 left-full transform translate-x-32"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                >
                  <defs>
                    <pattern
                      id="d3eb07ae-5182-43e6-857d-35c643af9034"
                      x={0}
                      y={0}
                      width={24}
                      height={24}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={8}
                        height={8}
                        className="text-fuchsia-400/50"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div
                className={classNames(
                  styles.articleBody,
                  "prose prose-yellow prose-lg text-gray-500 prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:bg-gradient-to-r prose-h1:from-yellow-400 prose-h1:to-yellow-300 prose-h1:mb-0 prose-h1:scroll-mt-6 prose-h1:inline-block prose-a:font-semibold prose-a:decoration-2 prose-a:text-yellow-400 prose-a:underline-offset-2 prose-h2:prose-h3:text-gray-900 hover:prose-a:underline-offset-4"
                )}
              >
                {children}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}

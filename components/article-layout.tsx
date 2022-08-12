import Head from "next/head";
import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import Container from "@/components/container";
import styles from "@/styles/melodii.module.css";
import classNames from "classnames";
import { ReactElement } from "react";
import Footer from "@/components/footer";

export type ProjectArticleProps = {
  title: string;
  description: string;
  image: string;
  demo: boolean;
  children?: ReactElement;
};

export default function ArticleLayout({
  title,
  description,
  image,
  children,
  demo,
}: ProjectArticleProps) {
  return (
    <>
      <Head>
        <title>Miguel Franken</title>
      </Head>

      <Container className="pt-16">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-16">
            <nav
              className="flex items-center justify-between lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link href="/">
                    <a className="flex flex-col gap-3">
                      <img
                        className="h-24 w-24 object-cover border-2 border-current"
                        src="/portrait.jpg"
                        alt="Workflow"
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
              <h1>
                <span className="block text-sm text-gray-900 font-medium tracking-wide uppercase">
                  Introducing
                </span>
                <span className="mt-1 pb-1 -mb-1 block text-5xl sm:text-6xl leading-8 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-fuchsia-500">
                  {title}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {description}
              </p>
              {demo && (
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="mt-3 sm:mt-0">
                    <a
                      href="#"
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

        <div className="my-32 relative overflow-hidden">
          <div className="pointer-events-none hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <svg
                className="absolute top-12 left-full transform translate-x-32"
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
            <div className="prose prose-indigo prose-lg text-gray-500">
              {children}
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

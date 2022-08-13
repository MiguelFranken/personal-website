import Link from "next/link";
import classNames from "classnames";
import styles from "@/styles/article-hero.module.css";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { ArticleHeroProps } from "@/components/article/types";

export default function ArticleHero({
  title,
  description,
  demo,
  github,
  image,
}: ArticleHeroProps) {
  const ArticleActionButtons = () => (
    <div className="mt-5 sm:mt-8 sm:flex sm:gap-4 sm:justify-center lg:justify-start">
      {demo && (
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
      )}
      {github && (
        <div className="mt-3 sm:mt-0">
          <a
            href={github}
            className="relative inline-block group focus:outline-none focus:ring w-full"
          >
            <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-gradient-to-r from-yellow-300 to-yellow-200 group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

            <span className="w-full relative inline-flex justify-center items-center gap-2 px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>GitHub</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );

  return (
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
          {(demo || github) && <ArticleActionButtons />}
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
  );
}

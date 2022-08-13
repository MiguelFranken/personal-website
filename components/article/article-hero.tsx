import styles from "@/styles/article-header.module.css";

import { ArticleHeroProps } from "@/components/article/types";
import Container from "@/components/layout/container";
import classNames from "classnames";
import Link from "next/link";
import Video from "@/components/video";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import Button from "@/components/button";

export default function ArticleHero({
  title,
  description,
  demo,
  github,
  image,
  video,
}: ArticleHeroProps) {
  const Pattern = () => (
    <div
      className="hidden md:block absolute inset-y-0 h-full w-full"
      aria-hidden="true"
    >
      <div className="relative h-full 2xl:m-16">
        <svg
          width={500}
          height={500}
          className="absolute left-0 rotate-90 scale-90 xl:scale-100 -translate-x-48 lg:-translate-x-32 -translate-y-32 xl:-translate-x-16 xl:-translate-y-16 2xl:translate-x-0 2xl:translate-y-0"
          viewBox="0 0 566 566"
          fill="none"
        >
          <rect
            width="86"
            height="86"
            rx="10"
            fill="#FED7AA"
            fillOpacity="0.5"
          />
          <rect
            x="22.5"
            y="22.5"
            width="81"
            height="81"
            rx="7.5"
            stroke="#111827"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path
            d="M411 258.651C411 256.082 413.082 254 415.651 254H446.349C448.918 254 451 256.082 451 258.651V289.349C451 291.918 448.918 294 446.349 294H415.651C413.082 294 411 291.918 411 289.349V258.651Z"
            fill="#FECACA"
            fillOpacity="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M455.349 266.256H424.651C423.881 266.256 423.256 266.881 423.256 267.651V298.349C423.256 299.119 423.881 299.744 424.651 299.744H455.349C456.119 299.744 456.744 299.119 456.744 298.349V267.651C456.744 266.881 456.119 266.256 455.349 266.256ZM424.651 263C422.082 263 420 265.082 420 267.651V298.349C420 300.918 422.082 303 424.651 303H455.349C457.918 303 460 300.918 460 298.349V267.651C460 265.082 457.918 263 455.349 263H424.651Z"
            fill="#111827"
          />
          <circle cx="503" cy="503" r="43" fill="#E0F2FE" fillOpacity="0.4" />
          <circle cx="523" cy="523" r="40" stroke="#111827" strokeWidth="6" />
          <path
            d="M134.736 268.368C134.736 282.931 122.931 294.736 108.368 294.736C93.8053 294.736 82 282.931 82 268.368C82 253.805 93.8053 242 108.368 242C122.931 242 134.736 253.805 134.736 268.368Z"
            fill="#BBF7D0"
            fillOpacity="0.4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M120.632 302.708C132.824 302.708 142.708 292.824 142.708 280.632C142.708 268.44 132.824 258.557 120.632 258.557C108.44 258.557 98.5566 268.44 98.5566 280.632C98.5566 292.824 108.44 302.708 120.632 302.708ZM120.632 307C135.195 307 147 295.195 147 280.632C147 266.069 135.195 254.264 120.632 254.264C106.069 254.264 94.2642 266.069 94.2642 280.632C94.2642 295.195 106.069 307 120.632 307Z"
            fill="#111827"
          />
          <path
            d="M238.34 372C242.189 365.333 251.811 365.333 255.66 372L293.765 438C297.614 444.667 292.803 453 285.105 453H208.895C201.197 453 196.386 444.667 200.235 438L238.34 372Z"
            fill="#FAE8FF"
            fillOpacity="0.4"
          />
          <path
            d="M284.062 391.5L322.167 457.5C324.862 462.167 321.494 468 316.105 468H239.895C234.506 468 231.138 462.167 233.833 457.5L271.938 391.5C274.632 386.833 281.368 386.833 284.062 391.5Z"
            stroke="#111827"
            strokeWidth="6"
          />
          <path
            d="M261.831 100.256C264.35 95.9147 270.65 95.9147 273.169 100.256L298.113 143.233C300.633 147.574 297.483 153 292.444 153H242.556C237.517 153 234.367 147.574 236.887 143.233L261.831 100.256Z"
            fill="#CCFBF1"
            fillOpacity="0.4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M314.145 157.512L289.201 114.535C288.445 113.233 286.555 113.233 285.799 114.535L260.855 157.512C260.099 158.814 261.044 160.442 262.556 160.442H312.444C313.956 160.442 314.901 158.814 314.145 157.512ZM293.169 112.256C290.65 107.915 284.35 107.915 281.831 112.256L256.887 155.233C254.367 159.574 257.517 165 262.556 165H312.444C317.483 165 320.633 159.574 318.113 155.233L293.169 112.256Z"
            fill="#111827"
          />
        </svg>
        <svg
          width={500}
          height={500}
          className="absolute right-0 scale-90 xl:scale-100 translate-x-48 lg:translate-x-32 -translate-y-32 xl:translate-x-16 xl:-translate-y-16 2xl:translate-x-0 2xl:translate-y-0"
          viewBox="0 0 566 566"
          fill="none"
        >
          <rect
            width="86"
            height="86"
            rx="10"
            fill="#FED7AA"
            fillOpacity="0.5"
          />
          <rect
            x="22.5"
            y="22.5"
            width="81"
            height="81"
            rx="7.5"
            stroke="#111827"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path
            d="M411 258.651C411 256.082 413.082 254 415.651 254H446.349C448.918 254 451 256.082 451 258.651V289.349C451 291.918 448.918 294 446.349 294H415.651C413.082 294 411 291.918 411 289.349V258.651Z"
            fill="#FECACA"
            fillOpacity="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M455.349 266.256H424.651C423.881 266.256 423.256 266.881 423.256 267.651V298.349C423.256 299.119 423.881 299.744 424.651 299.744H455.349C456.119 299.744 456.744 299.119 456.744 298.349V267.651C456.744 266.881 456.119 266.256 455.349 266.256ZM424.651 263C422.082 263 420 265.082 420 267.651V298.349C420 300.918 422.082 303 424.651 303H455.349C457.918 303 460 300.918 460 298.349V267.651C460 265.082 457.918 263 455.349 263H424.651Z"
            fill="#111827"
          />
          <circle cx="503" cy="503" r="43" fill="#E0F2FE" fillOpacity="0.4" />
          <circle cx="523" cy="523" r="40" stroke="#111827" strokeWidth="6" />
          <path
            d="M134.736 268.368C134.736 282.931 122.931 294.736 108.368 294.736C93.8053 294.736 82 282.931 82 268.368C82 253.805 93.8053 242 108.368 242C122.931 242 134.736 253.805 134.736 268.368Z"
            fill="#BBF7D0"
            fillOpacity="0.4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M120.632 302.708C132.824 302.708 142.708 292.824 142.708 280.632C142.708 268.44 132.824 258.557 120.632 258.557C108.44 258.557 98.5566 268.44 98.5566 280.632C98.5566 292.824 108.44 302.708 120.632 302.708ZM120.632 307C135.195 307 147 295.195 147 280.632C147 266.069 135.195 254.264 120.632 254.264C106.069 254.264 94.2642 266.069 94.2642 280.632C94.2642 295.195 106.069 307 120.632 307Z"
            fill="#111827"
          />
          <path
            d="M238.34 372C242.189 365.333 251.811 365.333 255.66 372L293.765 438C297.614 444.667 292.803 453 285.105 453H208.895C201.197 453 196.386 444.667 200.235 438L238.34 372Z"
            fill="#FAE8FF"
            fillOpacity="0.4"
          />
          <path
            d="M284.062 391.5L322.167 457.5C324.862 462.167 321.494 468 316.105 468H239.895C234.506 468 231.138 462.167 233.833 457.5L271.938 391.5C274.632 386.833 281.368 386.833 284.062 391.5Z"
            stroke="#111827"
            strokeWidth="6"
          />
          <path
            d="M261.831 100.256C264.35 95.9147 270.65 95.9147 273.169 100.256L298.113 143.233C300.633 147.574 297.483 153 292.444 153H242.556C237.517 153 234.367 147.574 236.887 143.233L261.831 100.256Z"
            fill="#CCFBF1"
            fillOpacity="0.4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M314.145 157.512L289.201 114.535C288.445 113.233 286.555 113.233 285.799 114.535L260.855 157.512C260.099 158.814 261.044 160.442 262.556 160.442H312.444C313.956 160.442 314.901 158.814 314.145 157.512ZM293.169 112.256C290.65 107.915 284.35 107.915 281.831 112.256L256.887 155.233C254.367 159.574 257.517 165 262.556 165H312.444C317.483 165 320.633 159.574 318.113 155.233L293.169 112.256Z"
            fill="#111827"
          />
        </svg>
      </div>
    </div>
  );

  const Nav = () => (
    <div className="flex justify-center">
      <Link href="/">
        <a
          className={classNames(
            styles.logo,
            "transition transform hover:scale-105",
            "before:absolute before:inline-block before:-inset-4 before:skew-y-2 before:bg-amber-600 hover:before:bg-amber-600/90",
            "relative inline-block text-center"
          )}
        >
          <span className="relative text-yellow-400 font-extrabold text-3xl tracking-wide leading-8 sm:px-2 md:pl-4 md:pr-3.5">
            Miguel Franken
          </span>
        </a>
      </Link>
    </div>
  );

  const LiveDemoIcon = (
    <ExternalLinkIcon className="h-6 w-6 fill-current" aria-hidden="true" />
  );

  const GithubIcon = (
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
  );

  const Hero = () => (
    <div className="mt-24 space-y-20 sm:space-y-6">
      <div className="text-center">
        <h1 className="text-5xl tracking-tight font-bold text-amber-600 sm:tracking-tight md:text-6xl md:tracking-tight">
          {title}
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-white md:mt-5 md:text-xl md:max-w-3xl">
          {description}
        </p>
      </div>
      {(demo || github) && (
        <div className="items-baseline md:justify-center flex-col md:flex md:flex-row gap-4 space-y-4 lg:space-y-0">
          {demo && (
            <div>
              <Button href={demo} text="Live Demo" icon={LiveDemoIcon} />
            </div>
          )}
          {github && (
            <div>
              <Button href={github} text="GitHub" icon={GithubIcon} />
            </div>
          )}
        </div>
      )}
    </div>
  );

  const Wave = () => (
    <div className="absolute bottom-1/2 w-full">
      <svg viewBox="0 0 2903 171" className="fill-white">
        <path d="M0 34.2252C289.285 82.1454 487.783 79.3303 794.265 34.2252C1100.75 -10.8799 1220.58 -11.9338 1471.8 34.2252C1705.26 77.1204 1901.69 71.1427 2187.4 34.2252C2464 -1.5142 2620.54 1.1688 2903 34.2252V171H0V34.2252Z" />
      </svg>
    </div>
  );

  const Divider = () => (
    <div className="absolute inset-0 flex flex-col" aria-hidden="true">
      <div className="flex-1" />
      <div className="flex-1 w-full bg-white" />
    </div>
  );

  return (
    <div className="bg-yellow-400 overflow-hidden">
      <div className="relative overflow-hidden">
        <Pattern />

        <Container className="relative pt-32 pb-24">
          <Nav />
          <Hero />
        </Container>

        <div className="relative">
          <Divider />
          <Wave />

          <Container>
            {image && (
              <img
                className="relative border-2 border-current box-border"
                src={image}
                alt="TODO"
              />
            )}
            {video && (
              <div className="relative border-2 border-current box-border w-full h-full">
                <Video src={video} />
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
}

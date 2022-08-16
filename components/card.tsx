import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";

export type CardProps = {
  href: string;
  image: string;
  title: string;
  description: string;
};

export default function Card({ href, image, title, description }: CardProps) {
  return (
    <Link href={href}>
      <a className="cursor-pointer relative inline-block group focus:outline-none focus:ring">
        <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-yellow-200/10 mix-blend-screen group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

        <span className="relative inline-flex px-8 py-3 h-full">
          <div>
            <div className="absolute inset-0 border-2 h-full border-yellow-200/20 mix-blend-screen"></div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="mt-4">
                  <object
                    type="image/svg+xml"
                    className="h-24 w-auto pointer-events-none"
                    data={image}
                    aria-label={title + ": " + description}
                  />
                </div>
                <div className="block mt-4">
                  <p className="text-2xl font-bold text-white tracking-wider uppercase">
                    {title}
                  </p>
                  <p className="mt-3 text-base text-white font-light">
                    {description}
                  </p>
                </div>
              </div>
              <div className="my-4 font-bold tracking-widest text-red-500 flex gap-1 items-center uppercase">
                <span>Learn more in the project blog post</span>
                <ChevronRightIcon className="shrink-0 w-6 h-6 sm:w-4 sm:h-4 stroke-4" />
              </div>
            </div>
          </div>
        </span>
      </a>
    </Link>
  );
}

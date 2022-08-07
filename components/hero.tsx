import Spline from "@splinetool/react-spline";

import { GlobeIcon, BriefcaseIcon } from "@heroicons/react/outline";

export default function Hero() {
  const scene = "https://prod.spline.design/PpI5IThe69TDEQdI/scene.splinecode";
  //const scene = "https://prod.spline.design/qKGZ5-liTt8lFNs0/scene.splinecode";

  return (
    <div className="bg-white">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div>
              <img
                className="h-48 w-48 object-cover rounded-md"
                src="/portrait.jpg"
                alt="Workflow"
              />
            </div>
            <div className="mt-20">
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl tracking-wide">
                  Miguel Franken
                </h1>
                <div className="font-light text-gray-700 mt-6 flex flex-col gap-1">
                  <div className="flex gap-1.5">
                    <GlobeIcon className="h-6 w-6" aria-hidden="true" />
                    <span>Cologne</span>
                  </div>
                  <div className="flex gap-1.5">
                    <BriefcaseIcon className="h-6 w-6" aria-hidden="true" />
                    <span>Fullstack Software Engineer</span>
                  </div>
                </div>

                <p className="mt-6 text-xl text-gray-500">
                  Hey Folks! Welcome to my personal website where you can
                  discover more about me, my amazing work and some of somewhat
                  weird hobbies.
                </p>
                <form action="#" className="mt-6 sm:max-w-lg sm:w-full sm:flex">
                  <div className="mt-4 sm:mt-0">
                    <a
                      href="https://github.com/miguelfranken"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                    >
                      <svg
                        className="-ml-1 mr-2 h-5 w-5 text-white fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="sm:relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 pr-32">
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <Spline scene={scene} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

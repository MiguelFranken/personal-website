import { BriefcaseIcon, GlobeIcon, MailIcon } from "@heroicons/react/outline";
import Spline from "@splinetool/react-spline";

const navigation = [
  {
    name: "Instagram",
    href: "https://instagram.com/_miguel.jpg_",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/miguelfranken",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Mail",
    href: "mailto:miguelfranken90@gmail.com",
    icon: () => <MailIcon className="w-6 h-6" />,
  },
];

export default function Hero() {
  return (
    <div className="w-full relative z-50">
      <div className="overflow-hidden lg:relative pt-12 sm:pt-24 xl:pt-48">
        <div className="z-20 mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-24">
          <div className="lg:col-span-2 px-8 sm:px-16 lg:px-8 2xl:px-0 z-50">
            <div>
              <img
                className="h-48 w-48 object-cover border-2 border-current"
                src="/portrait.jpg"
                alt="Workflow"
              />
            </div>
            <div className="mt-20">
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-5xl font-extrabold pb-1 -mb-1 bg-clip-text text-gray-900 sm:text-7xl tracking-wide">
                  Miguel Franken
                </h1>
                <div className="font-light text-gray-700 mt-6 flex flex-col gap-1">
                  <div className="flex gap-1.5">
                    <GlobeIcon className="h-6 w-6" aria-hidden="true" />
                    <span>Cologne</span>
                  </div>
                  <div className="flex gap-1.5">
                    <BriefcaseIcon className="h-6 w-6" aria-hidden="true" />
                    <span>Fullstack Software Engineer (2+ Years)</span>
                  </div>
                </div>

                <p className="mt-6 text-xl text-gray-500">
                  Hey Folks! Welcome to my personal website where you can
                  discover more about me, my interest for web development and
                  where you can find me when I&apos;m not working.
                </p>
                <form action="#" className="mt-6 sm:max-w-lg sm:w-full sm:flex">
                  <div className="items-baseline mt-4 sm:mt-0 flex-col md:flex md:flex-row justify-center gap-4 space-y-4 lg:space-y-0 md:order-2 w-full lg:w-min">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className="relative inline-block group focus:outline-none focus:ring w-full"
                        >
                          <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-gradient-to-r from-yellow-300 to-yellow-200 group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

                          <span className="w-full relative inline-flex justify-center items-center gap-2 px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                            <span>{item.name}</span>
                          </span>
                        </a>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 lg:mt-0 lg:absolute lg:top-0 lg:right-0 w-full lg:w-2/3 lg:h-screen flex items-center">
        <div className="h-full lg:h-full flex-1 overflow-hidden flex items-center">
          <Spline
            scene="https://prod.spline.design/E7Pa8QkNKx1Y51B1/scene.splinecode"
            className="ml-16 md:ml-24 lg:ml-64"
          />
        </div>
      </div>
    </div>
  );
}

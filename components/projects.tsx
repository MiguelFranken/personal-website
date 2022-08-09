import { ChevronRightIcon } from "@heroicons/react/outline";

const posts = [
  {
    title: "The Mix",
    href: "#",
    category: {
      name: "Article",
      href: "#",
      color: "bg-indigo-100 text-indigo-800",
    },
    description:
      "PWA that controls wireless music instruments via MIDI over WebRTC and produces sound output. A separate wireless connected device can additionally be connected to quality loudspeakers. PWA orchestrates all music instruments and can add additional sounds such as drum sounds or various effects.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Paul York",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "6 min",
    image: "/mix.svg",
  },
  {
    title: "Carbon",
    href: "#",
    category: { name: "Video", href: "#", color: "bg-pink-100 text-pink-800" },
    description:
      "Decentralized generative art project living on Ethereum blockchain. Rarity of unique digital collectibles (ERC721 NFTs) is determined by pseudo-randomly assigned traits and also how someone's wallet balance at the time of minting compares with the wallet balance of previous minters at the time they minted their token.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    author: {
      name: "Dessie Ryan",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "4 min",
    image: "/carbon.svg",
  },
];

export default function Projects() {
  const card = (post) => {
    return (
      <a
        key={post.title}
        href={post.href}
        className="relative inline-block group focus:outline-none focus:ring"
      >
        <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-yellow-200/10 group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

        <span className="relative inline-flex px-8 py-3 border-2 h-full border-yellow-200/20">
          <div>
            <div className="mt-4">
              <object
                type="image/svg+xml"
                className="h-24 w-auto"
                data={post.image}
              />
            </div>
            <div className="block mt-4">
              <p className="text-2xl font-bold text-white tracking-wider uppercase">
                {post.title}
              </p>
              <p className="mt-3 text-base text-white font-light">
                {post.description}
              </p>
            </div>
            <div className="my-4 font-bold tracking-widest text-red-500 flex gap-1 items-center">
              <span>Learn More</span>
              <ChevronRightIcon className="w-4 h-4 stroke-4" />
            </div>
          </div>
        </span>
      </a>
    );
  };

  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-yellow-100/10 lg:max-w-7xl">
        <div>
          <h2>
            <span className="tracking-wider font-extrabold text-white text-5xl sm:text-6xl">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-xl text-white sm:mt-4">
            Here you could find some of the hobby projects I have been working
            on! I am mainly interested in complex dynamic multi-user
            applications and building static websites.
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {/* shadow-sm rounded-xl */}
          {posts.map((post) => card(post))}
        </div>
      </div>
    </div>
  );
}

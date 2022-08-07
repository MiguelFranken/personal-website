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
      "PWA that controls wirelessly music instruments via MIDI over WebRTC and produces sound output. A separate wirelessly connected device can additionally be connected to quality loudspeakers.",
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Projects() {
  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2>
            <span className="text-3xl tracking-wider font-extrabold text-white sm:text-4xl">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-xl text-white sm:mt-4">
            Here you could find some of the hobby projects I have been working
            on. I am mainly interested in complex dynamic multi-user
            applications and building static websites. In my professional work
            and in side projects I have been working with frameworks such as
            React, NextJS, Angular, Vue, Strapi and Nuxt.
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href={post.category.href} className="inline-block">
                  <span
                    className={classNames(
                      post.category.color,
                      "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
              </div>
              <div className="mt-4">
                <img className="h-16 w-auto" src={post.image} alt="Workflow" />
              </div>
              <a href={post.href} className="block mt-4">
                <p className="text-xl font-semibold text-gray-100">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-white">{post.description}</p>
              </a>
              {/*<div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href}>{post.author.name}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-white">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>*/}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

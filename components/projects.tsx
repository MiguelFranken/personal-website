import { ChevronRightIcon } from "@heroicons/react/outline";
import Container from "@/components/container";
import SkewedSection from "@/components/skewed-section";
import Link from "next/link";

const posts = [
  {
    title: "Fabband",
    href: "/projects/fabband",
    description:
      "PWA that controls wireless music instruments via MIDI over WebRTC and produces sound output. A separate wireless connected device can additionally be connected to quality loudspeakers. PWA orchestrates all music instruments and can add additional sounds such as drum sounds or various effects.",
    image: "/mix.svg",
  },
  {
    title: "Carbon",
    href: "#",
    description:
      "Decentralized generative art project living on Ethereum blockchain. Rarity of unique digital collectibles (ERC721 NFTs) is determined by pseudo-randomly assigned traits and also how someone's wallet balance at the time of minting compares with the wallet balance of previous minters at the time they minted their token.",
    image: "/carbon.svg",
  },
];

export default function Projects() {
  const Card = ({ post }) => {
    return (
      <Link href={post.href}>
        <a className="cursor-pointer relative inline-block group focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-yellow-200/10 group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

          <span className="relative inline-flex px-8 py-3 border-2 h-full border-yellow-200/20">
            <div>
              <div className="mt-4">
                <object
                  type="image/svg+xml"
                  className="h-24 w-auto pointer-events-none"
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
      </Link>
    );
  };

  return (
    <SkewedSection bg="bg-conic-to-l from-yellow-200 via-red-500 to-fuchsia-500">
      <Container className="pt-16 pb-20 lg:pt-24 lg:pb-28 relative divide-y-2 divide-yellow-100/10">
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
          {posts.map((post) => (
            <Card post={post} key={post.title} />
          ))}
        </div>
      </Container>
    </SkewedSection>
  );
}

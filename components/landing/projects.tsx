import Container from "@/components/layout/container";
import SkewedSection from "@/components/layout/skewed-section";
import Card from "@/components/card";

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
    href: "/projects/carbon",
    description:
      "Decentralized generative art project living on Ethereum blockchain. Rarity of unique digital collectibles (ERC721 NFTs) is determined by pseudo-randomly assigned traits and also how someone's wallet balance at the time of minting compares with the wallet balance of previous minters at the time they minted their token.",
    image: "/carbon.svg",
  },
];

export default function Projects() {
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
            <Card {...post} key={post.title} />
          ))}
        </div>
      </Container>
    </SkewedSection>
  );
}

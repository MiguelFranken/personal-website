import GalleryCard from "@/components/gallery/gallery-card";

export type Study = {
  qualifier: string;
  image: string;
};

export type GalleryCardsProps = {
  cards: Study[];
};

export default function GalleryCards({ cards }: GalleryCardsProps) {
  const augmentedCards = cards.map((card) => {
    const split = card.qualifier.split(".");
    const title = split
      .at(-1)
      .split(/(?=[A-Z1-9])/)
      .join(" ");

    return {
      ...card,
      href: "#",
      title,
    };
  });

  console.log(augmentedCards);

  return (
    <div>
      <div className="grid grid-cols-3 gap-8">
        {augmentedCards.map((card) => (
          <GalleryCard {...card} key={card.qualifier} />
        ))}
      </div>
    </div>
  );
}

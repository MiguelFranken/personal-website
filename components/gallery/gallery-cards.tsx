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

    const slug = card.qualifier.split(".");
    const name = slug
      .pop()
      .split(/(?=[A-Z1-9])/)
      .join("-")
      .toLowerCase();
    const path = [...slug, name].join("/");

    return {
      ...card,
      href: `/gallery/${path}`,
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

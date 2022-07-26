import DeckCard from "@/pages/decks/deck";
import { Deck } from "@/pages/decks/types";

export default function Decks() {
  const deck0: Deck = {
    id: 0,
    header: "Celestial Deck &#8226; Major Arcana",
    subheader:
      "Celestial Tarot is both a handbook of the heavens and an oracular guide to the inner life. The twenty-two cards of the Major Arcana are represented by the twelve zodiacal constellations and ten planets. Each minor suit represents one of the four astrological elements.",
    description:
      "The Celestial Tarot also has symmetry. The 22 cards of the Major Arcana are represented by the twelve zodiacal constellations and the ten planets of contemporary astrology with each minor suit representing one of the four astrological elements. In the Minor Arcana we encounter the extra-zodiacal constellations. Throughout these cards the zodiac is divided into decanates to add more insight and symbolism to each card. The Court Cards include the Princesses who each personify a season while the Prince, Queen, and King of each suit embody the mutable, fixed, and cardinal signs of each element.",
    designer: "Miguel Franken",
  };
  const deck1: Deck = {
    id: 1,
    header: "Celestial Deck &#8226; Major Arcana",
    subheader:
      "Celestial Tarot is both a handbook of the heavens and an oracular guide to the inner life. The twenty-two cards of the Major Arcana are represented by the twelve zodiacal constellations and ten planets. Each minor suit represents one of the four astrological elements.",
    description:
      "The Celestial Tarot also has symmetry. The 22 cards of the Major Arcana are represented by the twelve zodiacal constellations and the ten planets of contemporary astrology with each minor suit representing one of the four astrological elements. In the Minor Arcana we encounter the extra-zodiacal constellations. Throughout these cards the zodiac is divided into decanates to add more insight and symbolism to each card. The Court Cards include the Princesses who each personify a season while the Prince, Queen, and King of each suit embody the mutable, fixed, and cardinal signs of each element.",
    designer: "Miguel Franken",
  };
  const decks: Deck[] = [deck0, deck1];

  return (
    <div className="flex flex-col gap-4">
      {decks.map((deck) => (
        <DeckCard key={deck.id} deck={deck} />
      ))}
    </div>
  );
}

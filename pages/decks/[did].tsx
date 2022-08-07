import React, { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Rating from "@/pages/decks/rating";
import Button from "@/components/button/button";
import Breadcrumb from "@/components/breadcrumb";
import Snap from "@/pages/decks/snap";

const ShowDeck: FC = () => {
  const router = useRouter();
  const { did } = router.query;

  const sampleCard = (index: number) => (
    <div className="bg-white overflow-hidden shadow rounded-lg w-full aspect-[3989/6615]">
      <div className="w-full h-full relative">
        <Image
          src={`/cards/${index}.svg`}
          layout="fill"
          alt="card"
          objectFit="cover"
        />
      </div>
    </div>
  );

  return (
    <>
      <div className="mb-8">
        <Breadcrumb />
        <div className="grid grid-cols-5 gap-12 mt-8">
          <div className="text-sm font-medium text-gray-500 col-span-2">
            {sampleCard(0)}
          </div>
          <div className="col-span-3">
            <Rating />

            <div className="text-sm text-gray-900 ">
              <h1 className="text-4xl leading-6 font-bold text-gray-900">
                Celestial Deck {did}
              </h1>
              <h2 className="text-2xl leading-4 text-gray-400 mt-3 font-medium">
                Major Arcana
              </h2>
            </div>
            <div className="mt-8 text-md font-light leading-2 text-gray-500">
              Celestial Tarot is both a handbook of the heavens and an oracular
              guide to the inner life. The twenty-two cards of the Major Arcana
              are represented by the twelve zodiacal constellations and ten
              planets. Each minor suit represents one of the four astrological
              elements.
            </div>

            <div className="flex gap-4 mt-8">
              <Button text="Action 1" className="flex-1" size="large" />
              <Button text="Action 2" className="flex-1" size="large" />
            </div>

            <div className="sm:col-span-2 mt-10 border-t border-gray-200">
              <dl className="pt-8">
                <dt className="text-sm font-normal text-black">Description</dt>
                <dd className="mt-3 text-sm text-gray-500">
                  The Celestial Tarot also has symmetry. The 22 cards of the
                  Major Arcana are represented by the twelve zodiacal
                  constellations and the ten planets of contemporary astrology
                  with each minor suit representing one of the four astrological
                  elements. In the Minor Arcana we encounter the extra-zodiacal
                  constellations. Throughout these cards the zodiac is divided
                  into decanates to add more insight and symbolism to each card.
                  The Court Cards include the Princesses who each personify a
                  season while the Prince, Queen, and King of each suit embody
                  the mutable, fixed, and cardinal signs of each element
                </dd>
              </dl>
            </div>
            <div className="sm:col-span-2 mt-8 border-t border-gray-200">
              <dl className="pt-8">
                <dt className="text-sm font-normal text-black">Highlights</dt>
                <dd className="mt-3 text-sm text-gray-500">
                  <ul className="list-disc list-inside">
                    <li>22 cards in total</li>
                    <li>Representing twelve zodiacal constellations</li>
                    <li>Representing ten planets of contemporary astrology</li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-gray-800 font-medium text-lg">All Cards</h3>
        <Snap />
      </div>
    </>
  );
};

export default ShowDeck;

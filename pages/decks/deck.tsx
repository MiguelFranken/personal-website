import Image from "next/image";
import React from "react";
import Button from "@/components/button/button";
import { Deck } from "@/pages/decks/types";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";

type DeckCardProps = {
  deck: Deck;
};

export default function DeckCard(props: DeckCardProps) {
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
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {ReactHtmlParser(props.deck.header)}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {props.deck.subheader}
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-4">
              {props.deck.description}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Designer</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-4">
              {props.deck.designer}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Preview</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-4">
              <div className="flex gap-4">
                {sampleCard(0)}
                {sampleCard(1)}
                {sampleCard(2)}
                {sampleCard(3)}
                {sampleCard(4)}
                {sampleCard(5)}
                {sampleCard(6)}
                {sampleCard(7)}
                {sampleCard(8)}
                {sampleCard(9)}
              </div>
            </dd>
          </div>
          <div className="py-4 sm:py-5 flex flex-row-reverse sm:px-6">
            <Link href={`/decks/${props.deck.id}`}>
              <Button text="Show Details" />
            </Link>
          </div>
        </dl>
      </div>
    </div>
  );
}

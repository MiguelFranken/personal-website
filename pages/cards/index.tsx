import React, { useState } from "react";
import Image from "next/image";
import CardModal from "@/components/modal";

export default function Cards() {
  const [open, setOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const showCardDetails = (index) => {
    setActiveCard(index);
    setOpen(true);
  };

  const sampleCard = (index: number) => (
    <div
      onClick={() => showCardDetails(index)}
      className="cursor-pointer bg-white overflow-hidden shadow rounded-lg w-full aspect-[3989/6615] transition transform hover:scale-105"
    >
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
      <CardModal setOpen={setOpen} open={open} index={activeCard} />
      <div className="grid gap-4 grid-cols-5 grid-rows-3">
        {sampleCard(1)}
        {sampleCard(2)}
        {sampleCard(3)}
        {sampleCard(4)}
        {sampleCard(5)}
        {sampleCard(6)}
        {sampleCard(7)}
        {sampleCard(8)}
        {sampleCard(9)}
        {sampleCard(10)}
        {sampleCard(11)}
        {sampleCard(12)}
        {sampleCard(13)}
        {sampleCard(14)}
        {sampleCard(15)}
        {sampleCard(16)}
        {sampleCard(17)}
        {sampleCard(18)}
        {sampleCard(19)}
        {sampleCard(20)}
        {sampleCard(21)}
        {sampleCard(22)}
      </div>
    </>
  );
}

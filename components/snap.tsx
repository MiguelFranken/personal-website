import Image from "next/image";
import React from "react";

export default function Snap() {
  const sampleCard = (index: number) => (
    <div className="w-60 shrink-0 bg-white overflow-hidden shadow rounded-lg aspect-[3989/6615]">
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
    <div className="flex gap-6 w-full snap-x overflow-x-auto">
      <div className="snap-center shrink-0">{sampleCard(1)}</div>
      <div className="snap-center shrink-0">{sampleCard(2)}</div>
      <div className="snap-center shrink-0">{sampleCard(3)}</div>
      <div className="snap-center shrink-0">{sampleCard(4)}</div>
      <div className="snap-center shrink-0">{sampleCard(5)}</div>
      <div className="snap-center shrink-0">{sampleCard(6)}</div>
      <div className="snap-center shrink-0">{sampleCard(7)}</div>
      <div className="snap-center shrink-0">{sampleCard(8)}</div>
      <div className="snap-center shrink-0">{sampleCard(9)}</div>
      <div className="snap-center shrink-0">{sampleCard(10)}</div>
      <div className="snap-center shrink-0">{sampleCard(11)}</div>
      <div className="snap-center shrink-0">{sampleCard(12)}</div>
      <div className="snap-center shrink-0">{sampleCard(13)}</div>
      <div className="snap-center shrink-0">{sampleCard(14)}</div>
      <div className="snap-center shrink-0">{sampleCard(15)}</div>
      <div className="snap-center shrink-0">{sampleCard(16)}</div>
      <div className="snap-center shrink-0">{sampleCard(17)}</div>
      <div className="snap-center shrink-0">{sampleCard(18)}</div>
      <div className="snap-center shrink-0">{sampleCard(19)}</div>
      <div className="snap-center shrink-0">{sampleCard(20)}</div>
      <div className="snap-center shrink-0">{sampleCard(21)}</div>
      <div className="snap-center shrink-0">{sampleCard(22)}</div>
    </div>
  );
}

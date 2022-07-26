import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";

export default function Cards() {
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
    <Layout>
      <div className="grid gap-4 grid-cols-5 grid-rows-3">
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
    </Layout>
  );
}

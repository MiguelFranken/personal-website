import Head from "next/head";
import Hero from "@/components/landing/hero";
import Footer from "@/components/footer";
import Technologies from "@/components/landing/technologies";
import Projects from "@/components/landing/projects";
import Feed from "@/components/landing/feed";
import Concepts from "@/components/landing/concepts";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Miguel Franken</title>
        <meta
          name="description"
          content="Miguel Franken - Cologne-based Full Stack Web Developer"
        />
        <meta
          name="keywords"
          content="development, full-stack development, web development, laravel, tailwind, nextjs, music, synthesizer, digital, vue, vuejs, angular, modern"
        />
        <meta name="author" content="Miguel Franken" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>

      <div className="space-y-24">
        <Hero />
        <Projects />

        <div className="pb-12">
          <Technologies />
        </div>

        <Feed />

        <div className="pb-32">
          <Concepts />
        </div>

        <Footer />
      </div>
    </>
  );
}

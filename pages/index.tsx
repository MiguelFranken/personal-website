import Head from "next/head";
import Hero from "@/components/landing/hero";
import Footer from "@/components/footer";
import Technologies from "@/components/landing/technologies";
import Projects from "@/components/landing/projects";
import Feed from "@/components/landing/feed";
import Concepts from "@/components/landing/concepts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Miguel Franken</title>
      </Head>

      <div className="z-50">
        <Hero />
      </div>

      <div className="space-y-24">
        <div className="z-10 -mt-16 lg:mt-12">
          <Projects />
        </div>

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

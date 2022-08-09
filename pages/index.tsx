import Head from "next/head";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Technologies from "@/components/technologies";
import Projects from "@/components/projects";

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

        <Footer />
      </div>
    </>
  );
}

import Head from "next/head";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Miguel Franken</title>
      </Head>

      <Hero />
      <Projects />
      <Footer />
    </>
  );
}

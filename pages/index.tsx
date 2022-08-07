import Head from "next/head";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Skewed from "@/components/skewed";

export default function Home() {
  return (
    <>
      <Head>
        <title>Miguel Franken</title>
      </Head>

      <Hero />
      <Skewed />
      <Footer />
    </>
  );
}

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

      <div className="z-50">
        <Hero />
      </div>

      <div className="z-10 -mt-16 lg:mt-12">
        <Skewed />
      </div>
      <Footer />
    </>
  );
}

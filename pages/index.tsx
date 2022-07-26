import Head from "next/head";
import Layout from "@/components/layout";
import Card from "@/components/card";
import Button from "@/components/button/button";
import Input from "@/components/input/input";

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome Title</title>
      </Head>

      <Layout>
        <Button onClick={() => console.log("clicked")} text="Click Me" />
        <Input className="my-4" />
        <div className="flex w-full gap-2">
          <div className="flex-1">
            <Card>
              <div>Test</div>
            </Card>
          </div>
          <div className="flex-1">
            <Card>
              <div>Test</div>
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
}

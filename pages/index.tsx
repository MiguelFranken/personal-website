import Head from "next/head";
import Layout from "@/components/layout";
import Card from "@/components/card/card";
import Input from "@/components/input/input";
import { useContext } from "react";
import { ArticlesContext } from "@/pages/store";

export default function Home() {
  const { dispatch } = useContext(ArticlesContext);

  const addArticle = () => {
    dispatch({
      type: "ADD_ARTICLE",
      payload: {
        title: "Title 3",
        body: "Body 3",
        datetime: "2020-01-29",
        date: "Jan 29, 2020",
      },
    });
  };

  return (
    <>
      <Head>
        <title>Awesome Title</title>
      </Head>

      <Layout>
        <Card title="Add Article" actionTitle="Save" onClick={addArticle}>
          <div className="flex flex-col gap-4">
            <Input label="Title" placeholder="Insert Title..." />
            <Input label="Comment" placeholder="Insert Comment..." />
          </div>
        </Card>
      </Layout>
    </>
  );
}

import Head from "next/head";
import Layout from "@/components/layout";
import Card from "@/components/card/card";
import Input from "@/components/input/input";
import { useContext, useState } from "react";
import { ArticlesContext } from "@/pages/store";

export default function Home() {
  const { dispatch } = useContext(ArticlesContext);
  const [titleState, setTitle] = useState("");
  const [bodyState, setBody] = useState("");

  const resetForm = () => {
    setTitle("");
    setBody("");
  };

  const addArticle = () => {
    dispatch({
      type: "ADD_ARTICLE",
      payload: {
        title: titleState,
        body: bodyState,
        datetime: "2020-01-29",
        date: "Jan 29, 2020",
      },
    });
    resetForm();
  };

  return (
    <>
      <Head>
        <title>Awesome Title</title>
      </Head>

      <Layout>
        <Card title="Add Article" actionTitle="Save" onClick={addArticle}>
          <div className="flex flex-col gap-4">
            <Input
              label="Title"
              placeholder="Insert Title..."
              value={titleState}
              onChange={(event) => setTitle(event.target.value)}
            />
            <Input
              label="Body"
              placeholder="Insert Article Body..."
              value={bodyState}
              onChange={(event) => setBody(event.target.value)}
            />
          </div>
        </Card>
      </Layout>
    </>
  );
}

import Head from "next/head";
import Card from "@/components/card/card";
import Input from "@/components/input/input";
import React, { useContext, useState } from "react";
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

      <div className="py-8">
        <div className="bg-white overflow-hidden shadow rounded-lg relative">
          <div className="text-gray-200">
            <svg
              aria-hidden="true"
              className="h-full w-full absolute border-amber-200"
            >
              <defs>
                <pattern
                  id=":R196:"
                  width="128"
                  height="128"
                  patternUnits="userSpaceOnUse"
                  x="100%"
                  y="100%"
                  patternTransform="translate(112 64)"
                >
                  <path
                    d="M0 128V.5H128"
                    fill="none"
                    stroke="currentColor"
                  ></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#:R196:)"></rect>
            </svg>
          </div>
          <div className="px-4 py-5 sm:p-6">Content</div>
        </div>
      </div>
    </>
  );
}

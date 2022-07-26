import Head from "next/head";
import Layout from "@/components/layout";
import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./list-item";
import { GetStaticProps } from "next";
import Dropdown from "@/components/dropdown";

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Awesome Title</title>
      </Head>

      <Layout>
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {allPostsData.map((post) => (
              <ListItem key={post.id} post={post} />
            ))}
          </div>
        </div>

        <Dropdown />
      </Layout>
    </>
  );
}

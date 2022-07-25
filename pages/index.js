import Head from "next/head";
import Layout from "@/components/layout";
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Awesome Title</title>
      </Head>

      <Layout>
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {allPostsData.map(({id, date, title}) => (
              <div key={title}>
                <a href="#" className="block mt-4">
                  <p className="text-xl font-semibold text-gray-900">{title}</p>
                  <p className="mt-3 text-base text-gray-500">{id}</p>
                </a>
              </div>
            ))}
          </div>
        </div>

      </Layout>
    </>
  )
}

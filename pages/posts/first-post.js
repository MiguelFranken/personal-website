import Link from "next/link";
import ProfileImage from "./profile-image";
import Head from "next/head";
import Layout from "@/components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Back to home</a>
        </Link>
      </h2>
      <ProfileImage />
      <div>
        <p>Hello World</p>

        <style jsx>{`
          p {
            color: red;
          }
        `}</style>
      </div>
    </Layout>
  )
}

import Layout from "@/components/layout";
import { useContext } from "react";
import { ArticlesContext } from "../../lib/store";

export default function Posts() {
  const { state } = useContext(ArticlesContext);

  return (
    <Layout>
      <div className="py-8 relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {state.articles.map((post) => (
            <div key={post.title}>
              <p className="text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">{post.body}</p>
              </a>
              <div className="mt-3">
                <a
                  href="#"
                  className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Read full story
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

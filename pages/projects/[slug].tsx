import fs from "fs";
import matter from "gray-matter";
import ArticleLayout from "@/components/article-layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { GetStaticProps } from "next";

interface ProjectPageProps {
  mdxSource: MDXRemoteSerializeResult;
  data: any;
}

export async function getStaticPaths() {
  const files = fs.readdirSync("articles");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
}> = async ({ params: { slug } }) => {
  const fileName = fs.readFileSync(`articles/${slug}.md`, "utf-8");
  const { data, content } = matter(fileName);
  const mdxSource = await serialize(content);

  return {
    props: {
      data,
      mdxSource,
    },
  };
};

const components = {};

export default function ProjectPage({ mdxSource, data }: ProjectPageProps) {
  return (
    <ArticleLayout
      title={data.title}
      description={data.description}
      image={data.image}
      demo={!!data.demo}
    >
      <MDXRemote {...mdxSource} components={components} />
    </ArticleLayout>
  );
}

import fs from "fs";
import ArticleLayout from "@/components/article-layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { GetStaticProps } from "next";
import Video from "@/components/video";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface ProjectPageProps {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: Record<string, string>;
}

export async function getStaticPaths() {
  const files = fs.readdirSync("articles");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
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
  const content = fs.readFileSync(`articles/${slug}.mdx`, "utf-8");
  const mdxSource = await serialize(content, { parseFrontmatter: true });
  const frontmatter = mdxSource.frontmatter;

  return {
    props: {
      frontmatter,
      mdxSource,
    },
  };
};

const highlighter = (code) => (
  <SyntaxHighlighter language="typescript" style={atomOneLight}>
    {code}
  </SyntaxHighlighter>
);

const components = {
  Video,
  pre: (props) => {
    const code = props.children.props.children;
    return highlighter(code);
  },
};

export default function ProjectPage({
  mdxSource,
  frontmatter,
}: ProjectPageProps) {
  return (
    <ArticleLayout
      title={frontmatter.title}
      description={frontmatter.description}
      image={frontmatter.image}
      demo={frontmatter.demo}
      github={frontmatter.github}
    >
      <MDXRemote {...mdxSource} components={components} />
    </ArticleLayout>
  );
}

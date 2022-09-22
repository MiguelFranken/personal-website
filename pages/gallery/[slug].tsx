import fs from "fs";
import ArticleLayout from "@/components/article/article-layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { GetStaticProps } from "next";
import Video from "@/components/video";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import rehypeSlug from "rehype-slug";
import rehypeExtractHeadings, { Heading } from "@/lib/rehype-extract-headings";

interface ProjectPageProps {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: Record<string, string>;
  headings: Heading[];
}

export async function getStaticPaths() {
  const files = fs.readdirSync("gallery");

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
  const headings = [];

  const content = fs.readFileSync(`gallery/${slug}.mdx`, "utf-8");
  const mdxSource = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeSlug, [rehypeExtractHeadings, { headings }]],
    },
  });
  const frontmatter = mdxSource.frontmatter;

  return {
    props: {
      frontmatter,
      mdxSource,
      headings,
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
  headings,
}: ProjectPageProps) {
  return (
    <ArticleLayout
      title={frontmatter.title}
      description={frontmatter.description}
      image={frontmatter.image}
      video={frontmatter.video}
      demo={frontmatter.demo}
      github={frontmatter.github}
      headings={headings}
    >
      <MDXRemote {...mdxSource} components={components} />
    </ArticleLayout>
  );
}

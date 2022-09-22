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

  const paths = files.map((fileName) => {
    const fileNameWithoutExtension = fileName.replace(".mdx", "");

    const slug = fileNameWithoutExtension.split(".");
    const name = slug
      .pop()
      .split(/(?=[A-Z1-9])/)
      .join("-")
      .toLowerCase();
    const path = [...slug, name];
    console.log("getStaticPaths path", path);

    return {
      params: {
        slug: path,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
}> = async ({ params: { slug } }) => {
  const headings = [];

  console.log("getStaticProps", slug);

  const path = Array.isArray(slug) ? slug : [slug];
  const name = path
    .pop()
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join("");
  const unslugified = [...path, name].join(".");

  const content = fs.readFileSync(`gallery/${unslugified}.mdx`, "utf-8");
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
      image={`/cc/${frontmatter.image}`}
      video={frontmatter.video}
      demo={frontmatter.demo}
      github={frontmatter.github}
      headings={headings}
    >
      <MDXRemote {...mdxSource} components={components} />
    </ArticleLayout>
  );
}

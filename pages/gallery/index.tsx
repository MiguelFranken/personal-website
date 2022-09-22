import ArticleHead from "@/components/article/article-head";
import GalleryHeader from "@/components/gallery/gallery-header";
import GalleryCards, {
  GalleryCardsProps,
} from "@/components/gallery/gallery-cards";
import Container from "@/components/layout/container";
import { GetStaticProps } from "next";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeExtractHeadings from "@/lib/rehype-extract-headings";
import Footer from "@/components/footer";

export type Props = {
  frontmatters: Record<string, string>[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const headings = [];

  const files = fs.readdirSync("gallery", "utf-8");

  const frontmatters = await Promise.all(
    files.map(async (file) => {
      const content = fs.readFileSync(`gallery/${file}`, "utf-8");
      const mdxSource = await serialize(content, {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [rehypeSlug, [rehypeExtractHeadings, { headings }]],
        },
      });
      return mdxSource.frontmatter;
    })
  );

  return {
    props: {
      frontmatters,
    },
  };
};

export default function Gallery({ frontmatters }: Props) {
  const props: GalleryCardsProps = {
    cards: frontmatters as GalleryCardsProps["cards"],
  } as GalleryCardsProps;

  return (
    <>
      <ArticleHead title="Creative Coding" />

      <div className="min-h-screen bg-white">
        <GalleryHeader />

        <Container className="pt-8">
          <GalleryCards cards={props.cards} />
        </Container>
      </div>

      <div className="pt-48">
        <Footer />
      </div>
    </>
  );
}

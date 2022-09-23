import Container from "@/components/layout/container";
import Footer from "@/components/footer";
import {
  ArticleBodyProps,
  ArticleHeaderProps,
  ArticleHeadProps,
  ProjectArticleProps,
} from "@/components/article/types";
import ArticleHead from "@/components/article/article-head";
import ArticleBody from "@/components/article/article-body";
import ArticleHeader from "@/components/article/article-header";

export default function GalleryLayout({
  title,
  description,
  image,
  video,
  children,
  demo,
  github,
  headings,
}: ProjectArticleProps) {
  const heroProps: ArticleHeaderProps = {
    demo,
    github,
    image,
    video,
    title,
    description,
  };

  const bodyProps: ArticleBodyProps = {
    headings,
    children,
  };

  const headProps: ArticleHeadProps = {
    title,
  };

  return (
    <>
      <ArticleHead {...headProps} />

      <div className="min-h-screen bg-white pb-64">
        <ArticleHeader {...heroProps} />
      </div>

      <Footer />
    </>
  );
}

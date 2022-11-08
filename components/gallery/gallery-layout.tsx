import Footer from "@/components/footer";
import {
  ArticleHeaderProps,
  ArticleHeadProps,
  ProjectArticleProps,
} from "@/components/article/types";
import ArticleHead from "@/components/article/article-head";
import ArticleHeader from "@/components/article/article-header";

export default function GalleryLayout({
  title,
  description,
  image,
  video,
  demo,
  github,
}: ProjectArticleProps) {
  const heroProps: ArticleHeaderProps = {
    demo,
    github,
    image,
    video,
    title,
    description,
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

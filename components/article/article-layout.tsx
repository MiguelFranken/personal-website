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

export default function ArticleLayout({
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

      <ArticleHeader {...heroProps} />

      {headings.length > 0 && (
        <div className="bg-white">
          <Container className="pt-16 pb-32 space-y-32">
            <ArticleBody {...bodyProps} />
          </Container>
        </div>
      )}

      <Footer />
    </>
  );
}

import Container from "@/components/layout/container";
import Footer from "@/components/footer";
import ArticleHero from "@/components/article/article-hero";
import {
  ArticleBodyProps,
  ArticleHeroProps,
  ProjectArticleProps,
} from "@/components/article/types";
import ArticleHead from "@/components/article/article-head";
import ArticleBody from "@/components/article/article-body";
import ArticleHeader from "@/components/article/article-header";

export default function ArticleLayout({
  title,
  description,
  image,
  children,
  demo,
  github,
  headings,
}: ProjectArticleProps) {
  const heroProps: ArticleHeroProps = {
    demo,
    github,
    image,
    title,
    description,
  };

  const bodyProps: ArticleBodyProps = {
    headings,
    children,
  };

  return (
    <>
      <ArticleHead />

      <ArticleHeader {...heroProps} />

      <div className="bg-white">
        <Container className="pt-16 pb-32 space-y-32">
          <ArticleBody {...bodyProps} />
        </Container>
      </div>

      <Footer />
    </>
  );
}

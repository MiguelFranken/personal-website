import ArticleHead from "@/components/article/article-head";
import GalleryHeader from "@/components/gallery/gallery-header";
import GalleryCards from "@/components/gallery/gallery-cards";
import Container from "@/components/layout/container";

export default function Gallery() {
  return (
    <>
      <ArticleHead title="Creative Coding" />

      <div className="min-h-screen bg-white">
        <GalleryHeader />

        <Container className="pt-8">
          <GalleryCards />
        </Container>
      </div>
    </>
  );
}

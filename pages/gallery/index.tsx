import ArticleHead from "@/components/article/article-head";
import GalleryHeader from "./GalleryHeader";

export default function Gallery() {
  return (
    <>
      <ArticleHead title="Creative Coding" />

      <div className="min-h-screen bg-white">
        <GalleryHeader />
        <div>BELOW THAT</div>
      </div>
    </>
  );
}

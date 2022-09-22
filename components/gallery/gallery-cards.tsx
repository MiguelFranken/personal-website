import GalleryCard from "@/components/gallery/gallery-card";

const studies = [
  {
    title: "Triangle Study 1",
    href: "/gallery/study1",
  },
];

export default function GalleryCards() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8">
        {studies.map((study) => (
          <GalleryCard {...study} key={study.title} />
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";

export type GalleryCardProps = {
  href: string;
  title: string;
};

export default function GalleryCard({ href, title }: GalleryCardProps) {
  return (
    <Link href={href}>
      <a className="block space-y-1 transition transform hover:scale-[102%]">
        <img
          alt="Lava"
          src="/triangulation.TriangulationStudy4-2022-09-22-15.42.00-e4624a1.png"
          className="object-cover w-full h-56 border-2 border-current"
        />

        <h5 className="text-xl font-bold text-gray-900">{title}</h5>
      </a>
    </Link>
  );
}

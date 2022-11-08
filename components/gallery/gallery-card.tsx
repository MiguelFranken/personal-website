import Link from "next/link";

export type GalleryCardProps = {
  href: string;
  title: string;
  image: string;
};

export default function GalleryCard({ href, title, image }: GalleryCardProps) {
  return (
    <Link href={href}>
      <div className="relative">
        <a className="cursor-pointer block space-y-1 group">
          <img
            alt="Lava"
            src={`/cc/${image}`}
            className="object-cover w-full h-56 border-2 border-current transition transform group-hover:scale-[102%]"
          />

          <h5 className="inline-block text-xl font-bold text-gray-900">
            {title}
          </h5>
        </a>

        <div className="absolute right-0 bottom-0 pb-1 z-50">
          <a
            href="https://openrndr.org/"
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 bg-gray-900 hover:bg-amber-300 tracking-normal text-white text-sm font-light px-1.5 py-0.5 rounded"
          >
            OpenRNDR
          </a>
        </div>
      </div>
    </Link>
  );
}

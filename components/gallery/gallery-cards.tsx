export default function GalleryCards() {
  const cell = (
    <a
      href="#"
      className="block space-y-2 transition transform hover:scale-105"
    >
      <img
        alt="Lava"
        src="/triangulation.TriangulationStudy4-2022-09-22-15.42.00-e4624a1.png"
        className="object-cover w-full h-56 border-2 border-current"
      />

      <h5 className="text-xl font-bold text-gray-900">Triangulation Study 1</h5>
    </a>
  );

  return (
    <div>
      <div className="grid grid-cols-3 gap-8">
        {cell}
        {cell}
        {cell}
        {cell}
        {cell}
        {cell}
      </div>
    </div>
  );
}

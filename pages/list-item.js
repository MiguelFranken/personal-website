export default function ListItem(props) {
  const { id, title } = props.post;
  return (
    <a href="#" className="block mt-4">
      <p className="text-xl font-semibold text-gray-900">{title}</p>
      <p className="mt-3 text-base text-gray-500">{id}</p>
    </a>
  );
}

export default function Container(props) {
  return (
    <div className="border-l-20 border-t-20 border-gray-900 min-h-screen">
      {props.children}
    </div>
  );
}
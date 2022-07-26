import React from "react";

interface CardProps {
  /** Description of prop "label".
   * @default foobar
   * */
  children?: React.ReactNode;
}

export default function Card(props: CardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">{props.children}</div>
    </div>
  );
}

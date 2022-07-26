import React, { MouseEventHandler } from "react";
import CardHeader from "@/components/card/card-header";

interface CardProps {
  title?: string;
  actionTitle?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export default function Card(props: CardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <CardHeader
        title={props.title}
        actionTitle={props.actionTitle}
        onClick={props.onClick}
      />
      <div className="px-4 py-5 sm:p-6">{props.children}</div>
    </div>
  );
}

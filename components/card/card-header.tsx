import React, { FC, MouseEventHandler } from "react";
import Button from "@/components/button/button";

type CardHeaderProps = {
  title?: string;
  actionTitle?: string;
  onClick?: MouseEventHandler;
};

const CardHeader: FC<CardHeaderProps> = (props) => {
  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {props.title}
          </h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <Button onClick={props.onClick} text={props.actionTitle} />
        </div>
      </div>
    </div>
  );
};

export default CardHeader;

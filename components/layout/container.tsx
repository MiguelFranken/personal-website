import { ReactElement } from "react";
import classNames from "classnames";

type ContainerProps = {
  children?: ReactElement | ReactElement[];
  className?: string;
};

export default function Container({
  children,
  className: passedClassName,
}: ContainerProps) {
  const className =
    "mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl px-8 sm:px-16 lg:px-8 2xl:px-0";
  return (
    <div className={classNames(className, passedClassName)}>{children}</div>
  );
}

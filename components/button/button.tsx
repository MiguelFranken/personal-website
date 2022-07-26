import { FC, MouseEventHandler } from "react";
import cn from "classnames";
import styles from "./button.module.css";
import classNames from "classnames";

export interface ButtonProps {
  text?: string;
  size?: "small" | "medium" | "large";
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  size,
  text,
  onClick,
  className: passedClassName,
  ...props
}) => {
  const btnClass = cn({
    [styles.buttonSm]: size === "small",
    [styles.buttonMd]: size === "medium" || !size,
    [styles.buttonLg]: size === "large",
  });

  const className = classNames(btnClass, passedClassName);

  return (
    <button type="button" onClick={onClick} className={className} {...props}>
      {text}
    </button>
  );
};

export default Button;

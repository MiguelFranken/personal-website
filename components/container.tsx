import styles from "@/styles/container.module.css";
import classNames from "classnames";

export default function Container(props) {
  return (
    <div
      className={classNames(
        "bg-clip-border border-l-20 border-t-20 border-gray-900 min-h-screen",
        styles.bg
      )}
    >
      {props.children}
    </div>
  );
}

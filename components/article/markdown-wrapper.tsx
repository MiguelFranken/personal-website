import styles from "@/styles/markdown-wrapper.module.css";
import { MarkdownWrapperProps } from "@/components/article/types";
import classNames from "classnames";

export default function MarkdownWrapper({ children }: MarkdownWrapperProps) {
  return (
    <div
      className={classNames(
        "prose prose-yellow prose-lg text-gray-500",
        styles.wrapper,
        styles.h1,
        styles.a,
        styles.headings
      )}
    >
      {children}
    </div>
  );
}

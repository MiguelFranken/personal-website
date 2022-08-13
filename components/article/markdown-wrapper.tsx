import styles from "@/styles/markdown-wrapper.module.css";
import { MarkdownWrapperProps } from "@/components/article/types";

export default function MarkdownWrapper({ children }: MarkdownWrapperProps) {
  return <div className={styles.wrapper}>{children}</div>;
}

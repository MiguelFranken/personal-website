import { Heading } from "@/lib/rehype-extract-headings";
import { ReactElement } from "react";

export type ArticleHeroProps = {
  title: string;
  description: string;
  image?: string;
  video?: string;
  demo?: string;
  github?: string;
};

export type ArticleBodyProps = {
  headings: Heading[];
  children?: ReactElement | ReactElement[];
};

export type ProjectArticleProps = {
  title: string;
  description: string;
  image?: string;
  video?: string;
  demo?: string;
  github?: string;
  headings: Heading[];
  children?: ReactElement;
};

export type MarkdownWrapperProps = {
  children?: ReactElement | ReactElement[];
};

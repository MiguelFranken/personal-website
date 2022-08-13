import TableOfContents from "@/components/article/table-of-contents";
import MarkdownWrapper from "@/components/article/markdown-wrapper";
import { ArticleBodyProps } from "@/components/article/types";

export default function ArticleBody({ headings, children }: ArticleBodyProps) {
  // TODO
  /*
  const AbsolutePattern = () => (
    <div className="pointer-events-none hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div
        className="relative h-full text-lg max-w-prose mx-auto"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-1/2 left-full transform translate-x-32"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x={0}
              y={0}
              width={24}
              height={24}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={8}
                height={8}
                className="text-yellow-400/50"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={384}
            fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
          />
        </svg>
        <svg
          className="absolute bottom-12 left-full transform translate-x-32"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="d3eb07ae-5182-43e6-857d-35c643af9034"
              x={0}
              y={0}
              width={24}
              height={24}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={8}
                height={8}
                className="text-fuchsia-400/50"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={384}
            fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
          />
        </svg>
      </div>
    </div>
  );
  */

  return (
    <div className="relative overflow-hidden lg:overflow-visible">
      <TableOfContents headings={headings} />
      <MarkdownWrapper>{children}</MarkdownWrapper>
    </div>
  );
}

import styles from "@/styles/table-of-contents.module.css";
import { Heading } from "@/lib/rehype-extract-headings";
import { useEffect, useRef, useState } from "react";

type TableOfContentsProps = {
  headings: Heading[];
};

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const headingElementsRef = useRef({});
  const [activeId, setActiveId] = useState();

  const useIntersectionObserver = (setActiveId) => {
    useEffect(() => {
      const callback = (headings) => {
        headingElementsRef.current = headings.reduce((map, headingElement) => {
          map[headingElement.target.id] = headingElement;
          return map;
        }, headingElementsRef.current);

        const visibleHeadings = [];
        Object.keys(headingElementsRef.current).forEach((key) => {
          const headingElement = headingElementsRef.current[key];
          if (headingElement.isIntersecting)
            visibleHeadings.push(headingElement);
        });

        const getIndexFromId = (id) =>
          headingElements.findIndex((heading) => heading.id === id);

        if (visibleHeadings.length === 1) {
          setActiveId(visibleHeadings[0].target.id);
        } else if (visibleHeadings.length > 1) {
          const sortedVisibleHeadings = visibleHeadings.sort((a, b) =>
            getIndexFromId(a.target.id) > getIndexFromId(b.target.id) ? 1 : -1
          );
          setActiveId(sortedVisibleHeadings[0].target.id);
        }
      };

      const observer = new IntersectionObserver(callback, {
        rootMargin: "0px 0px -40% 0px",
      });

      const headingElements = Array.from(document.querySelectorAll("h1, h2"));
      headingElements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    });
  };

  useIntersectionObserver(setActiveId);

  const Headings = ({ headings }) => (
    <ul>
      {headings.map((heading) => (
        <li
          key={heading.id}
          className={heading.id === activeId ? styles.active : ""}
        >
          <a
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`).scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li
                  key={child.id}
                  className={child.id === activeId ? styles.active : ""}
                >
                  <a
                    href={`#${child.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${child.id}`).scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="sticky top-0 inset-y-0 w-full h-full relative bg-green-500/25">
      <div className="absolute top-0 right-0 py-16">
        <h4 className="pl-2.5 mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs">
          Table of contents
        </h4>
        <nav className={styles.toc}>
          <Headings headings={headings} />
        </nav>
      </div>
    </div>
  );
}

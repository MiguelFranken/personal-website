import { hasProperty } from "hast-util-has-property";
import { headingRank } from "hast-util-heading-rank";
import { toString } from "hast-util-to-string";
import { visit } from "unist-util-visit";
import { Root } from "hast";

export type Heading = {
  title: string;
  id: string;
  rank: number;
  items: Heading[];
};

export type ExtractHeadingsConfig = {
  rank: number;
  headings: Heading[];
};

/**
 * Extracts headings from a unified tree.
 * To be used after the `rehype-slug` plugin.
 */
export default function rehypeExtractHeadings({
  headings,
}: ExtractHeadingsConfig) {
  return (tree: Root) => {
    visit(tree, "element", (node) => {
      const rank = headingRank(node);
      if (rank && node.properties && hasProperty(node, "id")) {
        const heading = {
          title: toString(node),
          id: node.properties.id.toString(),
          rank,
          items: [],
        };
        if (rank === 1) {
          headings.push(heading);
        } else if (rank === 2) {
          headings[headings.length - 1].items.push(heading);
        }
      }
    });
  };
}

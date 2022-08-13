import { ReactElement } from "react";
import {
  AngularLogo,
  FigmaLogo,
  LaravelLogo,
  NestJSLogo,
  NetlifyLogo,
  NextJSLogo,
  NotionLogo,
  NuxtLogo,
  ReactLogo,
  StrapiLogo,
  VercelLogo,
  VueLogo,
} from "@/components/logos";
import Container from "@/components/layout/container";

type Technology = {
  name: string;
  icon: ReactElement;
};

type TechnologyCategory = {
  title: string;
  technologies: Technology[];
};

const technologies: TechnologyCategory[] = [
  {
    title: "Single-Page Application Frameworks",
    technologies: [
      {
        name: "React",
        icon: <ReactLogo />,
      },
      {
        name: "Angular",
        icon: <AngularLogo />,
      },
      {
        name: "Vue",
        icon: <VueLogo />,
      },
    ],
  },
  {
    title: "Frameworks using hydration",
    technologies: [
      {
        name: "Next.js",
        icon: <NextJSLogo />,
      },
      {
        name: "NuxtJS",
        icon: <NuxtLogo />,
      },
    ],
  },
  {
    title: "Backend Frameworks",
    technologies: [
      {
        name: "Laravel",
        icon: <LaravelLogo />,
      },
      {
        name: "NestJS",
        icon: <NestJSLogo />,
      },
    ],
  },
  {
    title: "Deployment Platforms",
    technologies: [
      {
        name: "Vercel",
        icon: <VercelLogo />,
      },
      {
        name: "Netlify",
        icon: <NetlifyLogo />,
      },
    ],
  },
  {
    title: "Design & Collaboration",
    technologies: [
      {
        name: "Notion",
        icon: <NotionLogo />,
      },
      {
        name: "Figma",
        icon: <FigmaLogo />,
      },
    ],
  },
  {
    title: "Headless CMS",
    technologies: [
      {
        name: "Strapi",
        icon: <StrapiLogo />,
      },
    ],
  },
];

type GridCellProps = {
  category: TechnologyCategory;
};

export default function Technologies() {
  const GridCell = ({ category }: GridCellProps) => (
    <div className="flex flex-col sm:items-start lg:items-center gap-4 lg:gap-6">
      <div className="font-medium text-md uppercase text-white bg-gray-900 px-4 py-2">
        {category.title}
      </div>
      <div className="flex gap-16">
        {category.technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col gap-2 items-center"
          >
            {technology.icon}
            <div className="font-light text-md">{technology.name}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Container className="space-y-20 text-gray-900">
      <div className="flex flex-col gap-5 lg:items-center">
        <h1 className="inline-block tracking-wider font-extrabold text-gray-900 text-5xl sm:text-6xl">
          <img src="/tools.svg" className="h-24 w-auto" />
        </h1>
        <h2 className="inline-block text-2xl sm:text-xl font-light text-gray-500 max-w-2xl">
          A developer&apos;s toolbox is a key ingredient in the quality he
          delivers. I try to stay up-to-date with the latest tools, frameworks &
          libraries and work with a range of them on a daily basis.
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-16 lg:justify-center lg:px-16">
        {technologies.map((category) => (
          <GridCell category={category} key={category.title} />
        ))}
      </div>
    </Container>
  );
}

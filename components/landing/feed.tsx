import SkewedSection from "@/components/layout/skewed-section";
import Container from "@/components/layout/container";

import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

type Milestone = {
  role: string;
  company: string;
  begin: string;
  end: string;
  description?: string;
  location: string;
  latest: boolean;
  job: boolean;
};

const milestones: Milestone[] = [
  {
    role: "Full-Stack Software Engineer",
    company: "NAIX GmbH",
    begin: "April 2020",
    end: "Mar 2022",
    description:
      "I worked as full-stack software developer at NAIX GmbH, a Cologne-based startup developing an anonymization tool that automatically redacts personally identifiable information (PII) of a variety of data types. Anonymization leads to GDPR-compliant data. In Germany’s largest GDPR case so far, NAIX has prevented a global fashion retailer to be penalized for an extra, nine-digit fine for mishandling employee PII. I was particularly involved in API development with Laravel and Vue frontend development.",
    location: "Cologne, Germany",
    latest: true,
    job: true,
  },
  {
    role: "Research Assistant",
    company: "RWTH Aachen University",
    begin: "Oct 2018",
    end: "Feb 2020",
    description:
      "I worked as research assistant closely with PhD students on a research project of RWTH Aachen University realized by the Controlling Group and Software Engineering Group. We built a software generator that generates the complete application infrastructure, the application’s backend, and frontend of a sophisticated multi-user web-application by giving it models as input written in domain-specific languages. By software generation, a lot of otherwise handwritten application code can be automatically generated. Think of OpenAPI/Swagger but way more powerful.",
    location: "Aachen, Germany",
    latest: false,
    job: true,
  },
  {
    role: "Lecture Assistant",
    company: "RWTH Aachen University",
    begin: "April 2018",
    end: "Sep 2018",
    description:
      'I assisted in the lecture "Databases and Information Systems" and was involved in the creation of the exercises and the correction of some of the submitted solved tasks of the students.',
    location: "Aachen, Germany",
    latest: false,
    job: true,
  },
  {
    role: "Erasmus Semester Abroad",
    company: "Universitat Politecnica De Valencia",
    begin: "Aug 2017",
    end: "Mar 2018",
    location: "Valencia, Spain",
    latest: false,
    job: false,
  },
  {
    role: "B.Sc. Computer Science",
    company: "RWTH Aachen University",
    begin: "Oct 2015",
    end: "Feb 2020",
    location: "Aachen, Germany",
    latest: false,
    job: false,
  },
];

export default function Feed() {
  const Timeline = ({ milestone }) => (
    <li className="ml-12">
      <span className="flex absolute -left-6 justify-center items-center w-12 h-12 bg-blue-200 rounded-full ring-4 ring-white">
        {milestone.job ? (
          <BriefcaseIcon className="w-8 h-8 text-blue-500 fill-current" />
        ) : (
          <AcademicCapIcon className="w-8 h-8 text-blue-500 fill-current" />
        )}
      </span>
      <h3 className="flex items-center text-md uppercase font-medium text-sky-200/90">
        <span className="mix-blend-hard-light">{milestone.role}</span>
        {milestone.latest && (
          <span className="bg-blue-100/25 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
            Latest
          </span>
        )}
      </h3>
      <h2 className="flex items-center mb-4 text-xl font-semibold text-white">
        {milestone.company}
      </h2>
      {milestone.description && (
        <p className="mb-4 text-base font-normal text-white">
          {milestone.description}
        </p>
      )}
      <div className="space-y-4 sm:flex sm:space-y-0 mb-4 text-sm font-light leading-none text-sky-200/90 gap-4 mix-blend-hard-light">
        <div className="flex items-center gap-1.5">
          <CalendarIcon className="w-4 h-4 fill-current" />
          <span>
            {milestone.begin}&#8211;{milestone.end}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <LocationMarkerIcon className="w-4 h-4 fill-current" />
          <span>{milestone.location}</span>
        </div>
      </div>
    </li>
  );

  return (
    <SkewedSection bg="bg-conic-to-l from-sky-200 via-blue-500 to-blue-700">
      <Container className="pt-16 pb-12 lg:pt-24 lg:pb-16 relative divide-y-2 divide-blue-100/10">
        <div>
          <h2>
            <span className="tracking-wider font-extrabold text-white text-5xl sm:text-6xl">
              My Journey
            </span>
          </h2>
        </div>
        <div className="mt-12 pt-12">
          <ol className="relative border-l border-gray-200 ml-6 space-y-10">
            {milestones.map((milestone) => (
              <Timeline milestone={milestone} key={milestone.begin}></Timeline>
            ))}
          </ol>
        </div>
      </Container>
    </SkewedSection>
  );
}

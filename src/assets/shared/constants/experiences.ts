import { european_union, fortytwo, selftaught } from "../images";

export type Experience = {
  title: string;
  companyName: string;
  period: string;
  description: string;
  icon?: string;
  features: string[];
  languages: string[];
};

type Experiences = {
  [K: string]: Experience;
};

const experiences: Experiences = {
  SJeuropeanCommission: {
    title: "Full stack developper",
    period: "Sep 2023 - August 2023",
    companyName: "European Comission",
    icon: european_union,
    description: `IT consultant at the European Commission Legal Service.

Provided essential support in maintaining and enhancing SJ web applications, reducing workload by 25% and enabling the department to efficiently manage thousands of documents.`,
    features: [
      "Angular & Symfony applications maintenance",
      "Testing & quality frameworks implementation",
      "AI & EU API powered features",
    ],
    languages: ["Angular", "Symfony (PHP)", "Oracle"],
  },
  selfLearningJourney: {
    title: "Self learning journey",
    period: "Sep 2022 - August 2023",
    companyName: "Self taught",
    icon: selftaught,
    description: `I built a full-stack web application from scratch with React, NestJS, and PostgreSQL, including a custom UI library, admin panel, authentication, and CI/CD deployment—gaining hands-on expertise across the full modern web stack.`,
    features: [
      "Custom UI library",
      "Custom admin panel",
      "Authentication",
      "CI/CD",
    ],
    languages: [
      "React",
      "NestJS",
      "Docker",
      "Lerna",
      "Postgres",
      "Webpack",
      "Nginx",
    ],
  },
  school19: {
    title: "Software developer",
    companyName: "School 19",
    period: "July 2021 - Sep 2022",
    icon: fortytwo,
    description: `I trained at School 19 (42 Network), a project-driven, peer-to-peer program that builds developers through autonomy, collaboration, and problem-solving. 

I developed strong skills in algorithms, low-level programming, and full-stack web and graphic projects.`,
    features: ["Algorithms", "Full-Stack website", "2D graphics"],
    languages: ["C", "C++", "React", "NestJS"],
  },
};

export const experiencesArray = Object.entries(experiences).map(
  ([id, experience]) => ({ id, ...experience }),
);

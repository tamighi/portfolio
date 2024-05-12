import {
  reactLogo,
  nestjsLogo,
  typescriptLogo,
  cPlusPlusLogo,
  cLogo,
  webpackLogo,
  gitLogo,
  dockerLogo,
} from "@/assets";

export const skills = [
  {
    branch: "Web development",
    skills: [
      {
        logo: reactLogo,
        name: "React",
      },
      {
        logo: nestjsLogo,
        name: "NestJS",
      },
      {
        logo: typescriptLogo,
        name: "Typescript",
      },
    ],
  },
  {
    branch: "Software development",
    skills: [
      {
        logo: cPlusPlusLogo,
        name: "C++",
      },
      {
        logo: cLogo,
        name: "C",
      },
    ],
  },
  {
    branch: "Others",
    skills: [
      {
        logo: webpackLogo,
        name: "Webpack",
      },
      {
        logo: gitLogo,
        name: "Git",
      },
      {
        logo: dockerLogo,
        name: "Docker",
      },
    ],
  },
] as const;

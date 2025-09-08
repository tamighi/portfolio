import {
  typescript,
  css,
  reactjs,
  nodejs,
  git,
  docker,
  cpp,
  c,
  webpack,
  angular,
  figma,
  php,
  sql,
  tailwind,
  threejs,
} from "../images";

export const skills = [
  {
    branch: "Web",
    technologies: [
      {
        logo: angular,
        name: "Angular",
      },
      {
        logo: php,
        name: "PHP",
      },
      {
        logo: sql,
        name: "SQL",
      },
      {
        logo: tailwind,
        name: "TailwindCSS",
      },
      {
        logo: threejs,
        name: "ThreeJS",
      },
      {
        logo: reactjs,
        name: "React",
      },
      {
        logo: nodejs,
        name: "NodeJS",
      },
      {
        logo: typescript,
        name: "Typescript",
      },
      {
        logo: css,
        name: "CSS3",
      },
    ],
  },
  {
    branch: "Software",
    technologies: [
      {
        logo: cpp,
        name: "C++",
      },
      {
        logo: c,
        name: "C",
      },
    ],
  },
  {
    branch: "Others",
    technologies: [
      {
        logo: figma,
        name: "Figma",
      },
      {
        logo: git,
        name: "Git",
      },
      {
        logo: docker,
        name: "Docker",
      },
      {
        logo: webpack,
        name: "Webpack",
      },
    ],
  },
] as const;

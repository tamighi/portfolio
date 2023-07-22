import {
  correctionWebsite,
  threejsPortfolio,
  cub3d,
  reactLogo,
  nestjsLogo,
  typescriptLogo,
  cPlusPlusLogo,
  cLogo,
  webpackLogo,
  gitLogo,
  dockerLogo,
} from "assets";

type Work = {
  name: string,
  description: string,
  demoLink?: string,
  githubLink?: string,
  imageSrc: string
}

const works: Work[] = [
  {
    name: "CorrectionServices",
    description:
      "This full stack website is built using React and NestJS. It is compiled with Webpack, containerized with Docker and optimized with nginx.\n\n" +
      "The backend implements authentication, a PostgreSQL database, aswell as a file service and the frontend includes a custom UI library and utilizes React Query for efficient data handling with optimistic and undoable updates.",
    githubLink: "https://github.com/tamighi/correction-service-website",
    demoLink: "https://tamighi.github.io/correction-demo",
    imageSrc: correctionWebsite,
  },
  {
    name: "ThreejsPortfolio",
    description:
      "This frontend website portfolio is built using React, Three.js, Framer Motion, and Tailwind CSS.\n\n" +
      "This project is based on a YouTube tutorial and has been further improved. With the integration of Three.js, I've incorporated stunning 3D designs and animations that bring the content of this website to life. The combination of React's powerful components, Framer Motion's smooth transitions, and Tailwind CSS's flexible styling allows for an engaging and visually appealing user experience.",
    githubLink: "https://github.com/tamighi/threejs-portfolio",
    demoLink: "https://tamighi.github.io/threejs-portfolio",
    imageSrc: threejsPortfolio,
  },
  {
    name: "cub3d",
    description:
      "This project is based on the FPS game Wolfenstein3D and utilizes a rendering technique called RayCasting.\n\n" +
      "It is written entirely in C and uses a simple rendering engine called MiniLibX. The project includes features such as rendering, simple enemy AI, a game loop, and game state handling.",
    githubLink: "https://github.com/Lysique/cub3d",
    imageSrc: cub3d,
  },
];

const skills = [
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
];

export { works, skills };

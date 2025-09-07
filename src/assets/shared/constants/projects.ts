import {
  correctionWebsite,
  threejsPortfolio,
  cub3d,
  todocal,
} from "../images/projects";

type Media = {
  src: string;
};

export type Project = {
  name: string;
  description: string;
  demoLink: string | null;
  githubLink: string;
  medias: Readonly<Media[]>;
  tools: string[];
  features?: string[];
};

type Projects = {
  [K: string]: Project;
};

export const projects = {
  todocal: {
    name: "Todocal",
    description: `Mobile application for managing tasks withing a calendar.

The focus was made on simplicity (minimizing number of clicks) and speed (optimistic updates and efficient queries).`,
    githubLink: "https://github.com/tamighi/todocal",
    demoLink: null,
    medias: [
      {
        src: todocal,
      },
    ],
    tools: ["React Native", "Expo", "SQLite", "React Query"],
    features: ["Drag and drop", "Recurring events"],
  },
  correctionServices: {
    name: "Correction Services",
    description: `A full-stack website built for learning purposes. 

Emphasis was placed on implementing everything from scratch, including CI/CD deployment and custom UI components.`,
    githubLink: "https://github.com/tamighi/correction-service-website",
    demoLink: "https://tamighi.github.io/correction-demo",
    medias: [
      {
        src: correctionWebsite,
      },
    ],
    tools: [
      "React",
      "NestJS",
      "PostgreSQL",
      "React Query",
      "Lerna",
      "Webpack",
      "Docker",
      "Nginx",
    ],
    features: [
      "Custom UI library",
      "Custom admin panel",
      "Authentication",
      "File upload",
    ],
  },
  threejsPortfolio: {
    name: "Threejs Portfolio",
    description: `This frontend website portfolio is built using React, Three.js, Framer Motion, and Tailwind CSS.

This project is based on a YouTube tutorial and has been further improved. It uses ThreeJS to integrate 3D designs and animations, tailwind for styles and Framer motion for animations.`,
    githubLink: "https://github.com/tamighi/threejs-portfolio",
    demoLink: "https://tamighi.github.io/threejs-portfolio",
    medias: [{ src: threejsPortfolio }],
    tools: ["To replace"],
  },
  cub3d: {
    name: "cub3d",
    description: `This project is based on the FPS game Wolfenstein3D and utilizes a rendering technique called RayCasting.

It is written entirely in C and uses a simple rendering engine called MiniLibX. The project includes features such as rendering, simple enemy AI, a game loop, and game state handling.`,
    githubLink: "https://github.com/Lysique/cub3d",
    demoLink: null,
    medias: [{ src: cub3d }],
    tools: ["To replace"],
  },
} satisfies Projects;

export const projectsArray = Object.entries(projects).map(([id, project]) => ({
  id: id as keyof typeof projects,
  ...project,
}));

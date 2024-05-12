type Experiences = {
  [K: string]: {
    title: string;
    period: string;
    description: string;
  };
};

const experiences: Experiences = {
  selfLearningJourney: {
    title: "Self learning journey",
    period: "Sep 2022 - Now",
    description: `I took this time to learn different topics, especially web development.

I built a full-stack website from scratch using NestJS and React. I also created my own UI library and developed core utilities such as complex hooks and a REST API.`,
  },
  school19: {
    title: "School 19",
    period: "July 2021 - Sep 2022",
    description: `Deep dive into software development. The school 19 (42 network) offers an original way of teaching in the form of projects implementation and peer to peer evaluation.`,
  },
  ulb: {
    title: "ULB",
    period: "Sep 2015 - June 2021",
    description: `Master’s degree in neuropsychology. Please see my full resume for more details !`,
  },
};

export const experiencesArray = Object.entries(experiences).map(
  ([id, experience]) => ({ id, ...experience })
);

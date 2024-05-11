import { Paragraph } from "components";
import { EducationSectionHeader } from "./EducationSectionHeader";
import { Link } from "react-router-dom";

import { cvEn } from "assets";

const selfLearningJourneyDescription =
  "I took this time to learn different topics, especially web development.\n\n" +
  "I built a full-stack website from scratch using NestJS and React. I also created my own UI library and developed core utilities such as complex hooks and a REST API.";

const school19Description =
  "Deep dive into software development. The school 19 (42 network) offers an original way of teaching in the form of projects implementation and peer to peer evaluation.";

const ulbDescription =
  "Master’s degree in neuropsychology. Please see my full resume for more details !";

const Education = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col overflow-hidden">
        <EducationSectionHeader
          title="Self learning journey"
          date="Sep 2022 - Now"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Paragraph>{selfLearningJourneyDescription}</Paragraph>
          <Link
            to="/work"
            className="border-2 py-2 px-4 rounded-xl justify-self-center md:justify-self-end self-start hover:text-black hover:bg-white"
          >
            Works
          </Link>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden">
        <EducationSectionHeader title="School 19" date="July 2021 - Sep 2022" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Paragraph>{school19Description}</Paragraph>
          <a
            className="border-2 py-2 px-4 rounded-xl justify-self-center md:justify-self-end self-start hover:text-black hover:bg-white"
            href="https://github.com/Lysique"
            target="_blank"
          >
            School projects
          </a>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden">
        <EducationSectionHeader title="ULB" date="Sep 2015 - June 2021" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Paragraph>{ulbDescription}</Paragraph>
          <a
            className="border-2 py-2 px-4 rounded-xl justify-self-center md:justify-self-end self-start hover:text-black hover:bg-white"
            href={cvEn}
            download="cv.pdf"
          >
            Download full resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;

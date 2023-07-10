import { Paragraph } from "components";
import { EducationSectionHeader } from "./EducationSectionHeader";

import "./Education.css";

const selfLearningJourneyDescription =
  "I took this time to learn different topics, especially web development.\n\n" +
  "I built a full-stack website from scratch using NestJS and React. I also created my own UI library and developed core utilities such as complex hooks and a REST API.";

const school19Description =
  "Deep dive into software development. The school 19 (42 network) offers an original way of teaching in the form of projects implementation and peer to peer evaluation.";

const ulbDescription =
  "Master’s degree in neuropsychology. Please see my full resume for more details !";

// TODO: Links
const Education = () => {
  return (
    <div className="EducationSections">
      <div className="EducationSection">
        <EducationSectionHeader
          title="Self learning journey"
          date="Sep 2022 - Now"
        />
        <div className="EducationSectionContent">
          <Paragraph>{selfLearningJourneyDescription}</Paragraph>
          <span>Links</span>
        </div>
      </div>
      <div className="EducationSection">
        <EducationSectionHeader title="School 19" date="July 2021 - Sep 2022" />
        <div className="EducationSectionContent">
          <Paragraph>{school19Description}</Paragraph>
          <span>Links</span>
        </div>
      </div>
      <div className="EducationSection">
        <EducationSectionHeader title="ULB" date="Sep 2015 - June 2021" />
        <div className="EducationSectionContent">
          <Paragraph>{ulbDescription}</Paragraph>
          <a href="/resume/download" download="">
            Download full resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;

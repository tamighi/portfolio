import { Paragraph } from "components";

import "./Education.css";
import { EducationSectionHeader } from "./EducationSectionHeader";

const selfLearningJourneyDescription =
  "Significant progress in developing my programming skills, particularly in web development.\n" +
  "Deep learning on the best practices around frontend, backend and DevOps through a personal project built from scratch. ";

const school19Description =
  "Deep dive into software development; the school 19 (42 network) offers an original way of teaching in the form of projects implementation and peer to peer evaluation";

const ulbDescription =
  "Master’s degree in neuropsychology. Please see my full resume for more details !";

// TODO: Handle overflow description
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

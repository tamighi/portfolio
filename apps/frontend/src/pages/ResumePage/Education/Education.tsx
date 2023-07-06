import { Paragraph } from "components";
import "./Education.css";

// TODO: Handle overflow description
// TODO: Links
const Education = () => {
  return (
    <>
      <div className="EducationSection">
        <div className="EducationSectionHeader">
          <span className="EducationSectionTitle">Self learning journey</span>
          <span className="EducationSectionDate">Sep 2022 - Now</span>
        </div>
        <div className="EducationSectionContent">
          <Paragraph className="EducationSectionDescription">
            Significant progress in developing my programming skills,
            particularly in web development. Deep learning on the best practices
            around frontend, backend and DevOps through a personal project built
            from scratch.
          </Paragraph>
          <span>Links</span>
        </div>
      </div>
      <div className="EducationSection">
        <div className="EducationSectionHeader">
          <span className="EducationSectionTitle">Shool 19</span>
          <span className="EducationSectionDate">July 2021 - Sep 2022</span>
        </div>
        <div className="EducationSectionContent">
          <Paragraph className="EducationSectionDescription">
            Deep dive into software development; the school 19 (42 network)
            offers an original way of teaching in the form of projects
            implementation and peer to peer evaluation
          </Paragraph>
          <span>Links</span>
        </div>
      </div>
      <div className="EducationSection">
        <div className="EducationSectionHeader">
          <span className="EducationSectionTitle">ULB</span>
          <span className="EducationSectionDate">Sep 2015 - June 2021</span>
        </div>
        <div className="EducationSectionContent">
          <Paragraph className="EducationSectionDescription">
            Master’s degree in neuropsychology; Please see my full resume for
            more details !
          </Paragraph>
          <span>Download full resume</span>
        </div>
      </div>
    </>
  );
};

export default Education;

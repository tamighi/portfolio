import { BackHomeButton, ResponsivePage } from "components";

import { About } from "./About";
import { Education } from "./Education";
import { Skills } from "./Skills";

import "./ResumePage.css";

const ResumePage = () => {
  return (
    <>
      <BackHomeButton />
      <ResponsivePage>
        <div className="ResumeSection">
          <h2 className="ResumeSectionTitle">About</h2>
          <About />
        </div>
        <div className="ResumeSection">
          <h2 className="ResumeSectionTitle">Skills</h2>
          <Skills />
        </div>
        <div className="ResumeSection">
          <h2 className="ResumeSectionTitle">Education</h2>
          <Education />
        </div>
      </ResponsivePage>
    </>
  );
};

export default ResumePage;

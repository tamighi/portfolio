import { BackHomeButton, ContactMeButton, ResponsivePage } from "components";

import { About } from "./About";
import { Education } from "./Education";
import { Skills } from "./Skills";

import "./ResumePage.css";

const ResumePage = () => {
  return (
    <>
      <BackHomeButton />
      <ResponsivePage className="ResumePage">
        <a href="/resume/download" download="" className="DownloadResumeButton">
          Download full resume
        </a>
        <div className="ResumeSection">
          <h2 className="ResumeTitle">About</h2>
          <About />
        </div>
        <div className="ResumeSection">
          <h2 className="ResumeTitle">Skills</h2>
          <Skills />
        </div>
        <div className="ResumeSection">
          <h2 className="ResumeTitle">Education</h2>
          <Education />
        </div>
        <ContactMeButton className="ResumeContactButton" />
      </ResponsivePage>
    </>
  );
};

export default ResumePage;

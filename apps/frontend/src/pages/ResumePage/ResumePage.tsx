import { BackHomeButton, ResponsivePage } from "components";

import { About } from "./About";
import { Education } from "./Education";
import { ResumeContactButton } from "./ResumeContactButton";

import "./ResumePage.css";

const ResumePage = () => {
  return (
    <>
    <BackHomeButton />
      <ResponsivePage className="ResumePage">
        <a href="/resume/download" download="">
          Download full resume
        </a>
        <About />
        <Education />
        <ResumeContactButton />
      </ResponsivePage>
    </>
  );
};

export default ResumePage;

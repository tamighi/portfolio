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
        <About />
        <Skills />
        <Education />
        <ContactMeButton />
      </ResponsivePage>
    </>
  );
};

export default ResumePage;

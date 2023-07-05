import { ResponsivePage } from "components";
import { Link } from "react-router-dom";

import { About } from "./About";
import { Education } from "./Education";
import { ResumeContactButton } from "./ResumeContactButton";

import "./ResumePage.css";

const ResumePage = () => {
  return (
    <>
      <Link className="ResumeBackLink" to="/">
        Go home
      </Link>
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

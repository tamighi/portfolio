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
      <div className="ResumePage">
        <a href="/resume/download" download="">
          Download full resume
        </a>
        <About />
        <Education />
        <ResumeContactButton />
      </div>
    </>
  );
};

export default ResumePage;

import { Link } from "react-router-dom";

import { About } from "./About";
import { Experience } from "./Experience";
import { PersonalInfos } from "./PersonalInfos";
import { Portfolio } from "./Portfolio";

import "./ResumePage.css";

const ResumePage = () => {
  return (
    <>
      <Link className="ResumeBackLink" to="/">
        Go back
      </Link>
      <div className="ResumePage">
        <About />
        <PersonalInfos />
        <Experience />
        <Portfolio />
      </div>
    </>
  );
};

export default ResumePage;

import { Link } from "react-router-dom";

import { About } from "./About";
import { Experience } from "./Experience";
import { PersonalInfos } from "./PersonalInfos";

import "./ResumePage.css";

const ResumePage = () => {
  return (
    <>
      <Link className="ResumeBackLink" to="/">
        Go home
      </Link>
      <div className="ResumePage">
        <About />
        <PersonalInfos />
        <Experience />
      </div>
    </>
  );
};

export default ResumePage;

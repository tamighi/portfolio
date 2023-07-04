import { Link } from "react-router-dom";

import "./ResumePage.css";

const ResumePage = () => {
  return (
    <>
      <Link className="ResumeBackLink" to="/">
        Go back
      </Link>
      <div className="ResumePage">
        <div className="ResumeSection">
          <h2 className="ResumeTitle">About</h2>
          <div className="ResumeContent">
            I'm a curious young developer looking for experiences to start my
            work career. I’ve found a passion in programming after obtaining a
            master’s degree in neuropsychology and quickly managed to acquire
            solid knowledge in computer science thanks to the school 19, which
            proposes an interesting program contrasting with traditional
            teaching. I am now growing my passion through different personal
            projects in different fields, including data analysis, video game
            algorithms and web devel
          </div>
        </div>
        <div className="ResumeSection">
          <h2 className="ResumeTitle">Personal infos</h2>
          <div className="ResumeContent">
            <ul>
              <li>Name: Thomas Amighi</li>
              <li>Email: amighithomas@gmail.com</li>
              <li>Tel: 0032 474071641</li>
            </ul>
          </div>
        </div>
        <div className="ResumeSection">
          <h2 className="ResumeTitle">Experience / Education</h2>
          <h3 className="ResumeSubtitle">Education</h3>
          <div className="ResumeContent">
            <ul>
              <li>
                Personal learning
                <br />
                One year of personal learning
              </li>
              <li>
                School 19 July 2021 – Sep 2022
                <br />
                Deep dive into software development; the school 19 (42 network)
                offers an original way of teaching in the form of projects
                implementation and peer to peer evaluation
              </li>
            </ul>
          </div>
        </div>
        <div className="ResumeSection">
          <h2 className="ResumeTitle">For the eyes</h2>
        </div>
      </div>
      <div className="ResumePage"></div>
    </>
  );
};

export default ResumePage;

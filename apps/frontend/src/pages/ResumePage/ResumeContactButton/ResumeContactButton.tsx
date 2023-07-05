import { Link } from "react-router-dom";

import "./ResumeContactButton.css";

const ResumeContactButton = () => {
  return (
    <Link to="/contact" className="ResumeContactButton">
      Contact me !
    </Link>
  );
};

export default ResumeContactButton;

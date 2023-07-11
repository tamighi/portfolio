import { Link } from "react-router-dom";

import "./BackHomeButton.css";

// TODO: disapear when scrolling
const BackHomeButton = () => {
  return (
    <div className="Header">
      <Link className="BackHomeButton" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="HomeIcon"
        >
          <path d="M12 4L3 10V21H9V14H15V21H21V10L12 4Z" />
        </svg>
        <span>Home</span>
      </Link>
    </div>
  );
};

export default BackHomeButton;

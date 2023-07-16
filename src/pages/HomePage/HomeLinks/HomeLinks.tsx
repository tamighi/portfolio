import { Link } from "react-router-dom";

import "./HomeLinks.css";

const HomeLinks = () => {
  return (
    <nav className="HomeLinks">
      <Link to="work" className="HomeLink">
        Work
      </Link>
      <Link to="resume" className="HomeLink">
        Resume
      </Link>
      <Link to="contact" className="HomeLink">
        Contact
      </Link>
    </nav>
  );
};

export default HomeLinks;

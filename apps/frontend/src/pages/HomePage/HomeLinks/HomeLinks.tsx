import { Link } from "react-router-dom";

import "./HomeLinks.css";

// TODO: Contact click shows email
const HomeLinks = () => {
  return (
    <nav className="HomeLinks">
      <Link to="work" className="HomeLink">
        Work
      </Link>
      <Link to="resume" className="HomeLink">
        Resume
      </Link>
      <div>
        <Link to="contact" className="HomeLink">
          Contact
        </Link>
        <div>Contact me at amighithomas@gmail.com</div>
      </div>
    </nav>
  );
};

export default HomeLinks;

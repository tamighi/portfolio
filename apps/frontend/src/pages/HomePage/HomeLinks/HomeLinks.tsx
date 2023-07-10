import { Link } from "react-router-dom";
import { useShowContact } from "hooks";

import "./HomeLinks.css";

const HomeLinks = () => {
  const { show } = useShowContact();

  return (
    <nav className="HomeLinks">
      <Link to="work" className="HomeLink">
        Work
      </Link>
      <Link to="resume" className="HomeLink">
        Resume
      </Link>
      <a
        onClick={() => {
          show();
        }}
        className="HomeLink"
      >
        Contact
      </a>
    </nav>
  );
};

export default HomeLinks;

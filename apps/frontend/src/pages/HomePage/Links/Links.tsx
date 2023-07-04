import { Link } from "react-router-dom";
import "./Links.css";

const Links = () => {
  return (
    <nav className="HomeLinks">
      <Link to="resume" className="HomeLink">
        Resume
      </Link>
    </nav>
  );
};

export default Links;

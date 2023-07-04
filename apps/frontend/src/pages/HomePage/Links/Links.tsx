import { Link } from "react-router-dom";
import "./Links.css";

const Links = () => {
  return (
    <div className="HomeLinks">
      <Link to="cv" className="HomeLink">CV</Link>
    </div>
  );
};

export default Links;


import { Link } from "react-router-dom";

import "./ContactMeButton.css";

const ContactMeButton = () => {
  return (
    <Link to="/contact" className="ContactMeButton">
      Contact me !
    </Link>
  );
};

export default ContactMeButton;

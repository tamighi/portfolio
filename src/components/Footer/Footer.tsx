import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <a
        target="_blank"
        href="https://github.com/tamighi"
        className="FooterLink"
      >
        Github
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/thomas-amighi-635722196"
        className="FooterLink"
      >
        Linkedin
      </a>
      <Link to="contact" className="FooterLink">
        Contact
      </Link>
    </div>
  );
};

export default Footer;

import { useShowContact } from "hooks";
import "./Footer.css";

const Footer = () => {
  const { show } = useShowContact();
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
      <a onClick={show} className="FooterLink">
        Contact
      </a>
    </div>
  );
};

export default Footer;

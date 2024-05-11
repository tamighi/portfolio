import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-5 mb-2 mt-24 cursor-pointer">
      <a target="_blank" href="https://github.com/tamighi" className="text-lg">
        Github
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/thomas-amighi-635722196"
        className="text-lg"
      >
        Linkedin
      </a>
      <Link to="contact" className="text-lg">
        Contact
      </Link>
    </div>
  );
};

export default Footer;

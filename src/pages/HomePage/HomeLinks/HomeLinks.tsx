import { Link } from "react-router-dom";

const HomeLinks = () => {
  return (
    <nav className="flex flex-col gap-[50px] md:mt-5 cursor-pointer self-center justify-self-center">
      <Link to="work" className="font-elite text-3xl">
        Work
      </Link>
      <Link to="resume" className="font-elite text-3xl">
        Resume
      </Link>
      <Link to="contact" className="font-elite text-3xl">
        Contact
      </Link>
    </nav>
  );
};

export default HomeLinks;

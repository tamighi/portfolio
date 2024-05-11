import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="bg-primary fixed z-50 top-0 p-2 rounded-br-lg">
      <Link className="self-start flex items-center m-2 text-lg" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 md:h-9 mr-2"
        >
          <path d="M12 4L3 10V21H9V14H15V21H21V10L12 4Z" />
        </svg>
        <span>Home</span>
      </Link>
    </div>
  );
};

export default Appbar;

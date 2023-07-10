import { Link } from "react-router-dom";

import "./BackHomeButton.css";

type Props = React.HTMLAttributes<HTMLAnchorElement>;

// TODO: Position fixed and disapear when scrolling
const BackHomeButton = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <Link className={`BackHomeButton ${className || ""}`} to="/" {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="HomeIcon"
      >
        <path d="M12 4L3 10V21H9V14H15V21H21V10L12 4Z" />
      </svg>
      <span>Home</span>
    </Link>
  );
};

export default BackHomeButton;

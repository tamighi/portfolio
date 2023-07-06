import { Link } from "react-router-dom";

import "./BackHomeButton.css"

type Props = React.HTMLAttributes<HTMLAnchorElement>;

// TODO: Style
const BackHomeButton = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <Link className={`BackHomeButton ${className || ""}`} to="/" {...rest}>
      Go home
    </Link>
  );
};

export default BackHomeButton;

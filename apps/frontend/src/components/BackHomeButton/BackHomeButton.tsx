import { Link } from "react-router-dom";

type Props = React.HTMLAttributes<HTMLAnchorElement>;

const BackHomeButton = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <Link className={`BackHomeButton ${className || ""}`} to="/" {...rest}>
      Go home
    </Link>
  );
};

export default BackHomeButton;

import { Link } from "react-router-dom";

import "./ContactMeButton.css";

type Props = React.HTMLAttributes<HTMLAnchorElement>;

// TODO: Contact click shows email
const ContactMeButton = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <Link
      to="/contact"
      className={`ContactMeButton ${className || ""}`}
      {...rest}
    >
      Contact me !
    </Link>
  );
};

export default ContactMeButton;

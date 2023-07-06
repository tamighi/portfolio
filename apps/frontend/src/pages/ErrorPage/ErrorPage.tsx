import { Paragraph } from "components";
import { Link } from "react-router-dom";

import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <h1>Oops!</h1>
      <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
      <Link to="/" className="ErrorPageLink">Go home</Link>
    </div>
  );
};

export default ErrorPage;

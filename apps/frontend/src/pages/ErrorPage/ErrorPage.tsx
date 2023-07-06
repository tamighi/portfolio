import { BackHomeButton, Paragraph } from "components";

import "./ErrorPage.css";

const ErrorPage = () => {
  return (
  <>
  <BackHomeButton />
    <div className="ErrorPage">
      <h1>Oops!</h1>
      <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
    </div>
    </>
  );
};

export default ErrorPage;

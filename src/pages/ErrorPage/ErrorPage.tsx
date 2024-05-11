import { Appbar, Paragraph } from "components";

const ErrorPage = () => {
  return (
    <>
      <Appbar />
      <div className="flex flex-grow flex-col items-center justify-center">
        <h1>Oops!</h1>
        <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
      </div>
    </>
  );
};

export default ErrorPage;

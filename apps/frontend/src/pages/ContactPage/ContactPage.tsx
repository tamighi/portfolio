import { BackHomeButton, Input, ResponsivePage } from "components";
import TextArea from "components/Input/TextArea";

import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <BackHomeButton />
      <ResponsivePage className="ContactPage">
        <form className="ContactFormContainer">
          <div className="ContactFormTopInputs">
            <Input placeholder="name" />
            <Input placeholder="email" />
          </div>
          <TextArea placeholder="message" />
          <button>Send</button>
        </form>
      </ResponsivePage>
    </>
  );
};

export default ContactPage;

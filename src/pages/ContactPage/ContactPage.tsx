import { Appbar, Input, ResponsivePage } from "components";
import TextArea from "components/Input/TextArea";

import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Appbar />
      <ResponsivePage className="ContactPage">
        <form className="ContactFormCard">
          <h2>Contact me !</h2>
            <Input placeholder="name" />
            <Input placeholder="email" />
            <TextArea rows={10} placeholder="message" />
            <button className="ContactFormSendButton">Send</button>
        </form>
        <div className="ContactRight"></div>
      </ResponsivePage>
    </>
  );
};

export default ContactPage;

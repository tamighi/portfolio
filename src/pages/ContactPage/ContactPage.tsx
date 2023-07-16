import { Appbar, Button, Input, ResponsivePage, TextArea } from "components";

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
            <Button className="ContactFormSendButton">Send</Button>
        </form>
        <div className="ContactRight"></div>
      </ResponsivePage>
    </>
  );
};

export default ContactPage;

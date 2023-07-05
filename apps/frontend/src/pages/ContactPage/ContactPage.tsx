import { BackHomeButton, ResponsivePage } from "components";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <BackHomeButton />
      <ResponsivePage className="ContactPage">
        <form className="ContactFormContainer">
          <div className="ContactFormTopInputs">
            <input className="ContactFormInput" placeholder="name" />
            <input className="ContactFormInput" placeholder="email" />
          </div>
          <textarea placeholder="message" />
          <button>Send</button>
        </form>
      </ResponsivePage>
    </>
  );
};

export default ContactPage;

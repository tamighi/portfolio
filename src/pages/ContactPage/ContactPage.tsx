import { ResponsivePage } from "@/components";

import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <ResponsivePage className="flex flex-col lg:flex-row gap-20 items-center">
      <div className="flex-1 lg:min-w-fit min-w-[75%]">
        <ContactForm />
      </div>
      <div className="flex-1 flex flex-col gap-8 justify-center">
        <span>
          <span className="font-bold">Email</span>
          <span>: </span>
          <a
            href="thomas.amighi@hotmail.com"
            className="text-blue-400 hover:text-blue-300 font-light underline"
          >
            thomas.amighi@hotmail.com
          </a>
        </span>
        <span>
          <span className="font-bold">Linkedin</span>
          <span>: </span>
          <a
            href="https://www.linkedin.com/in/thomas-amighi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-light underline"
          >
            www.linkedin.com/in/thomas-amighi
          </a>
        </span>
      </div>
    </ResponsivePage>
  );
};

export default ContactPage;

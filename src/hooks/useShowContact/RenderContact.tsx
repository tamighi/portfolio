import "./RenderContact.css";

type Props = {
  close: () => void;
};

const RenderContact = (props: Props) => {
  const { close } = props;
  return (
    <div className="RenderContactCard">
      <button onClick={close} className="RenderContactCloseButton">
        <svg
          width="24px"
          height="24px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 10.586l4.95-4.95a1 1 0 1 1 1.414 1.414L13.414 12l4.95 4.95a1 1 0 1 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 1 1-1.414-1.414L10.586 12l-4.95-4.95a1 1 0 1 1 1.414-1.414L12 10.586z"
          />
        </svg>
      </button>
      <span className="RenderContactText">
        <b>Interested ?</b>
        <br />
        <br />
        Contact me at{" "}
        <a href="mailto: amighithomas@gmail.com">amighithomas@gmail.com</a>
      </span>
    </div>
  );
};

export default RenderContact;

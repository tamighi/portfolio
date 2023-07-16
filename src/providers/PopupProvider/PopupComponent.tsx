import { PopupOptions } from "./PopupProvider";

import "./PopupComponent.css";

interface PopupComponentProps {
  options: PopupOptions;
  close: () => void;
}

const PopupComponent = (props: PopupComponentProps) => {
  const { options } = props;
  const { open, render } = options;

  return <div className={`Popup ${open ? "Open" : "Close"}`}>{render}</div>;
};

export default PopupComponent;

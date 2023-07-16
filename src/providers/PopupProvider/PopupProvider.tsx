import React from "react";
import PopupComponent from "./PopupComponent";

export interface PopupOptions {
  render?: React.ReactNode;
  open: boolean;
}

type ShowOptions = Omit<PopupOptions, "open">;

export interface PopupContextValues {
  popupOptions: PopupOptions;
  setPopupOptions: React.Dispatch<React.SetStateAction<PopupOptions>>;
}

const PopupContext = React.createContext<PopupContextValues | null>(null);

export const usePopup = () => {
  const dialogContext = React.useContext(PopupContext);
  if (!dialogContext) {
    throw new Error("Popup provider not setup.");
  }

  const { setPopupOptions } = dialogContext;

  const show = (options: ShowOptions = {}) => {
    const { render } = options;

    setPopupOptions({ open: true, render });
  };

  const close = () => {
    setPopupOptions((prevOptions) => ({ ...prevOptions, open: false }));
  };

  return { show, close };
};

const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [popupOptions, setPopupOptions] = React.useState<PopupOptions>({
    open: false,
  });

  const close = () =>
    setPopupOptions((prevOptions) => ({ ...prevOptions, open: false }));

  return (
    <PopupContext.Provider value={{ popupOptions: popupOptions, setPopupOptions: setPopupOptions }}>
      <PopupComponent options={popupOptions} close={close} />
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;

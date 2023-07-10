import { usePopup } from "providers";

import RenderContact from "./RenderContact";

const useShowContact = () => {
  const popup = usePopup();
  const show = () => {
    popup.show({render: <RenderContact close={popup.close}/>})
  }
  return { show };
};

export default useShowContact;

import { contact } from "public/data/contact";
export const ismobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const openwhatsapp = () => {
  if (ismobile()) {
    return `https://api.whatsapp.com/send?phone=${contact.whatsapp}`;
  } else {
    return `https://web.whatsapp.com/send?phone=${contact.whatsapp}`;
  }
};

import { contact } from "public/data/contact";
import { ismobile } from "./device";

export const openform = () => {
  document.querySelector(".orderpop").classList.add("active");
};
export const setThumbnail = (filetype) => {
  let types = [
    "text",
    "pdf",
    "image",
    "sheet",
    "document",
    "vedio",
    "presentation",
    "zip",
    "file",
  ];
  let i = 0;
  if (types.indexOf(filetype.split("/")[0] > -1)) {
    i = types.indexOf(filetype.split("/")[0]);
  }
  if (
    types.indexOf(
      filetype.split("/")[1]?.split(".")[
        filetype.split("/")[1]?.split(".").length - 1
      ]
    ) > -1
  ) {
    i = types.indexOf(
      filetype.split("/")[1]?.split(".")[
        filetype.split("/")[1]?.split(".").length - 1
      ]
    );
  }
  if (i < 0) {
    i = types.length - 1;
  }
  return types[i];
};

export const replacewithdash = (text) => {
  return `${text.toLowerCase().trim().replace(/ /g, "-")}`;
};

export const openwhatsapp = () => {
  if (ismobile()) {
    return `https://api.whatsapp.com/send?phone=${contact.whatsapp}`;
  } else {
    return `https://web.whatsapp.com/send?phone=${contact.whatsapp}`;
  }
};

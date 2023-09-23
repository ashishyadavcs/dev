import { contact } from "public/data/contact";
import { ismobile } from "./device";
import { message } from "./message";

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
export const replacewithspace = (text) => {
  return `${text.toLowerCase().trim().replace(/-/g, " ")}`;
};

export const openwhatsapp = (msg=message.sale) => {

    return `https://${ismobile()?'api':'web'}.whatsapp.com/send?phone=${contact.whatsapp}&text=${msg}`;
};
export const countryslug = (post) => {
  return `/countrycode/${post.dial_code}-country-code-${post.name}`;
};
export const clickToCopy=(e)=>{
  const input = document.createElement("textarea");
  input.value = window.location.href;
  document.body.appendChild(input);
  input.value=e.currentTarget.innerText
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input)
}
import { contact } from "public/data/contact";
import { ismobile } from "./device";
import { message } from "./message";

export const openform = () => {
    document.querySelector(".orderpop").classList.add("active");
};
export const setThumbnail = filetype => {
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
            filetype.split("/")[1]?.split(".")[filetype.split("/")[1]?.split(".").length - 1]
        ) > -1
    ) {
        i = types.indexOf(
            filetype.split("/")[1]?.split(".")[filetype.split("/")[1]?.split(".").length - 1]
        );
    }
    if (i < 0) {
        i = types.length - 1;
    }
    return types[i];
};

export const replacewithdash = text => {
    return `${text.toLowerCase().trim().replace(/ /g, "-")}`;
};
export const replacewithspace = text => {
    return `${text.toLowerCase().trim().replace(/-/g, " ")}`;
};

export const openwhatsapp = (msg = message.sale) => {
    return `https://${ismobile() ? "api" : "web"}.whatsapp.com/send?phone=${
        contact.whatsapp
    }&text=${msg}`;
};
export const countryslug = post => {
    return `/countrycode/${post.dial_code}-country-code-${post.name}`;
};
export const clickToCopy = (e, value) => {
    const text = e.currentTarget.innerText;
    const el = e.currentTarget;
    const input = document.createElement("textarea");
    document.body.appendChild(input);
    input.value = value;
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    el.innerText = "copied";
    setTimeout(() => {
        el.innerText = text;
    }, 2000);
};

export const progressBar = () => {
    if (typeof document == "undefined") return;
    var winScroll = document.body.scrollTop || document.querySelector(".layout").scrollTop;
    var height =
        document.querySelector(".layout").scrollHeight -
        document.querySelector(".layout").clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector(":root").style.setProperty("--progress-width", `${scrolled}%`);
};

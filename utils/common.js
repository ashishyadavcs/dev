import { contact } from "public/data/contact";
import { ismobile } from "./device";
import { message } from "./message";
import { useRouter } from "next/router";

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

export const openwhatsapp = (msg = message.sale, number) => {
    return `https://${ismobile() ? "api" : "web"}.whatsapp.com/send?phone=${
        number || contact.whatsapp
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

export const LoadFont = ({ config }) => (
    <script
        dangerouslySetInnerHTML={{
            __html: ` function loadStyleSheet(path) {
            var head = document.getElementsByTagName('head')[0],
                link = document.createElement('link');
            link.setAttribute('href', path);
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            head.appendChild(link);
        };
      if (document.readyState === "complete") {
        loadStyleSheet('${config.fontFamilyCSS}');
      } else {
        window.addEventListener("load", function(){ 
            loadStyleSheet('${config.fontFamilyCSS}');
        });
      }`,
        }}
    ></script>
);

export const mailTo = email => `https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=${email}`;

export const excludPath = arr => {
    if (typeof window == "undefined") return;
    return !arr.includes(window.location.pathname);
};

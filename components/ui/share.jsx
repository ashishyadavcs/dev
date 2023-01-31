import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import styles from "@/styles/share.module.css";

import { FiLink2 } from "react-icons/fi";

const Share = () => {
  const copyurl = () => {
    const input = document.createElement("input");
    input.value = window.location.href;
    input.select();
    document.execCommand("copy");
  };
  const openpopup = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const popheight = (window.innerHeight * 80) / 100;
    const popwidth = (window.innerHeight * 80) / 100;
    const left = (width - popwidth) / 2;
    const top = (height - popheight) / 2;
    window.open(
      link,
      `top:${top},left:${left},height:${popheight},width:${popwidth}`
    );
  };
  const share = async (link) => {
    try {
      await navigator.share({
        title: document.title,
        text: document.title,
        url: window.location.href,
      });
    } catch (err) {
      openpopup(link);
    }
  };
  return (
    <div className={styles.share}>
      <ul>
        <li>share</li>
        <li onClick={(e) => share()}>
          <FaFacebook size={25} />
        </li>
        <li onClick={(e) => share()}>
          <FaWhatsapp size={25} />
        </li>
        <li onClick={(e) => share()}>
          <FaTwitter size={25} />
        </li>
        <li onClick={(e) => share()}>
          <FaLinkedinIn size={25} />
        </li>
        <li onClick={(e) => share()}>
          <FiLink2 onClick={(e) => copyurl()} size={25} />
        </li>
      </ul>
    </div>
  );
};

export default Share;

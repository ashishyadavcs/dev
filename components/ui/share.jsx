import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import styles from "@/styles/share.module.css";

import { FiLink2 } from "react-icons/fi";
import { useEffect } from "react";

const Share = () => {
  useEffect(() => {
    document.body.classList.add("share");
    return () => document.body.classList.remove("share");
  }, []);
  if (typeof window === undefined) return;
  const url = window.location.href;
  const text = document.description;
  const shareto = {
    twitter: `http://www.twitter.com/share?url=${url}`,
    linkedin: `https://www.linkedin.com/cws/share?url=${url}`,
    whatsapp: `https://web.whatsapp.com/send?text=${text}%20%0A${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    pinterest: `https://www.pinterest.com/pin/create/button?url=${url}&media=&description=${text}`,
    telegram: `https://telegram.me/share/url?url=${url}&text=${text}`,
    tumbler: `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${url}&title=${text}&caption=${text}&tags={tutorbin}`,
    gmail: `mailto:%20?subject=${text}&body=${text}`,
    olx: `https://olx.com/post`,
    reddit: `https://reddit.com/submit?url=${url}&title=${text}`,
  };
  const copyurl = () => {
    const input = document.createElement("textarea");
    input.value = window.location.href;
    input.select();
    document.execCommand("copy");
  };

  const share = async (link) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: document.title,
          url: window.location.href,
        });
      } catch (err) {}
    } else {
      if (!link) return;
      var left = screen.width / 2 - 800 / 2;
      var top = screen.height / 2 - 600 / 2;
      window.open(
        link,
        "popup",
        `width=800,height=600,top=${top},left=${left}`
      );
      return false;
    }
  };
  return (
    <div className={styles.share}>
      <ul>
        <li>share</li>
        <li onClick={(e) => share(shareto.facebook)}>
          <FaFacebook size={25} />
        </li>
        <li onClick={(e) => share(shareto.whatsapp)}>
          <FaWhatsapp size={25} />
        </li>
        <li onClick={(e) => share(shareto.twitter)}>
          <FaTwitter size={25} />
        </li>
        <li onClick={(e) => share(shareto.linkedin)}>
          <FaLinkedinIn size={25} />
        </li>
        <li onClick={(e) => copyurl()}>
          <FiLink2 onClick={(e) => copyurl()} size={25} />
        </li>
      </ul>
    </div>
  );
};

export default Share;

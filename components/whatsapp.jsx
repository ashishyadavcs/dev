import React from "react";
import styles from "../styles/cta.module.css";
import { BsWhatsapp } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { contact } from "../public/data/contact";
import { ismobile } from "../utils/device";
const Whatsapp = () => {
  const openwhatsapp = () => {
    if (ismobile()) {
      return `https://api.whatsapp.com/send?phone=${contact.whatsapp}`;
    } else {
      return `https://web.whatsapp.com/send?phone=${contact.whatsapp}`;
    }
  };
  const share = async () => {
    try {
      await navigator.share({
        title: document.title,
        text: document.title,
        url: window.location.href,
      });
    } catch (err) {}
  };
  return (
    <>
      <FaShare
        onClick={share}
        color="#fff"
        size={38}
        className={`${styles.share} pointer`}
      />
      <a href="" target="_blank"></a>
      <div
        onClick={(e) => {
          e.currentTarget.previousElementSibling.setAttribute(
            "href",
            openwhatsapp()
          );
          e.currentTarget.previousElementSibling.click();
        }}
        className={`${styles.whatsapp} d-flex justify-content-center align-items-center`}
      >
        <BsWhatsapp size={28} color="#fff" />
      </div>
    </>
  );
};

export default Whatsapp;

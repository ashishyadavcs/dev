
import { openwhatsapp } from "utils/common";
import { BsWhatsapp } from "react-icons/bs";
import { message } from "utils/message";
import { styled } from "styled-components";
const Whatsapp = ({title}) => {
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
      {/* <FaShare
        onClick={share}
        color="#fff"
        size={38}
        className={`${styles.share} pointer`}
      /> */}
      <a href="#" role="link" target="_blank">&nbsp;</a>
      <Cta
        onClick={(e) => {
          e.currentTarget.previousElementSibling.setAttribute(
            "href",
            openwhatsapp(title||message.sale)
          );
          e.currentTarget.previousElementSibling.click();
        }}
        className={`d-flex justify-content-center align-items-center`}
      >
        <BsWhatsapp size={28} color="#fff" />
      </Cta>
    </>
  );
};

export default Whatsapp;
const Cta=styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #0ed914;
  position: fixed;
  bottom: 94px;
  cursor: pointer;
  right: 15px;
  z-index: 10;
`

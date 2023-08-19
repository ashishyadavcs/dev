import { useRef, useEffect } from "react";

import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { toast } from "react-toastify";
import { contact } from "public/data/contact";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { openwhatsapp } from "utils/common";
import Whatsapp from "@/components/whatsapp";
import { Styled } from "@/styles/contact";
const Contact = () => {
  const refs = useRef({});
  useEffect(() => {
    const input = refs.current.mobile;
    intlTelInput(input, {
      nationalMode: true,
    });
  }, []);

  const mailbutton=refs.current.mail
  const sendMail = async (e) => {
    mailbutton.innerText = "Sending....";
    const data = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        from: `frontendzone <ashish@frontendzone.com`,
        to: "ashishbhu221306@gmail.com",
        subject: "Contact for website design",
        body: e.target.body.value,
      }),
    })
      .then((res) => res.json())
      .catch((err) => "");
       mailbutton.innerText = "submit";

    if (data.success) {
      toast.success("Message send successfully!");
    } else {
      toast.error("could not send your message");
    }
  }

  const sendwhatsapp = (e) => {
    const message = {
      name: e.target.name.value,
      phone: e.target.mobile.value,
      email: e.target.email.value,
      body: e.target.body.value.replace(/\r\n|\r|\n/g,"%0A")

    }

    const msg = `
    Name    :${message.name}%0A
    Phone   :${message.phone}%0A
    Email   :${message.email}%0A
    Message :%0A${message.body}
    `
    window.open(openwhatsapp(msg))
    
  }
  const sendemail = async (e) => {
    e.preventDefault();
    e.nativeEvent.submitter==mailbutton?sendMail(e):sendwhatsapp(e)
  };

  return (
    <Styled.contact>
      <NextSeo
        title="Contact Now for website design HTML-CSS-JS-NextJs-React-js-SEO | Frontendzone"
        description="Get your business website designed & developed by experienced developer in $500 "
      />
      <div className="container">
        <div className="row flex-md-row-reverse">
          <div className="col-md-6 col-12">
            <div className={`right mt-3 mt-md-0`}>
              <h1>Contact Us</h1>
              <p className="my-2">
                <b className="mr-2">
                  <FaWhatsapp size={20} />
                </b>
                <a className="whatsapp-text" onClick={e => {
                  e.preventDefault()
                  window.open(openwhatsapp())
                }}> {contact.mobile}</a>
              </p>
              <p>
                <b className="mr-2">
                  <FaEnvelope size={20} />
                </b>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </div>
            <span className="d-none d-md-block">
              <Image
                src="/images/contact-us.png"
                height={300}
                width={300}
                alt="contact for web development services"
              />
            </span>
          </div>
          <div className="col-md-6 col-12">
            <form onSubmit={sendemail} className="d-flex flex-column">
              <input
                required
                spellCheck="false"
                className="text-capitalize"
                placeholder="Name"
                type="text"
                name="name"
              
              ></input>
              <input
                required
                ref={(el) => (refs.current.mobile = el)}
                placeholder="whatsapp number"
                type="tel"
                maxLength={12}
           
                className="w-100 d-flex"
                name="mobile"
              ></input>
              <input name="attachment" type="file"></input>
              <input  placeholder="email" type="email" name="email" />
              <textarea
                defaultValue={`Hi Frontendzone 👋\nI am looking for a website
                `}
                placeholder="message..."
                className="textarea"
                name="body"
              ></textarea>
              <div className="d-flex" style={{gap:"10px"}}>
              <button ref={(el) => (refs.current.mail = el)} type="submit" className="theme-btn">mail </button>
              <button  className="theme-btn whatsapp">whatsapp </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Whatsapp/>
    </Styled.contact>
    
  );
};
export default Contact;

import { useRef, useEffect } from "react";
import styles from "../styles/contact.module.css";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { toast } from "react-toastify";
import { contact } from "public/data/contact";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { NextSeo } from "next-seo";
import Image from "next/image";
const Contact = () => {
  const refs = useRef({});
  useEffect(() => {
    const input = refs.current.mobile;
    intlTelInput(input, {
      nationalMode: true,
    });
  }, []);

  const sendemail = async (e) => {
    e.preventDefault();
    e.target.querySelector("button").innerText = "Sending....";
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
    e.targe.querySelector("button").innerText = "submit";

    if (data.success) {
      toast.success("Message send successfully!");
    } else {
      toast.error("could not send your message");
    }
  };

  return (
    <div className={styles.contact}>
      <NextSeo
        title="Contact Now for website design HTML-CSS-JS-NextJs-React-js-SEO | Frontendzone"
        description="Get your business website designed & developed by experienced developer in $500 "
      />
      <div className="container">
        <div className="row flex-md-row-reverse">
          <div className="col-md-6 col-12">
            <div className={`${styles.right} mt-3 mt-md-0`}>
              <h1>Contact Us</h1>
              <p className="my-2">
                <b className="mr-2">
                  <FaWhatsapp size={20} />
                </b>
                <a href={`tel:${contact.mobile}`}> {contact.mobile}</a>
              </p>
              <p>
                <b className="mr-2">
                  <FaEnvelope size={20} />
                </b>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </div>
            <span className="d-none d-md-block">
              {" "}
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
              <input placeholder="email" type="email" name="email" />
              <textarea
                placeholder="message..."
                className="textarea"
                name="body"
              ></textarea>
              <button className="theme-btn">Submit </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

import { useRef, useEffect } from "react";
import styles from "../styles/contact.module.css";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { toast } from "react-toastify";
import { contact } from "public/data/contact";
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
      <div className="container">
        <div className="row">
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
          <div className="col-md-6 col-12">
            <div className="mt-3">
              <h1>Contact Us</h1>
              <p>
                <b className="mr-2">mobile</b>
                {contact.mobile}
              </p>
              <p>
                <b>email</b>: {contact.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

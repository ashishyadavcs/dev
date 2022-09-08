import { useRef, useEffect } from "react";
import styles from "../styles/contact.module.css";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { numberonly, lettersonly } from "../utils/input";
const Contact = () => {
  const refs = useRef({});
  useEffect(() => {
    const input = refs.current.mobile;
    console.log(refs.current.mobile);
    intlTelInput(input, {
      nationalMode: true,
    });
  }, []);

  return (
    <div className={styles.contact}>
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14025.262449221804!2d77.0622512!3d28.5001506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc95ca6a8c446d3ef!2sBrand%20Web%20Designer!5e0!3m2!1sen!2sin!4v1642862278865!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen="true"
              loading="lazy"
            ></iframe>
            <h3 className="heading">
              Discuss your project requirement with us.
            </h3>
            <p>Get you website designed under your given deadline</p>
            <p>Get All developement services needed for your website</p>
          </div>
          <div className="col-md-5 col-12">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="d-flex flex-column"
            >
              <input
                required
                onKeyUp={lettersonly}
                spellCheck="false"
                className="text-capitalize"
                placeholder="Name"
                type="text"
                name="name"
              ></input>
              <input
                required
                onKeyUp={numberonly}
                ref={(el) => (refs.current.mobile = el)}
                placeholder="mobile number"
                type="tel"
                maxLength={12}
                name="name"
              ></input>
              <input
                onKeyUp={numberonly}
                placeholder="budget"
                type="number"
                name="name"
              ></input>
              <input type="file"></input>
              <textarea
                placeholder="messgae..."
                className="textarea"
                name="message"
              ></textarea>
              <button className="theme-btn">contact now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

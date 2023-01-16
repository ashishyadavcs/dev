import { useRef, useEffect } from "react";
import styles from "../styles/contact.module.css";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { numberonly, lettersonly } from "../utils/input";
const Contact = () => {
  const refs = useRef({});
  useEffect(() => {
    const input = refs.current.mobile;
    intlTelInput(input, {
      nationalMode: true,
    });
  }, []);

  return (
    <div className={styles.contact}>
      <div className="container">
        <div className="row">
          <div className="col-12">
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

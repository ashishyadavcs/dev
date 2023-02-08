import Link from "next/link";
import { contact } from "../public/data/contact";
import {
  FaArrowDown,
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaSkype,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ismobile } from "../utils/device";
const Footer = () => {
  return (
    <>
      <footer className="pt-4 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <h3 className="smallheading ">
                  {process.env.NEXT_PUBLIC_APP_NAME}
                </h3>
                <p>
                  A modern approach to learn frontend with tutorials, tricks and
                  tips
                </p>
              </div>

              <h3 className="smallheading">Contact</h3>
              <p>
                <a href={`tel:${contact.mobile}`}>
                  <FaPhone className="mr-2" />
                  {contact.mobile}
                </a>
                <br />

                <a href={`mailto:${contact.email}`}>
                  <FaEnvelope className="mr-2" />
                  {contact.email}
                </a>
                <br />
              </p>
              <div className="social-links mt-3 md-mb-0 mb-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={contact.facebook}
                  className="twitter"
                >
                  <FaFacebookF />
                </a>
                {contact.twitter && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={contact.twitter}
                    className="facebook"
                  >
                    <FaTwitter />
                  </a>
                )}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={contact.instagram}
                  className="instagram"
                >
                  <FaInstagram />
                </a>
                {/* <a
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                  className="google-plus"
                >
                  <FaSkype />
                </a> */}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={contact.linkedin}
                  className="linkedin"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  title="youtube"
                  target="_blank"
                  rel="noreferrer"
                  href={contact.youtube}
                  className="linkedin"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <h3 className="smallheading">Useful Links</h3>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center">
                  <Link href={"/"}>
                    <a className="ml-1">
                      <FaChevronRight className="mr-1" size={15} />
                      Home
                    </a>
                  </Link>
                </li>
                <li className="d-flex align-items-center">
                  <Link href={"/aboutus"}>
                    <a className="ml-1">
                      <FaChevronRight className="mr-1" size={15} />
                      About us
                    </a>
                  </Link>
                </li>
                {/* <li className="d-flex align-items-center">
                  <Link className="ml-1" href="/term-of-service">
                    Terms of service
                  </Link>
                </li> */}
                {/* <li className="d-flex align-items-center">
                  <Link href="/privacy-policy">
                    <a className="ml-1">Privacy policy</a>
                  </Link>
                </li> */}
                <li className="d-flex align-items-center">
                  <Link href={"/services"}>
                    <a className="ml-1">
                      <FaChevronRight className="mr-1" size={15} />
                      Services
                    </a>
                  </Link>
                </li>
                {/* <li className="d-flex align-items-center">
                  <Link href={"/review"}>
                    <a className="ml-1">
                      <FaChevronRight className="mr-1" size={15} />
                      Reviews
                    </a>
                  </Link>
                </li> */}
                <li className="d-flex align-items-center">
                  <Link href={"/blog"}>
                    <a className="ml-1">
                      <FaChevronRight className="mr-1" size={15} />
                      Blog
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3 className="smallheading">tools</h3>
              <ul className="list-unstyled">
                <li>
                  <Link href="/online-html-css-editor">
                    <a>
                      <FaChevronRight className="mr-1" size={15} />
                      Online html editor
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="sub-footer d-flex align-items-center">
        <small className="text-secondary container p-3 text-center d-block">
          copyright&copy;2022-{new Date().getFullYear() + 1}
        </small>
      </div>
      {!ismobile && (
        <div className="gototop text-white d-flex justify-content-center align-items-center">
          <FaArrowDown size={15} />
        </div>
      )}
    </>
  );
};
export default Footer;

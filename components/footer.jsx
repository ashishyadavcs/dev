import Link from "next/link";
import { contact } from "../public/data/contact";
import {
  FaArrowDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-4 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="smallheading">Address</h3>
              <p>
                {contact.address} <br />
                Hariyana, India
                <br />
                <br />
                <strong>Phone : </strong>
                <a href={`tel:${contact.mobile}`}>{contact.mobile}</a>
                <br />
                <strong>Email : </strong>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={contact.twitter}
                  className="facebook"
                >
                  <FaTwitter />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={contact.instagram}
                  className="instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                  className="google-plus"
                >
                  <FaSkype />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={contact.linkedin}
                  className="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <h3 className="smallheading">Useful Links</h3>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center">
                  <Link href={"/"}>
                    <a className="ml-1">Home</a>
                  </Link>
                </li>
                <li className="d-flex align-items-center">
                  <Link href={"/aboutus"}>
                    <a className="ml-1">About us</a>
                  </Link>
                </li>
                <li className="d-flex align-items-center">
                  <Link className="ml-1" href="/term-of-service">
                    Terms of service
                  </Link>
                </li>
                <li className="d-flex align-items-center">
                  <Link href="/privacy-policy">
                    <a className="ml-1">Privacy policy</a>
                  </Link>
                </li>
                <li className="d-flex align-items-center">
                  <Link href={"/services"}>
                    <a className="ml-1">Services</a>
                  </Link>
                </li>
                <li className="d-flex align-items-center">
                  <Link href={"/review"}>
                    <a className="ml-1">Reviews</a>
                  </Link>
                </li>
                <li className="d-flex align-items-center">
                  <Link href={"/blog"}>
                    <a className="ml-1">Blog</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3 className="smallheading">Digital Services</h3>
              <ul className="list-unstyled"></ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="sub-footer d-flex align-items-center">
        <div className="container py-2 d-flex justify-content-between align-items-center">
          <small>copyright&copy;2022-{new Date().getFullYear() + 1}</small>
          <Link href="" className="text-white">
            <a> About</a>
          </Link>
        </div>
      </div>
      <div className="gototop text-white d-flex justify-content-center align-items-center">
        <FaArrowDown size={15} />
      </div>
    </>
  );
};
export default Footer;

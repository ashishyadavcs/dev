import Link from "next/link";
import { useEffect } from "react";
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
  const bookmark = () => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "d", ctrlKey: true })
    );
  };
  useEffect(() => {
    bookmark();
    const gotop = document.querySelector(".gototop");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        gotop.classList.add("active");
      } else {
        gotop.classList.remove("active");
      }
    });
    gotop.addEventListener("click", (e) => {
      console.log("ji");
      if (e.currentTarget.classList.contains("active")) {
        window.scroll(0, 0);
      } else {
        window.scroll(0, 0);
      }
      window.scroll(0, document.body.scrollHeight);
    });
  });

  return (
    <>
      <footer className="py-4 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="smallheading">Brand Web Designer</h3>
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
                  <a className="ml-1" href="">
                    Terms of service
                  </a>
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
              <h3 className="smallheading">Digital Products</h3>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center">
                  <a href="">SEO package</a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="">English vocab PDF</a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="">Custom Website</a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="">Android Application</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="sub-footer d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-9 co-12">
              <p className="mb-0 p-2">
                <small>
                  copyright&copy;2022-{new Date().getFullYear() + 1}
                </small>
              </p>
            </div>
            <div className="col-md-3 col-12">
              <ul className="list-unstyled d-flex align-items-center"></ul>
            </div>
          </div>
        </div>
      </div>
      <div className="gototop text-white d-flex justify-content-center align-items-center">
        <FaArrowDown size={22} />
      </div>
    </>
  );
};
export default Footer;

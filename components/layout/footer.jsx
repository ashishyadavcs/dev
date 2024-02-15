import Link from "next/link";
import { contact } from "../../public/data/contact";
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
import tools from "public/data/tools";
import { useEffect } from "react";
import { Styled } from "@/styles/footer";

const Footer = () => {
  const goToTop = () => {
    window.scrollY>100?window.scroll(0,0):window.scroll(0,document.documentElement.scrollHeight)
  }
  useEffect(() => {
    const icon=document.querySelector(".gototop")
    const scrollf = () => {
      window.scrollY>100?icon.classList.add("down"):icon.classList.remove("down")
    }
    window.onscroll = () => {
      scrollf()  
    }
    return () => {
      removeEventListener("scroll",scrollf)
    }
  }, [])
  
  return (
    <>
      <style jsx>
        {`
        .gototop{transition:all 0.3s}
          .gototop.down{
            transform:rotate(180deg)
          }
        

        `}
      </style>
      <Styled.footer className="pt-4 position-relative">
        <div className="container">
          <div className="row" role="navigation">
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

              <div className="d-flex flex-column">
                <a href={`tel:${contact.mobile}`} className="mb-1">
                  <FaPhone className="mr-2" />
                  {contact.mobile}
                </a>

                <a href={`mailto:${contact.email}`}>
                  <FaEnvelope className="mr-2" />
                  {contact.email}
                </a>
              </div>

              <div className="social-links mt-3 md-mb-0 mb-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  aria-label="facebook"
                  href={contact.facebook}
                  className="twitter"
                >
                  <FaFacebookF />
                </a>
                {contact.twitter && (
                  <a
                    aria-label="twitter"
                    target="_blank"
                    rel="noreferrer"
                    href={contact.twitter}
                    className="facebook"
                  >
                    <FaTwitter />
                  </a>
                )}
                <a
                  aria-label="instagram"
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
                  aria-label="linkedin"
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
                  aria-label="youtube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <h3 className="smallheading">Useful Links</h3>
              <ul className="list-unstyled">
              <li className="d-flex align-items-center">
                  <Link href={"/frontend-developer"} prefetch={false}>
                    <a className="ml-1">
                      <FaChevronRight className="mr-1" size={15} />
                       Frontend developer roadmap
                    </a>
                  </Link>
                </li>
                <li className="d-flex align-items-center">
                  <Link href={"/"}>
                    <a className="ml-1">
                      <FaChevronRight className="mr-1" size={15} />
                      Home
                    </a>
                  </Link>
                </li>
                <li className="d-flex align-items-center">
                  <Link href={"/aboutus"} prefetch={false}>
                    <a className="ml-1">
                      <FaChevronRight className="mr-1" size={15} />
                      About us
                    </a>
                  </Link>
                </li>

                
                <li className="d-flex align-items-center">
                  <Link href={"/services"} prefetch={false}>
                    <a className="ml-1">
                      <FaChevronRight className="mr-1" size={15} />
                      Services
                    </a>
                  </Link>
                </li>

                <li className="d-flex align-items-center">
                  <Link href={"/blog"} prefetch={false}>
                    <a className="ml-1">
                      <FaChevronRight className="mr-1" size={15} />
                      Blog
                    </a>
                  </Link>
                </li>
                <li className="d-flex align-items-center">
                  <Link href={"/training"} prefetch={false}>
                    <a className="ml-1">
                      <FaChevronRight className="mr-1" size={15} />
                       Training
                    </a>
                  </Link>
                </li>
                
                <li className="d-flex align-items-center">
                  <Link href={"/ashish-yadav"} prefetch={false}>
                    <a className="ml-1">
                      <FaChevronRight className="mr-1" size={15} />
                       Ashish Yadav
                    </a>
                  </Link>
                </li>
               
                <li className="d-flex align-items-center">
                  <Link href="/privacy-policy">
                    <a className="ml-1"> <FaChevronRight className="mr-1" size={15} />Privacy policy</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3 className="smallheading">tools</h3>
              <ul className="list-unstyled">
                {tools.map((t, i) => (
                  <li key={i} className="ml-1">
                    <Link href={t.href} prefetch={false}>
                      <a>
                        <FaChevronRight className="mr-1" size={15} />
                        {t.text}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-footer d-flex justify-content-center align-items-center">
        <small className="text-secondary text-center container p-3 text-center d-block">
          copyright&copy;2022-{new Date().getFullYear() + 1}
        </small>
      </div>
      </Styled.footer>
     
      <div onClick={e => {
        goToTop()
        }} className="gototop text-white d-flex justify-content-center align-items-center">
          <FaArrowDown size={15} />
        </div>
   
    </>
  );
};
export default Footer;

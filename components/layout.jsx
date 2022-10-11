import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Whatsapp from "./whatsapp";
import Orderpop from "./orderpop";
const Layout = ({ children }) => {
  useEffect(() => {
    const gotop = document.querySelector(".gototop");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        gotop.classList.add("active");
      } else {
        gotop.classList.remove("active");
      }
    });
    gotop.addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("active")) {
        window.scroll(0, 0);
      } else {
        window.scroll(0, 0);
      }
      window.scroll(0, document.body.scrollHeight);
    });
  });
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
      <Whatsapp />
      <Orderpop />
    </div>
  );
};
export default Layout;

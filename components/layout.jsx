import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Whatsapp from "./whatsapp";
import Orderpop from "./orderpop";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main> {children}</main>
      <Footer />
      {/* <Whatsapp /> */}
      <Orderpop />
    </div>
  );
};
export default Layout;

import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Whatsapp from "./whatsapp";
import Orderpop from "./orderpop";
import Settings from "./settings";
import Notes from "./ui/note";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Notes />
      <Header />
      <main> {children}</main>
      <Footer />
      {/* <Whatsapp /> */}
      <Orderpop />
    </div>
  );
};
export default Layout;

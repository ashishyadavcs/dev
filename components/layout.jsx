import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Whatsapp from "./whatsapp";
import Orderpop from "./orderpop";
import Settings from "./settings";
import Notes from "./ui/note";
import { useRouter } from "next/router";
import Stickyad from "./stickyad";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="layout">
      {router.pathname.includes("blog") && (
        <>
          <Notes />
          <Stickyad />
        </>
      )}
      <Settings />
      <Header />
      <main> {children}</main>
      <Footer />
      {/* <Whatsapp /> */}
      <Orderpop />
    </div>
  );
};
export default Layout;

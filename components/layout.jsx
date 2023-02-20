import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Whatsapp from "./whatsapp";
import Orderpop from "./orderpop";
import Settings from "./settings";
import Notes from "./ui/note";
import { useRouter } from "next/router";
import Stickyad from "@/components/ads/stickyad";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="layout">
      {router.pathname.includes("blog") && <Notes />}
      <Settings />
      <Header />
      <main> {children}</main>
      <Footer />
      <Orderpop />
      {(router.pathname.includes("blog") ||
        router.pathname.includes("online") ||
        router.pathname.includes("button")) && <Stickyad />}
    </div>
  );
};
export default Layout;

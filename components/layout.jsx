import { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Whatsapp from "./whatsapp";
import Orderpop from "./orderpop";
import Settings from "./settings";
import Notes from "./ui/note";
import { useRouter } from "next/router";
import Stickyad from "@/components/ads/stickyad";
import Breadcrumb from "./breadcrumb";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="layout">
      {/* {router.pathname.includes("blog") && <Notes />} */}
      <Breadcrumb />
      <Settings />
      <Header />
      <main> {children}</main>
      <Footer />
      <Orderpop />
      <div className="backlink sub-footer">
        <a href="https://calculatorr.net">calculator</a>
        <a href="https://physicsclass.co">physicsclass</a>
        <a href="https://jsonviewer.guru">json viewer</a>
      </div>
      {(router.pathname.includes("blog") ||
        router.pathname.includes("online") ||
        router.pathname.includes("button")) && <Stickyad />}
    </div>
  );
};
export default Layout;

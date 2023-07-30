import Header from "@/components/header";
import Footer from "@/components/footer";
import Orderpop from "@/components/orderpop";
import Settings from "@/components/settings";
import { useRouter } from "next/router";
import Stickyad from "@/components/ads/stickyad";
import Breadcrumb from "@/components/breadcrumb";

const Layout = ({ children,type='default'}) => {
  const router = useRouter();
  return (
    <>
    {type=='default' ? <div className="layout">
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
    </div>:<main> {children}</main>}
    </>
  );
};
export default Layout;

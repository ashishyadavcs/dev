import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Orderpop from "@/components/orderpop";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/breadcrumb";
import Orderform from "../orderform";
import dynamic from "next/dynamic";
const Share = dynamic(() => import("@/components/ui/share"), {
    ssr: false,
});


const Layout = ({ children, type = "default" }) => {
    const router = useRouter();
    return (
        <>
            {type == "default" ? (
                <div className="layout">
                    <Breadcrumb />
                   {!["/online-html-css-editor","/html-responsive-iframe-generator","/css/button-generator"].includes(router.pathname) &&  <Share />}
                    <Header />
                    <main> {children}</main>
                    <Footer />
                    <Orderpop Comp={Orderform} />
                    <div className="backlink sub-footer">
                        <a href="https://calculatorr.net">calculator</a>
                        <a href="https://physicsclass.co">physicsclass</a>
                        <a href="https://jsonviewer.guru">json viewer</a>
                    </div>
                </div>
            ) : (
                <main> {children}</main>
            )}
        </>
    );
};
export default Layout;

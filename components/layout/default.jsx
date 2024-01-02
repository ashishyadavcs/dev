import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Orderpop from "@/components/orderpop";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/breadcrumb";
import Orderform from "../orderform";
import dynamic from "next/dynamic";
import Chat from "../chat";
import {useLayoutEffect} from "react";
const Share = dynamic(() => import("@/components/ui/share"), {
    ssr: false,
});


const Layout = ({ children, type = "default" }) => {
    const router = useRouter();
useLayoutEffect(() => {
  document.querySelectorAll('img').forEach(img=>img.setAttribute('loading','lazy'))
}, [])
    
    return (
        <>
            {(type == "default"|| !['/vrc'].includes(router.pathname)) ? (
                <div className="layout">
                    <Breadcrumb />
                   {!["/online-html-css-editor",'/vrc',"/html-responsive-iframe-generator","/css/button-generator"].includes(router.pathname) &&  <Share />}
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
            {process.env.NODE_ENV=='development' && <Chat/>}
        </>
    );
};
export default Layout;

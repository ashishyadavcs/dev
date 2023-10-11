import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Orderpop from "@/components/orderpop";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/breadcrumb";
import Orderform from "../orderform";
import dynamic from "next/dynamic";
import {useEffect} from "react";
const Share = dynamic(() => import("@/components/ui/share"), {
    ssr: false,
});


const Layout = ({ children, type = "default" }) => {
    const router = useRouter();
    useEffect(() => {
        window.OneSignalDeferred = window.OneSignalDeferred || [];
        OneSignalDeferred.push(function(OneSignal) {
          OneSignal.init({
            appId: "baa200fc-25c8-41ae-a82c-6d182067d27b",
            safari_web_id: "web.onesignal.auto.62a04992-e924-4258-8064-560c4d6dc347",
            notifyButton: {
              enable: true,
            },
            subdomainName: "frontendzone",
          });
        });
       
    
      return () => {
        
      }
    }, [])
    
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
            <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
        </>
    );
};
export default Layout;

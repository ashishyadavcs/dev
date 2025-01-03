import Header from "@/components/layout/header";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/breadcrumb";
import dynamic from "next/dynamic";
import Footer from "./footer";
import { LoadFont } from "utils/common";
import Promotion from "../Promotion";

const Chat = dynamic(() => import("../chat"), {
    ssr: false,
});
const Share = dynamic(() => import("@/components/ui/share"), {
    ssr: true,
});
const Orderform = dynamic(() => import("../orderform"), {
    ssr: true,
});
const Orderpop = dynamic(() => import("@/components/orderpop"), {
    ssr: true,
});

const Layout = ({ children, type = "default", config }) => {
    const router = useRouter();
    config = {
        fontFamilyCSS:
            config?.fontFamilyCSS ||
            "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
    };
    return (
        <>
            <LoadFont config />
            {/* <ThemeContext.Provider value={""}> */}
            {type == "default" || !["/vrc"].includes(router.pathname) ? (
                <div className="layout">
                    <Breadcrumb />
                    {![
                        "/test",
                        "/dashboard",
                        "/cv-creator",
                        "/online-html-css-editor",
                        "/ashish-yadav",
                        "/vrc",
                        "/html-responsive-iframe-generator",
                        "/css/button-generator",
                    ].includes(router.pathname) && <Share />}
                    <Header progress={true} />

                    <main> {children}</main>
                    <Promotion />
                    <Footer />
                    <Orderpop>
                        <Orderform />
                    </Orderpop>
                    <div className="backlink sub-footer">
                        <a href="https://calculatorr.net">calculator</a>
                        <a href="https://physicsclass.co">physicsclass</a>
                        <a href="https://jsonviewer.guru">json viewer</a>
                    </div>
                </div>
            ) : (
                <main>
                    {children}
                    <Promotion />
                </main>
            )}

            {router.query.chat == 1 && <Chat />}
            {/* </ThemeContext.Provider> */}
        </>
    );
};
export default Layout;

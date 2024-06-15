import Header from "@/components/layout/header";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/breadcrumb";
import dynamic from "next/dynamic";

const Share = dynamic(() => import("@/components/ui/share"), {
    ssr: false,
});
const Orderform = dynamic(() => import("../orderform"), {
    ssr: false,
});
const Orderpop = dynamic(() => import("@/components/orderpop"), {
    ssr: false,
});
const Footer = dynamic(() => import("@/components/layout/footer"), {
    ssr: false,
});

const Layout = ({ children, type = "default", config }) => {
    const router = useRouter();
    config = {
        fontFamilyCSS:
            config?.fontFamilyCSS ||
            "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap",
    };
    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: ` function loadStyleSheet(path) {
                            var head = document.getElementsByTagName('head')[0],
                                link = document.createElement('link');
                            link.setAttribute('href', path);
                            link.setAttribute('rel', 'stylesheet');
                            link.setAttribute('type', 'text/css');
                            head.appendChild(link);
                        };
                      if (document.readyState === "complete") {
                        loadStyleSheet('${config.fontFamilyCSS}');
                      } else {
                        window.addEventListener("load", function(){ 
                            loadStyleSheet('${config.fontFamilyCSS}');
                        });
                      }`,
                }}
            ></script>
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
            {/* {process.env.NODE_ENV=='development' && <Chat/>} */}
            {/* </ThemeContext.Provider> */}
        </>
    );
};
export default Layout;

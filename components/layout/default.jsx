import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Orderpop from "@/components/orderpop";
import Settings from "@/components/settings";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/breadcrumb";
import Orderform from "../orderform";
import dynamic from "next/dynamic";
import { ismobile } from "utils/device";
import Fbchat from "../fb-chat";
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
                    <Settings />
                   {router.pathname!="/online-html-css-editor" &&  <Share />}
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
            {ismobile() && !router.pathname.includes("blog") && (
                <div
                    class="fb-page"
                    data-href="https://www.facebook.com/imdb"
                    data-width="340"
                    data-hide-cover="false"
                    data-show-facepile="true"
                ></div>
            )}
            <Fbchat/>
        </>
    );
};
export default Layout;

import "nprogress/nprogress.css";
import "@/styles/bootstrap.css";
import Layout from "../components/layout/layout";
import Router, { useRouter } from "next/router";
import store from "../store/store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { layout } from "../public/data/layout";
import nProgress from "nprogress";
import { SessionProvider } from "next-auth/react";
import { Globalstyle } from "@/styles/global";
import { theme } from "themes";
import { ThemeProvider } from "styled-components";
import SetTheme from "@/components/themesetting";
import { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persister = persistStore(store);

Router.events.on("routeChangeStart", () => {
    nProgress.start();
    !navigator.onLine ? toast.error("You are offline") : "";
});
Router.events.on("routeChangeComplete", () => {
    document.querySelector("header").classList.remove("active");
    nProgress.done();
});
Router.events.on("routeChangeError", () => nProgress.done());
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const router = useRouter();

    return (
        <SessionProvider session={session} basePath="/api/auth">
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <PersistGate persistor={persister}>
                        <Globalstyle />
                        <div className="loading-lcp">loading</div>
                        {!layout.landing.includes(router.pathname) ? (
                            <Layout config={pageProps.config}>
                                <Component {...pageProps} />
                                <ToastContainer
                                    position="bottom-left"
                                    autoClose="1000"
                                    theme="light"
                                />
                            </Layout>
                        ) : (
                            <>
                                <Component {...pageProps} />
                                <ToastContainer
                                    position="bottom-left"
                                    autoClose="1000"
                                    theme="light"
                                />
                            </>
                        )}
                    </PersistGate>
                </Provider>
            </ThemeProvider>
        </SessionProvider>
    );
}
export default MyApp;

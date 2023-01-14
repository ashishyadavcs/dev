import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import Router, { useRouter } from "next/router";
import store from "../store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { layout } from "../public/data/layout";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeComplete", () => {
    window.scrollTo(0, 0);
  });
  const router = useRouter();
  return (
    <Provider store={store}>
      {!layout.landing.includes(router.pathname) ? (
        <Layout>
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
    </Provider>
  );
}
export default MyApp;

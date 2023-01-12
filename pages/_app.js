import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import Router from "next/router";
import store from "../store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeComplete", () => {
    window.scrollTo(0, 0);
  });

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer position="bottom-left" autoClose="1000" theme="light" />
      </Layout>
    </Provider>
  );
}
export default MyApp;

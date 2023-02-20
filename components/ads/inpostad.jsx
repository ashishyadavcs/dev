import { useEffect } from "react";
import styles from "@/styles/ad.module.css";
const Inpostad = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <div className={styles.sidebarAd}>
        <span className="close">&times;</span>
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "100%" }}
          data-ad-client="ca-pub-3446097307175125"
          data-ad-slot="3684043265"
        ></ins>
      </div>
    </>
  );
};

export default Inpostad;

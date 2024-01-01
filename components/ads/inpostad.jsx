import { memo, useEffect } from "react";
import styles from "@/styles/ad.module.css";
const Inpostad = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {}
  }, []);

  return (
    <>
      <div className={styles.sidebarAd} style={{  width: "100%",overflow:"hidden"}}>
        <ins title="ads"
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "100%" }}
          data-ad-client="ca-pub-3446097307175125"
          data-ad-slot="3684043265"
        ></ins>
      </div>
    </>
  );
};

export default memo(Inpostad);

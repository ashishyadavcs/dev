import { memo, useEffect } from "react";
import styles from "@/styles/ad.module.css";
const Stickyad = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {}
    document.body.classList.add("stickyad");
    return () => {
      document.body.classList.remove("stickyad");
    };
  }, []);

  return (
    <>
      <div className={styles.footerads}>
        {/* <span
          className="close"
          onClick={(e) => {
            document.body.classList.remove("stickyad");
            if (e.currentTarget.parentElement) {
              e.currentTarget.parentElement.remove();
            }
          }}
        >
          &times;
        </span> */}
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

export default memo(Stickyad);

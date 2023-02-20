import { useEffect } from "react";

const Stickyad = () => {
  useEffect(() => {
    document.body.classList.add("stickyad");
    return () => {
      document.body.classList.remove("stickyad");
    };
  }, []);

  return (
    <>
      <div className="footerads">
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

export default Stickyad;

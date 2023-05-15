import { useState } from "react";
import Inpostad from "./ads/inpostad";

const DownloadPopup = ({ url }) => {
  const [active, setactive] = useState(false);
  const starttime = (e) => {
    var t = 20;
    let o = setInterval(() => {
      !(function c() {
        if (t > 0) (t -= 1), (document.querySelector(".pop .t").innerText = t);
        else {
          clearInterval(o);
          document.querySelector(".pop a").style.display = "block";
          document.querySelector(".pop p").style.display = "none";
        }
      })();
    }, 700);
  };

  return (
    <div className="download-pop">
      <style jsx>{`
        .pop .t {
          color: green;
          font-size: 20px;
          font-weight: bold;
        }
        .download-pop button,
        .pop a {
          padding: 10px 20px;
          border-radius: 10px;
          outline: none;
          border: none;
          background: teal;
          color: #fff;
          display: block;
          margin: 20px auto;
          transition: all 0.3s;
        }
        .pop a {
          display: none;
        }
        .download-pop button:hover {
          transform: scale(1.2) translateY(10px);
        }
        .pop p {
          font-size: 20px;
          text-align: center;
        }

        .pop {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 400px;
          max-width: 90%;
          z-index: 2;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          transform: translate(-50%, -50%);
          background: #ddd;
        }
        .pop-p {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, 0.8);
          z-index: 10;
          overflow: hidden;
        }
      `}</style>
      {active && (
        <div className="pop-p">
          <div className="pop">
            <p>
              Please wait for <span className="t"></span>s , we are creating
              download link
            </p>
            <Inpostad />
            <a href={url} download onClick={(e) => setactive(false)}>
              download
            </a>
          </div>
        </div>
      )}
      <Inpostad />
      <button
        id="apk-download"
        onClick={(e) => {
          setactive(true);
          starttime(e);
        }}
      >
        Download APK
      </button>
    </div>
  );
};

export default DownloadPopup;

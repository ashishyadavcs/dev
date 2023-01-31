import React from "react";
import Services from "../components/service";
import Image from "next/image";
import styles from "../styles/services.module.css";
import { openform } from "../utils/common";
import { createContext } from "react";
const Servicecount = createContext();
const Servicespage = () => {
  const data = { name: "Ashish" };

  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex align-items-center">
              <div>
                <h1 className="heading">
                  Web developement services<br></br>Fast , affordable and with
                  <br></br>{" "}
                  <span className="awesome-green">100% satisfaction</span>{" "}
                </h1>

                <button
                  onClick={openform}
                  className={`theme-btn cta-btn ${styles.cta}`}
                >
                  Get Your website Now
                </button>
              </div>

              {/* <h3 className="my-4">Trust Us, Get awesome work done by Us.</h3> */}
            </div>

            <div className="col-md-5 position-relative">
              <span style={{ pointerEvents: "none" }}>
                <Image
                  src={"/images/service/service.png"}
                  alt=""
                  objectFit="contain"
                  height={300}
                  width={500}
                  objectPosition="right"
                ></Image>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Services />
      </div>
    </>
  );
};
export default Servicespage;
export { Servicecount };

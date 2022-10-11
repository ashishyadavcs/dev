import React from "react";
import Services from "../components/service";
import Image from "next/image";
import styles from "../styles/services.module.css";
import { openform } from "../utils/common";
import { createContext } from "react";
import { redirect } from "next/dist/server/api-utils";
const Servicecount = createContext();
const Servicespage = () => {
  const data = { name: "Ashish" };

  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="heading">
                Web developement services<br></br>Fast , affordable and with
                <br></br>{" "}
                <span className="awesome-green">100% satisfaction</span>{" "}
              </h1>
              <p>
                Do you Need a website for your &nbsp;
                <span className="awesome-green">business</span>?<br></br> Get
                your website developed by expert web developer.
              </p>
              <button onClick={openform} className="theme-btn cta-btn">
                Get Your website Now
              </button>
              <div className="p-3">
                <h3>Trust Us, Get awesome work done by Us.</h3>
              </div>
            </div>

            <div className="col-md-5 position-relative">
              <span style={{ pointerEvents: "none" }}>
                <Image
                  src={"/images/service/service.png"}
                  alt=""
                  objectFit="contain"
                  height={600}
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

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
            <div className="col-md-7">
              <h1 className="heading">
                Web developement services<br></br>Fast , affordable and with
                <br></br>{" "}
                <span className="awesome-green">100% satisfaction</span>.{" "}
              </h1>
              <p>
                Need a website for your{" "}
                <span className="awesome-green">business</span>. Get your
                website developed by expert web developer.
              </p>
              <button onClick={openform} className="theme-btn cta-btn">
                Get Your website Now
              </button>
              <div className="p-3">
                <h3>Trust Us, Get awesome work done by Us.</h3>
              </div>
            </div>

            <div className="col-md-5 position-relative">
              <Image
                src={"/images/service/service.jpg"}
                alt=""
                layout="fill"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Servicecount.Provider value={data}>
          <Services />
        </Servicecount.Provider>
      </div>
    </>
  );
};
export default Servicespage;
export { Servicecount };

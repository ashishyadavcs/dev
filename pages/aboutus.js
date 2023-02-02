import Image from "next/image";
import React from "react";
import styles from "../styles/about.module.css";

const Aboutus = () => {
  return (
    <div className="container">
      <div
        className={`${styles.bg} d-flex align-items-center position-relative`}
      >
        <h1>About Us</h1>
        <Image
          src={"/images/card.jpg"}
          alt=""
          layout="fill"
          objectFit="cover
      "
        ></Image>
        <div className="bottom-left">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-12">
          <h2>Who we are ?</h2>
          <p>
            We are professional website designer. Having mastery in website
            design and seo . We are expert in creating animated website and
            awesome ui that attracts users and visitors .{" "}
          </p>

          <h2>what We Do ?</h2>
          <p>
            We serve our clients awesome web design services. We are available
            24x7 to provide support . we are dedicated to your uplift your brand
            by utlizing our eceptional web design and seo skills.{" "}
          </p>
        </div>
        <div className="col-md-6 col-12 position-relative"></div>
      </div>
    </div>
  );
};

export default Aboutus;

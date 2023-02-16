import styles from "@/styles/lp.module.css";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { openwhatsapp } from "utils/device";
const Page = () => {
  return (
    <>
      <NextSeo
        description="website services,Are you tired of managing your website on your own? Do you
                struggle to keep your content fresh and up-to-date? Our website
                updating service can help!"
        title="website services | Redesign | Error Fix | Update Website | Contact now"
      />
      <section className={`${styles.hero} ${styles.overlay}`}>
        <Image src="/dev/develop.jpg" layout="fill" objectFit="cover" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>website services</h1>
              <p>
                Are you tired of managing your website on your own? Do you
                struggle to keep your content fresh and up-to-date? Our website
                updating service can help!
              </p>
              <p>
                We offer a variety of website maintenance packages to fit your
                specific needs. Our services include regular website backups,
                security updates, and performance optimization to ensure your
                website is running smoothly and efficiently.
              </p>
            </div>
            <div className="col-md-6">
              <h2>Website fix service</h2>
              <p>
                I will fix your website error of html, css, javascript or any
                other type of error
              </p>
              <h2>Website fix redesign service</h2>
              <p>
                Redesign your outdated website with attractive features and
                design according to modern trends of website design
              </p>
              <h2>Website update service</h2>
              <p>
                Don&apos;t let outdated content or technical issues hold your
                website back. Contact us today to learn more about our website
                updating service and how we can help your business thrive
                online!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.video}>
        <button
          className="theme-btn mx-auto d-block my-4"
          onClick={(e) => window.open(openwhatsapp())}
        >
          contact now
        </button>
        <video autoPlay loop muted>
          <source src="/dev/website.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
};

export default Page;

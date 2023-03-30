import styles from "../styles/Home.module.css";
import Orderform from "../components/orderform";
import Services from "../components/service";
import Testimonial from "../components/testimonial";
import { BsCheck2Circle } from "react-icons/bs";
import { NextSeo, OrganizationJsonLd } from "next-seo";
import Upload from "@/components/upload";
import Blog from "@/components/banners/blog";
import Ashish from "@/components/ashish";
import Image from "next/image";
import { openform } from "utils/common";
import Whatsapp from "@/components/whatsapp";
import Blogpost from "@/components/blogpost";
import Link from "next/link";
import Seo from "@/components/organization";
import { openwhatsapp } from "utils/device";
export default function Home() {
  const steps = [
    "Submit your order",
    "Make half payment to confirm your order",
    "Review Your website",
    "confirm order completed",
    "Make remaining Payment.",
    "Rate us",
  ];
  return (
    <>
      <Seo />
      <div className={styles.banner}>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12">
              <h1 className="gradient-text heading text-capitalize">
                Get your website<br></br> designed & developed<br></br> by
                expert web developer
                <br></br>
              </h1>

              <ul className="list-unstyled mt-3">
                {steps.map((li, i) => {
                  return (
                    <li key={i} className="mb-2 d-flex align-items-center">
                      <BsCheck2Circle color="#4cd964" size={20} />
                      <span className="mx-2">{li}</span>
                    </li>
                  );
                })}
              </ul>

              <a
                className={styles.cta}
                onClick={(e) => {
                  e.currentTarget.href = openwhatsapp();
                }}
              >
                Contact Now
              </a>
            </div>
            <div className="col-md-5 col-12 d-flex justify-content-end">
              <Image
                alt="website design services in india"
                objectFit="contain"
                priority
                height={300}
                width={400}
                src="/dev/business-website.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.landing} homepage`}>
        <div className="container">
          <div className="row my-4 pt-4">
            <div className="col-md-5">
              <Image
                alt="website design services in india"
                objectFit="contain"
                height={300}
                width={400}
                src="/dev/website-design-services.png"
              />
            </div>
            <div className="col-md-7 d-flex flex-column justify-content-center">
              <h2 className="mt-3 mt-md-0">
                Are you looking for a website for your business?
              </h2>
              <p>
                Are you looking to establish a strong online presence for your
                business? Look no further than our website development services
              </p>

              <p>
                will work closely with you to understand your unique needs and
                goals, and create a custom website design that accurately
                represents your brand and effectively communicates your message
                to your target audience. We use the latest design trends and
                technology to create visually appealing and user-friendly
                websites that are optimized for all devices
              </p>
            </div>
          </div>
          <div className="row my-4 d-flex align-items-center">
            <div className="col-md-7">
              <h2 className="mt-5 mt-md-0">Redesign your old website</h2>
              <p>
                Is your website outdated and in need of a fresh look? Our
                website redesign services are here to help<br></br>
                <br></br> Invest in a website redesign and take your online
                presence to the next level. Contact us today to schedule a
                consultation
              </p>
              <p>
                Whether you are starting a new business, rebranding, or simply
                need to update your existing website, our website development
                services are here to help. Let us help you make the most of your
                online presence and reach your target audience with a website
                that is professional, functional, and effective
              </p>
            </div>
            <div className="col-md-5">
              <Image
                alt="website design company"
                objectFit="contain"
                height={400}
                width={500}
                src="/dev/webdesign-service.png"
              />
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-5">
              <Image
                src="/dev/optimized-website.png"
                height={400}
                width={400}
                alt="website design services near me"
              />
            </div>
            <div className="col-md-7">
              <h2>Optimized website for maximum performance</h2>
              <p>
                Maximize your online potential with our website optimization
                services we understand that having a great website is just the
                first step in achieving online success. That&apos;s why we offer
                comprehensive website optimization services to help you drive
                traffic, improve conversions, and reach your goals
              </p>
              <p>
                In addition to improving your search engine rankings, our
                website optimization services can help you increase your
                website&apos;s speed and security, making it more accessible and
                trustworthy to your visitors. We&apos;ll also provide ongoing
                monitoring and support to keep your website performing at its
                best.
              </p>
              <a
                className={styles.cta}
                onClick={(e) => {
                  e.currentTarget.href = openwhatsapp();
                }}
              >
                Order Website Now
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-center my-4">Latest blog posts</h2>
          <Blogpost />
          <Link href="/blog">
            <a className="theme-btn d-block mx-auto text-center">
              Read More Blogs
            </a>
          </Link>
        </div>
      </div>
      <Whatsapp />
    </>
  );
}

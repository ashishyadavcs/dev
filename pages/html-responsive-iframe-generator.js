import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import tools from "public/data/tools";
import React, { useEffect, useState } from "react";
const Page = () => {
  const [iframe, setiframe] = useState({
    height: "400",
    width: "100%",
    frameBorder: 0,
    src: "https://frontendzone.com",
  });
  useEffect(() => {
    const iframe=document.querySelector(".preview iframe");
    iframe.removeAttribute("class")
    document.querySelector("textarea").value=iframe.parentElement.innerHTML
  }, [iframe])
  const showresult=()=>{
    document.querySelector(".result").classList.add("active")
  }
  return (
    <>
      <style jsx>{`
        .result {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.3s;
        }
        .result.active {
          overflow: unset;
          max-height: 400px;
          opacity: 1;
          background: #ddd;
          padding: 10px 20px;
          margin: 20px 0 0;
        }
        textarea {
          min-height: 100px;
          width: 100%;
          margin: 20px 0 0;
          padding: 10px;
          outline: none;
          resize: none;
        }
        .others {
          background: #ddd;
          padding: 10px;
          margin: 10px 0;
          border-radius: 8px;
        }
        .others ul {
          display: flex;
          gap: 10px;
        }
        .content ol li {
          display: flex;
        }
        .title {
          background: linear-gradient(to right, red, blue);
          color: #fff;
        }
        .content {
          background: #f1f1f1;
          border-top: 4px solid #999;
          margin-top: 80px;
        }
        .content * {
          color: #555;
        }
      `}</style>
      <NextSeo
        title="HTML Responsive Iframe generator : generate online & copy code"
        description="HTML responsive iframe generator online, generate responsive html iframe with this free tool"
      />
      <div className="p-3  mb-4 text-white title">
        <h1 className="text-center mt-4">HTML Responsive Iframe generator</h1>
        <p className="text-center text-white">
          generate responsive iframe online
        </p>
      </div>
      <div className="container my-4">
        <div className="row ">
          <div className="col-md-6 mb-4 mb-md-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.scroll(0, 280);
                showresult();
              }}
            >
              <label className="d-flex flex-column justify-content-center">
                Iframe URL
                <input
                  value={iframe.src}
                  onChange={(e) =>
                    setiframe((prev) => ({ ...prev, src: e.target.value }))
                  }
                  className="ml-2"
                  type="url"
                  placeholder="https://frontendzone.com"
                />
              </label>
              <label className="d-flex flex-column justify-content-center">
                height
                <input
                  value={iframe.height}
                  onChange={(e) =>
                    setiframe((prev) => ({ ...prev, height: e.target.value }))
                  }
                  className="ml-2"
                  type="number"
                />
              </label>
              <label className="d-flex flex-column justify-content-center">
                width
                <input
                  value={iframe.width}
                  onChange={(e) =>
                    setiframe((prev) => ({ ...prev, width: e.target.value }))
                  }
                  className="ml-2"
                  type="text"
                />
              </label>
              <label className="d-flex">
                frameborder
                <input
                  checked={iframe.frameBorder}
                  onChange={(e) =>
                    setiframe((prev) => ({
                      ...prev,
                      frameBorder: e.target.checked === true ? 1 : 0,
                    }))
                  }
                  type="checkbox"
                />
              </label>
              <button className="theme-btn mt-4 d-flex" type="submit">
                generate
              </button>
            </form>
            <div className="result">
              <textarea readOnly></textarea>
              <button
                onClick={(e) => {
                  e.target.previousElementSibling.select();
                  document.execCommand("copy");
                }}
                className="theme-btn "
              >
                copy code
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="preview">
              <iframe {...iframe}></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="content py-4">
        <div className=" container">
          <h2>What is online HTML Responsive iframe generator</h2>
          <p>
            This is where the Responsive iFrame Generator comes into play. This
            innovative tool provides web developers with a seamless solution for
            creating responsive iframes that dynamically adjust to fit any
            device or viewport size. In this article, we will explore the
            concept of responsive iframes, delve into the importance of
            responsive design, discuss the challenges faced, and examine how the
            Responsive iFrame Generator simplifies the process of creating and
            implementing responsive iframes.
          </p>
          <Image
            src="/dev/tools/html-responsive-iframe-generator.png"
            height="600"
            width="800"
            alt="html-responsive-iframe-generator"
          />
          <h2>The key features of the Responsive iFrame Generator include</h2>
          <ol>
            <li>
              <p>
                <strong>Test Across Devices:</strong> Always test the responsive
                iframes on a variety of devices and screen sizes to verify their
                adaptability and performance. This will help identify any issues
                and fine-tune the customization parameters if needed.
              </p>
            </li>
            <li>
              <p>
                <strong> Content Optimization:</strong> Optimize the content
                within the iframes for mobile devices. Consider compressing
                images, minimizing external scripts, and ensuring fast loading
                times to enhance the overall user experience.
              </p>
            </li>
            <li>
              <p>
                <strong> Cross-Browser Compatibility:</strong> Test the
                responsive iframes across different browsers to ensure
                consistent behavior and appearance. Cross-browser testing helps
                identify any browser-specific quirks or inconsistencies.
              </p>
            </li>
            <li>
              <p>
                <strong>Accessibility:</strong> Ensure that the embedded content
                within the iframes remains accessible to all users. Consider
                adding alternative text, providing captions for videos, and
                adhering to accessibility guidelines.
              </p>
            </li>
            <li>
              <p>
                <strong>Regular Updates:</strong> Stay updated with the latest
                versions of the Responsive iFrame Generator and any dependencies
                it may have. Regular updates often include bug fixes, security
                enhancements, and new features.
              </p>
            </li>
          </ol>
          <h2>application of iframe generator</h2>
          <p>
            An iframe (inline frame) is an HTML element used to embed content
            from another source within a web page. An iframe generator is a tool
            that helps you create and customize iframes easily, without having
            to write the HTML code manually. Here are some common applications
            of iframe generators:
          </p>
          <ol>
            <li>
              <p>
                <strong>Embedding external content:</strong> You can use an
                iframe generator to embed content from external sources such as
                videos, maps, social media feeds, or other websites. For
                example, you can generate an iframe code to embed a YouTube
                video or a Google Maps location on your webpage.
              </p>
            </li>
            <li>
              <p>
                <strong>Displaying advertisements:</strong> Ad networks often
                provide advertisers with iframe codes to embed their ads on
                different websites. An iframe generator can help you create the
                necessary code to display ads within specific sections of your
                webpage.
              </p>
            </li>
            <li>
              <p>
                <strong> Including third-party widgets</strong>: Many websites
                use third-party widgets for various functionalities such as chat
                support, weather updates, or social media buttons. An iframe
                generator can simplify the process of integrating these widgets
                into your website by generating the appropriate iframe code.
              </p>
            </li>
            <li>
              <p>
                <strong> Cross-domain communication:</strong> Iframes can
                facilitate communication between different domains or
                subdomains. For instance, you can use an iframe generator to
                create an iframe that loads content from another domain and
                enables communication between the two domains using JavaScript.
              </p>
            </li>
            <li>
              <p>
                <strong> Creating sandboxed environments:</strong> Iframes can
                provide a sandboxed environment for executing potentially
                untrusted code. This can be useful for embedding user-generated
                content or interactive applications while maintaining a secure
                separation from the main page.
              </p>
            </li>
          </ol>
          <div className="others">
            <b>Try our other tools</b>
            <ul className="list-unstyled">
              {tools.map((t, i) => (
                <li key={i}>
                  <Link href={t.href}>
                    <a>{t.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <h2>
            What is an{" "}
            <a href="https://www.w3schools.com/tags/tag_iframe.ASP">iframe</a>{" "}
            in HTML5 & How to create this from iframe generator
          </h2>
          <p>
            An iframe, short for "inline frame," is an HTML element used to
            embed another HTML document within the current document. It allows
            you to display content from another web page or website within a
            designated area of the current page. The content displayed within
            the iframe is independent of the surrounding page and can be a
            completely separate HTML document with its own styles, scripts, and
            functionality.
          </p>
          <p>
            The iframe element is created using the &lt;iframe&gt; tag in HTML.
            It requires a source attribute (src) that specifies the URL of the
            content to be loaded within the iframe. Here's an example of how an
            iframe can be used:
          </p>
          <iframe className="my-4"
            width="100%"
            height="445"
            src="https://www.youtube.com/embed/TMXFE9oedCw"
            title="html-responsive-iframe-generator"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2>conclusion</h2>
          <p>
            The Responsive iFrame Generator serves as a valuable tool for web
            developers seeking a streamlined solution for creating and
            implementing responsive iframes. By simplifying the process and
            automating the adaptation of iframes to different screen sizes, this
            tool eliminates the challenges associated with responsive iframe
            integration. It empowers developers to seamlessly embed external
            content while ensuring a consistent user experience across devices.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;

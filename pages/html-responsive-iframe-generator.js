import Toc from "@/components/tableofcontent";
import { NextSeo, ProductJsonLd } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import tools from "public/data/tools";
import React, { useEffect, useState } from "react";
const Page = () => {
    const [iframe, setiframe] = useState({
        name: "My iframe",
        title: "frontendzone",
        height: "510",
        width: "100%",
        frameBorder: 1,
        src: "https://frontendzone.com",
    });
    const checkytb=(url)=>{
        if(url.includes('www.youtube.com/watch?v=')){
         const v=url.split('v=')[1]
           return `https://www.youtube.com/embed/${v}`
        }else{
            return url
        }
    }
    useEffect(() => {
        const iframe = document.querySelector(".preview iframe");
        iframe.removeAttribute("class");
        document.querySelector("textarea").value = iframe.parentElement.innerHTML;
    }, [iframe]);
    const showresult = () => {
        document.querySelector(".result").classList.add("active");
    };
    return (
        <>
            <style jsx>{`
              .toc{
                width: 600px;
                max-width:100%;
                margin: 10px auto;
              }
             
                .form input {
                    padding: 10px;
                    color: #555;
                    border: 2px solid #ddd;
                    outline: none;
                    font-size: 16px;
                    width: 100%;
                }

                .form input:focus {
                    border-color: blue;
                }
                .form img {
                    width: 50%;
                    height: 100%;
                    object-fit: cover;
                }
                .form button {
                    padding: 10px 20px;
                    font-size: 16px;
                    background: blue;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    width: 100%;
                }
                .form label {
                    position: relative;
                    margin-bottom: 17px;
                }
                .form label:has(input:focus, input:not(:placeholder-shown)):before {
                    top: 0%;
                    background: #fff;
                    z-index: 1;
                    padding: 0 5px;
                    transform: none;
                    color: #888;
                   
                }
                .form input:not(:empty){border:2px solid blue}
                .form label:has(input:focus)::before {
                    color: blue;
                }
                .form input::placeholder {
                    opacity: 0;
                }
                .form label::before {
                    color: #ccc;
                    content: attr(for);
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 10px;
                    pointer-events: none;
                    transition: all 0.3s;
                }
                .text-white {
                    color: #fff;
                }
                .result {
                    max-height: 0;
                    overflow: hidden;
                    opacity: 0;
                    transition: all 0.3s;
                }
                .form label:has(input[type="checkbox"]) {
                    align-items: center;
                    justify-content: space-between;
                    border: 2px solid #ddd;
                    padding: 5px 10px;
                    display: flex;
                    width: 100%;
                }
                .form label:has(input[type="checkbox"]) input {
                    width: 50px;
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
                    max-width: 100%;
                }
                .others ul {
                    margin-top: 10px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .content ol li {
                    display: flex;
                }
                .title {
                  font-size:28px;
                  background: teal;

                    color: #fff;
                }
                .title h1{
                  font-size:30px;
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
                title="🟢 HTML Responsive Iframe Generator : copy code ✅"
                description="HTML responsive iframe generator online, generate responsive html iframe embed code with this free tool.Generate iframe code to embed any HTML doc or page to any website or blog with live preview options and customizations"
            />
            <ProductJsonLd
                productName="HTML Responsive iframe generator"
                type="Product"
                brand="frontendzone"
                description="HTML responsive iframe generator online, generate responsive html iframe embed code with this free tool.Generate iframe code to embed any HTML doc or page to any website or blog with live preview options and customizations"
                aggregateRating={{
                    worstRating: "1",
                    bestRating: "5",
                    ratingValue: "4.5",
                    ratingCount: "505435",
                }}
            />
            <div className="p-3  mb-4  title">
                <h1 className="text-center text-white mt-4">HTML Responsive Iframe generator</h1>
                <p className="text-center text-white">Generate responsive iframe online</p>
              
            </div>
            <div className="toc">
            <Toc title="table of content"/>
            </div>
            <div className="container my-4">
                <div className="row ">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <form
                            className="form"
                            onSubmit={e => {
                                e.preventDefault();
                                window.scroll(0, 280);
                                showresult();
                            }}
                        >
                            <label
                                htmlFor="iframe url"
                                className="d-flex flex-column justify-content-center"
                            >
                                <input
                                    value={iframe.src}
                                    onChange={e =>
                                        setiframe(prev => ({ ...prev, src:checkytb(e.target.value)}))
                                    }
                                    type="url"
                                    placeholder="https://frontendzone.com"
                                />
                            </label>
                            <label
                                htmlFor="name"
                                className="d-flex flex-column justify-content-center"
                            >
                                <input
                                    value={iframe.name}
                                    placeholder=""
                                    onChange={e =>
                                        setiframe(prev => ({ ...prev, name: e.target.value }))
                                    }
                                    type="text"
                                    spellCheck="false"
                                />
                            </label>
                            <label
                                htmlFor="title"
                                className="d-flex flex-column justify-content-center"
                            >
                                <input
                                    placeholder=""

                                    value={iframe.title}
                                    onChange={e =>
                                        setiframe(prev => ({ ...prev, title: e.target.value }))
                                    }
                                    spellCheck="false"
                                    type="text"
                                />
                            </label>
                            <label
                                htmlFor="height"
                                className="d-flex flex-column justify-content-center"
                            >
                                <input
                                    placeholder=""
                                    value={iframe.height>1000?1000:iframe.height}
                                    onChange={e =>
                                        setiframe(prev => ({ ...prev, height: e.target.value }))
                                    }
                                    type="number"
                                />
                            </label>
                            <label
                                htmlFor="width"
                                className="d-flex flex-column justify-content-center"
                            >
                                <input 
                                    placeholder=""

                                    value={iframe.width}
                                    onChange={e =>
                                        setiframe(prev => ({ ...prev, width: e.target.value }))
                                    }
                                    type="text"
                                />
                            </label>
                            <label className="d-flex">
                                frameborder
                                <input
                                    placeholder=""

                                    checked={iframe.frameBorder}
                                    onChange={e =>
                                        setiframe(prev => ({
                                            ...prev,
                                            frameBorder: e.target.checked === true ? 1 : 0,
                                        }))
                                    }
                                    type="checkbox"
                                />
                            </label>
                            <button className="theme-btn mt-4 d-flex" type="submit">
                                generate iframe
                            </button>
                        </form>
                        <div className="result">
                            <textarea readOnly></textarea>
                            <button
                                onClick={e => {
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
            <div className="content article py-4">
                <div className=" container">
                    <div className="row">
                        <p>
                            create a responsive iframe using is Responsive iframe generator with
                            live preview and customization for embedding a webpage into your
                            website. You can customize the UI according to your preferences with
                            this iframe generator tool.
                        </p>

                        <div className="col-md-6">
                            <h2 className="mt-4">
                                What is online HTML Responsive iframe generator
                            </h2>

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
                        </div>
                        <div className="col-md-6">
                            {" "}
                            <Image
                                src="/dev/tools/html-responsive-iframe-generator.png"
                                height="600"
                                width="800"
                                alt="html-responsive-iframe-generator"
                            />
                        </div>
                    </div>

                    <h2>The key features of the Responsive iFrame Generator include</h2>
                    <ol>
                        <li>
                            <p>
                                <strong>Test Across Devices:</strong> Always test the responsive
                                iframes on a variety of devices and screen sizes to verify their
                                adaptability and performance. This will help identify any issues and
                                fine-tune the customization parameters if needed.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong> Content Optimization:</strong>  Optimize the content within
                                the iframes for mobile devices. Consider compressing images,
                                minimizing external scripts, and ensuring fast loading times to
                                enhance the overall user experience.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong> Cross-Browser Compatibility:</strong> Test the responsive
                                iframes across different browsers to ensure consistent behavior and
                                appearance. Cross-browser testing helps identify any
                                browser-specific quirks or inconsistencies.{" "}
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Accessibility:</strong> Ensure that the embedded content
                                within the iframes remains accessible to all users. Consider adding
                                alternative text, providing captions for videos, and adhering to
                                accessibility guidelines.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Regular Updates:</strong> Stay updated with the latest
                                versions of the Responsive iFrame Generator and any dependencies it
                                may have. Regular updates often include bug fixes, security
                                enhancements, and new features.
                            </p>
                        </li>
                    </ol>
                    <h2 className="mt-4">application of iframe generator</h2>
                    <p>
                        An iframe (inline frame) is an HTML element used to embed content from
                        another source within a web page. An iframe generator is a tool that helps
                        you create and customize iframes easily, without having to write the HTML
                        code manually. Here are some common applications of iframe generators:
                    </p>
                    <ol>
                        <li>
                            <p>
                                <strong>Embedding external content:</strong> You can use an
                                responsive iframe generator to embed content from external sources
                                such as videos, maps, social media feeds, or other websites. For
                                example, you can generate an iframe code to embed a YouTube video or
                                a Google Maps location on your webpage.
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
                                <strong> Including third-party widgets</strong>: Many websites use
                                third-party widgets for various functionalities such as chat
                                support, weather updates, or social media buttons. An responsive
                                iframe generator can simplify the process of integrating these
                                widgets into your website by generating the appropriate iframe code.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong> Cross-domain communication:</strong> Iframes can facilitate
                                communication between different domains or subdomains. For instance,
                                you can use an iframe generator to create an iframe that loads
                                content from another domain and enables communication between the
                                two domains using JavaScript.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong> Creating sandboxed environments:</strong> Iframes can
                                provide a sandboxed environment for executing potentially untrusted
                                code. This can be useful for embedding user-generated content or
                                interactive applications while maintaining a secure separation from
                                the main page.
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
                    <h2 className="mt-4">
                        What is an{" "}
                        <a href="https://www.w3schools.com/tags/tag_iframe.ASP">iframe</a> in HTML5
                        & How to create this from iframe generator
                    </h2>
                    <p>
                        An iframe, short for "inline frame," is an HTML element used to embed
                        another HTML document within the current document. It allows you to display
                        content from another web page or website within a designated area of the
                        current page. The content displayed within the iframe is independent of the
                        surrounding page and can be a completely separate HTML document with its own
                        styles, scripts, and functionality.
                    </p>
                    <p>
                        The iframe element is created using the &lt;iframe&gt; tag in HTML. It
                        requires a source attribute (src) that specifies the URL of the content to
                        be loaded within the iframe. Here's an example of how an iframe can be used:
                    </p>
                    <iframe
                        className="my-4"
                        width="100%"
                        height="445"
                        src="https://www.youtube.com/embed/TMXFE9oedCw"
                        title="html-responsive-iframe-generator"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <h2>conclusion</h2>
                    <p>
                        The Responsive iFrame Generator serves as a valuable tool for web developers
                        seeking a streamlined solution for creating and implementing responsive
                        iframes. By simplifying the process and automating the adaptation of iframes
                        to different screen sizes, this tool eliminates the challenges associated
                        with responsive iframe integration. It empowers developers to seamlessly
                        embed external content while ensuring a consistent user experience across
                        devices.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Page;

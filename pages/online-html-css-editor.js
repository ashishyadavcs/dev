import { useEffect, useState } from "react";
import "highlight.js/styles/github.css";
import styles from "@/styles/editor.module.css";
import hljs from "highlight.js";
import Image from "next/image";
import { FaCss3, FaHtml5, FaJava } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { NextSeo, ProductJsonLd } from "next-seo";
const Page = () => {
  const [code, setcode] = useState({
    html: `<main>
  <div class="col">
    <label class="otl-label">Environmentally-friendly silicone leather</label>

    <h2>Timeless looks and timeless quality
      that feel right at home in your hand</h2>
    <small>Built to last, and it feels so good you won't want to put it down.</small>
  </div>
</main>

<small>I'm just a Xiaomi and Leica fan. Content inspired in the Xiaomi 12S Ultra <a href="https://www.mi.com/global/product/xiaomi-12s-ultra/" target="_blank">official page</a></small>`,
    css: `* {
  color: #fff;
  font-family: sans-serif;
  box-sizing: border-box;
}
Body {
  background: #000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

main {
  max-width: 800px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  background: url("https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-12s-ultra/img_npc_04.jpg?f=webp")
    no-repeat center center;
  background-size: contain;
}
main .col {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding: 2rem;
}

.otl-label {
  border: 1px solid #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 12px;
  width: fit-content;
}
small {
  color: #999;
}
`,
    js: `document.querySelector("h2").onclick=function(){
alert("hi")
}`,
  });
  useEffect(() => {
    hljs.highlightAll();
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.which == 83) {
        e.preventDefault();
      }
    });

    document.querySelector(
      "iframe"
    ).contentDocument.body.innerHTML = `<style>${code.css}</style>${code.html}`;

    try {
      document.querySelector("iframe").contentWindow.eval(code.js);
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      document.querySelector(`.${styles.saving}`).style.opacity = 1;
    }, 300);
    setTimeout(() => {
      document.querySelector(`.${styles.saving}`).style.opacity = 0;
    }, 600);
  }, [code]);
  const faqs = [
    {
      que: `What is an online HTML editor?`,
      ans: `An online HTML editor is a web-based tool that allows users to
              create, edit and publish HTML code directly from their web
              browser.`,
    },

    {
      que: `What are the benefits of using an online HTML editor?`,
      ans: `   The benefits of using an online HTML editor include convenience,
            accessibility, and ease of use. It can be accessed from anywhere
            with an internet connection, requires no software to be installed,
            and typically has a user-friendly interface.`,
    },
    {
      que: `Can I create a website with an online HTML editor?`,
      ans: ` Yes, you can create a website using an online HTML editor. You can
            write HTML code, add CSS and JavaScript, preview the website and
            publish it online.`,
    },
    {
      que: `Is an online HTML editor free to use?`,
      ans: `   Some online HTML editors are free to use, while others may offer a
            free trial or limited functionality and require payment for full
            access.`,
    },
    {
      que: `Do I need to know HTML to use an online HTML editor?`,
      ans: `  It is helpful to have some knowledge of HTML, but some online HTML
            editors have a visual interface and can be used without writing
            code.`,
    },
    {
      que: `What are some popular online HTML editors?`,
      ans: `   Some popular online HTML editors are CodePen, JS Bin, JSFiddle, and
            Thimble by Mozilla.`,
    },
  ];

  const settab = (tab) => {
    document
      .querySelectorAll(`.${styles.tab} li`)
      .forEach((el) => el.classList.remove(`${styles.active}`));
    document
      .querySelectorAll(`.${styles.tab} li`)
      [tab].classList.add(`${styles.active}`);
    document
      .querySelectorAll(`.${styles.code} textarea`)
      .forEach((el) => el.classList.add("d-none"));
    document
      .querySelectorAll(`.${styles.code} textarea`)
      [tab].classList.remove("d-none");
  };
  return (
    <>
      <NextSeo
        title="Online html css editor ➜ #𝟙"
        description="Edit your html and css online with frontendzone online html editor"
        canonical={`${process.env.NEXT_PUBLIC_APP_URL}/online-html-css-editor`}
        openGraph={{
          type: "software",
          url: `${process.env.NEXT_PUBLIC_APP_URL}/online-html-css-editor`,
          title: "Online html css editor",
          description: ` Edit your html and css online with frontendzone online html editor`,

          images: [
            {
              url: "/online-html-editor.png",
              width: 400,
              height: 400,
              alt: "Online html css editor",
              type: "image/png",
            },
            {
              url: "/online-html-editor.png",
            },
          ],
          siteName: process.env.NEXT_PUBLIC_APP_NAME,
        }}
      />
      <ProductJsonLd
        productName="free Online html editor"
        type="Product"
        brand="frontendzone"
        description="Edit your html and css online with frontendzone online html editor"
        aggregateRating={{
          worstRating: "1",
          bestRating: "5",
          ratingValue: "4.5",
          ratingCount: "505435",
        }}
      />
      <div className={` my-3 ${styles.editor}`}>
        <div className="text-center container">
          <h1>
            <strong> Realtime Free Online Html Editor 👋</strong>
          </h1>
          <p>Online HTML Editor : The Convenient Solution for HTML Coding</p>
        </div>
        <div className={styles.main} style={{ background: "#ddd" }}>
          <div className={styles.left}>
            <span className={styles.saving}>saved...</span>
            <ul className={styles.tab}>
              <li onClick={(e) => settab(0)} className={styles.active}>
                <FaHtml5 className="mr-2" />
                html
              </li>
              <li onClick={(e) => settab(1)}>
                <FaCss3 className="mr-2" />
                css
              </li>
              <li onClick={(e) => settab(2)}>
                <DiJavascript className="mr-2" />
                Javascript
              </li>
            </ul>
            <div className={styles.code}>
              <textarea
                value={code.html}
                onChange={(e) =>
                  setcode((code) => ({
                    ...code,
                    html: e.target.value,
                  }))
                }
                className={styles.html}
              ></textarea>
              <textarea
                value={code.css}
                onChange={(e) =>
                  setcode((code) => ({
                    ...code,
                    css: e.target.value,
                  }))
                }
                className={`${styles.css} d-none`}
              ></textarea>

              <textarea
                value={code.js}
                onChange={(e) =>
                  setcode((code) => ({
                    ...code,
                    js: e.target.value,
                  }))
                }
                className={`${styles.js} d-none`}
              ></textarea>
            </div>
          </div>

          <iframe className={styles.right}></iframe>
        </div>
      </div>
      <div className="container my-3">
        <div className="row my-4">
          <div className="col-md-6">
            <p>
              HTML (HyperText Markup Language) is a language used for creating
              and designing websites. Coding in HTML can be a difficult and
              time-consuming task for beginners, but thanks to the advancement
              of technology, online HTML editors make it easier and more
              convenient to code.
            </p>
            <p>
              An online HTML editor is a web-based tool that allows users to
              create and edit HTML code from their web browser. These tools
              offer a variety of device, whether it be a laptop, desktop,
              tablet, or smartphone. It also eliminates the need for users to
              install software on their computer, saving both time and disk
              space.
            </p>
          </div>
          <div className="col-md-6">
            <Image
              height={400}
              width={700}
              className="my-3"
              objectFit="cover"
              src="/online-html-editor.png"
              alt="online html editor"
            />
          </div>
        </div>
        <h2>advantage of online html editor</h2>
        <p>
          Another advantage of online HTML editors is that they offer an
          intuitive and user-friendly interface, making it easier for beginners
          to start coding. They also typically include a library of pre-designed
          templates and elements, such as buttons, images, and forms, that can
          be easily added to a website with a few clicks.
        </p>
        <p>
          In addition, many online HTML editors also provide real-time previews
          of the website as it is being coded. This allows users to see exactly
          how their website will look and interact before it is published,
          making it easier to identify and fix any errors.
        </p>
        <p>
          There are many different online HTML editors available, each with its
          own set of features and capabilities. Some popular options include
          Wix, Squarespace, Weebly, and HTML Editor.net.
        </p>
        <p>
          However, it is important to note that online HTML editors have some
          limitations. They may not offer the same level of control and
          customization as traditional HTML coding, and some may require users
          to upgrade to a paid plan to access certain features.
        </p>
        <p>
          In conclusion, online HTML editors are a convenient solution for
          coding websites, especially for beginners. With their user-friendly
          interfaces and real-time previews, users can create and edit their
          websites from anywhere, without the need for software installation.
          Just keep in mind the limitations and choose the editor that best
          suits your needs.
        </p>

        <div
          className={styles.faq}
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <h2 className="mb-4">FAQ on online html editor</h2>
          {faqs.map((faq, i) => (
            <div
              key={i}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3 itemProp="name">{faq.que}</h3>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{faq.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;

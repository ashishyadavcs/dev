import { useEffect, useState } from "react";
import "highlight.js/styles/github.css";
import styles from "@/styles/editor.module.css";
import hljs from "highlight.js";
import Image from "next/image";
import { FaCss3, FaHtml5, FaJava } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { NextSeo } from "next-seo";
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
    js: "",
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

    document
      .querySelector("iframe")
      .contentWindow.eval(<script>{code.js}</script>);

    setTimeout(() => {
      document.querySelector(`.${styles.saving}`).style.opacity = 1;
    }, 300);
    setTimeout(() => {
      document.querySelector(`.${styles.saving}`).style.opacity = 0;
    }, 600);
  }, [code]);

  return (
    <>
      <NextSeo
        title="Online html css editor"
        description="Edit your html and css online with frontendzone online html editor"
        canonical={`${process.env.NEXT_PUBLIC_APP_URL}/online-html-css-editor`}
      />
      <div className={`container my-3 ${styles.editor}`}>
        <div className="text-center">
          <h1>
            <strong>Online html editor</strong>
          </h1>
          <p>Online HTML Editors: The Convenient Solution for HTML Coding</p>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4 position-relative">
            <span className={styles.saving}>saved...</span>
            <div className={styles.code}>
              <FaHtml5 className="mr-2" />
              html
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
              <FaCss3 className="mr-2" />
              css
              <textarea
                value={code.css}
                onChange={(e) =>
                  setcode((code) => ({
                    ...code,
                    css: e.target.value,
                  }))
                }
                className={styles.css}
              ></textarea>
              <DiJavascript className="mr-2" />
              Javascript
              <textarea
                value={code.js}
                onChange={(e) =>
                  setcode((code) => ({
                    ...code,
                    js: e.target.value,
                  }))
                }
                className={styles.js}
              ></textarea>
            </div>
          </div>
          <div className="col-md-6">
            <iframe></iframe>
          </div>
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
      </div>
    </>
  );
};

export default Page;

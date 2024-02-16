import Toc from "@/components/tableofcontent";
import { NextSeo } from "next-seo";
import styles from "@/styles/shayari.module.css";
import * as htmlToImage from "html-to-image";
import Image from "next/image";
import { useState } from "react";
import { MdCloudDownload, MdContentCopy } from "react-icons/md";
import { romantic,shayaries,friend ,mohabbat} from "public/data/shayari";

import DownloadPopup from "@/components/download-popup";
import {getShayaries} from "lib/shayari";
import Banner from "@/components/web/banner";
const Page = ({ data }) => {


  const copy = (text) => {
    const input = document.createElement("textarea");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
    document
      .querySelector(`.${styles.copied}`)
      .classList.add(`${styles.active}`);
    setTimeout(() => {
      document
        .querySelector(`.${styles.copied}`)
        .classList.remove(`${styles.active}`);
    }, 1200);
  };
  const [download, setdownload] = useState(false);
  const toPng = (node) => {
    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        setdownload({ name: "shayari", url: dataUrl });
      })
      .catch(function (error) {});
  };
  return (
    <>
    <Banner image={{
      src:"/shayari/roman-english-shayari.png",
      objectFit:'cover',
      objectPosition:'bottom'
    }} height="40vh" title="Shayari in roman english"/>
  
    <div className={`container article my-2 ${styles.shayaries}`}>
      <span className={styles.copied}>copied</span>
      <NextSeo
        title="Top 10 The Best roman english shayari🔥"
        description="Top roman english shayari 🔥 with english & roman meaning, read collection of roman english shayari copy & download"
      />
      <article className="col">

        <p className="text-center sub">
          Top roman english shayari with english meaning ,
heart touching shayari in roman english & roman meaning, read
          collection of roman english shayari copy & download
        </p>
        <div className={styles.items}>
          {data.map((card, i) => (
            <div className={styles.shayari}>
              <div className={styles.action}>
                <MdCloudDownload
                  onClick={(e) =>
                    toPng(e.currentTarget.parentElement.parentElement)
                  }
                  size={25}
                />
                <MdContentCopy
                  onClick={(e) =>
                    copy(e.currentTarget.parentElement.parentElement.innerText)
                  }
                  size={25}
                />
              </div>
              <Image
                className={styles.img}
                priority
                src={`/shayari/romantic-shayari-3.png`}
                layout="fill"
                objectFit="cover"
                alt="shayari in roman english"
              />
              <div dangerouslySetInnerHTML={{ __html: card.node.content }} />
            </div>
          ))}
        </div>

        <h2 className="heading my-2">Shayari in roman english romantic</h2>
        <div className={styles.items}>
          {romantic.map((card, i) => (
            <div className={styles.shayari}>
              <div className={styles.action}>
                <MdCloudDownload
                  onClick={(e) =>
                    toPng(e.currentTarget.parentElement.parentElement)
                  }
                  size={25}
                />
                <MdContentCopy onClick={(e) => copy(card.shayari)} size={25} />
              </div>
              <Image
                className={styles.img}
                src={`/shayari/romantic-shayari-4.png`}
                layout="fill"
                objectFit="cover"
                alt="shayari in roman english"
              />

              <code>{card.shayari}</code>
            </div>
          ))}
        </div>

        <h2 className="heading my-2">Shayari in roman english for friend</h2>
        <div className={styles.items}>
          {friend.map((card, i) => (
            <div className={styles.shayari}>
              <div className={styles.action}>
                <MdCloudDownload
                  onClick={(e) =>
                    toPng(e.currentTarget.parentElement.parentElement)
                  }
                  size={25}
                />
                <MdContentCopy onClick={(e) => copy(card.shayari)} size={25} />
              </div>
              <Image
                className={styles.img}
                src={`/shayari/friend-shayari-2.png`}
                layout="fill"
                objectFit="cover"
                alt="shayari in roman english"
              />

              <code>{card.shayari}</code>
            </div>
          ))}
        </div>
        <h2 className="heading my-2">Shayari in roman english love</h2>
        <div className={styles.items}>
          {shayaries.map((card, i) => (
            <div className={styles.shayari}>
              <div className={styles.action}>
                <MdCloudDownload
                  onClick={(e) =>
                    toPng(e.currentTarget.parentElement.parentElement)
                  }
                  size={25}
                />
                <MdContentCopy onClick={(e) => copy(card.shayari)} size={25} />
              </div>
              <Image
                className={styles.img}
                src={`/shayari/romantic-shayari-4.png`}
                layout="fill"
                objectFit="cover"
                alt="shayari in roman english"
              />

              <code>
                {card.shayari}
                <br></br>
                {card.translation}
              </code>
            </div>
          ))}
        </div>
        <h2 className="heading my-2">Shayari in roman english mohabbat</h2>
        <p className="text-center">10 Mohabbat Shayaris in Roman English</p>
        <div className={styles.items}>
          {mohabbat.map((card, i) => (
            <div className={styles.shayari}>
              <div className={styles.action}>
                <MdCloudDownload
                  onClick={(e) =>
                    toPng(e.currentTarget.parentElement.parentElement)
                  }
                  size={25}
                />
                <MdContentCopy onClick={(e) => copy(card.shayari)} size={25} />
              </div>
              <Image
                className={styles.img}
                src={`/shayari/romantic-shayari-4.png`}
                layout="fill"
                objectFit="cover"
                alt="shayari in roman english"
              />

              <code>{card.shayari}</code>
            </div>
          ))}
        </div>
      </article>
      <Toc />
      {download && (
        <DownloadPopup
          handler={setdownload}
          src={download.url}
          styles={styles}
        />
      )}
    </div>
    </>
  );
};

export default Page;
export async function getStaticProps() {
  const data = await getShayaries();
  return {
    props: { data },
    revalidate: 10,
  };
}
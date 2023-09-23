import { useEffect, useState } from "react";
import hljs from "highlight.js";
import styles from "@/styles/button-generator.module.css";
import "highlight.js/styles/github.css";
import { NextSeo, ProductJsonLd } from "next-seo";
import Image from "next/image";

const Page = () => {
    const [data, setdata] = useState({
        link: {
            url: "",
            isLink: false,
        },
        width: "160",
        text: "button",
        padding: "17",
        border: {
            width: "1",
            type: "solid",
            color: "red",
            radius: "20",
        },
        boxShadow: {
            x: "0",
            y: "2",
            spread: "3",
            blur: "5",
            color: "rgba(0,0,0,0.4)",
        },
        color: "green",
        font: {
            size: "20",
            color: "#fff",
            bold: "",
        },

        background: {
            isSolid: true,
            color: "red",
            gradient: { bg1: "red", bg2: "blue", angle: "120" },
        },
        textShadow: {
            x: "1",
            y: "-1",
            blur: "1",
            color: "",
        },
    });
    const title=`CSS 3D Button Generator online ➜ #𝟙`
    const description=`CSS 3d Button Generator is a free online tool to create CSS buttons without code. Use  premium designed templates to easily generate CSS buttons`
    const buttonstyle = `
${
    data.link.isLink
        ? `text-decoration:none;
display:inline-block;`
        : ""
}
font-size: ${data.font.size}px;
${data.font.bold ? "font-weight:bold;" : ""}
outline:none;
color: ${data.font.color};
width: ${data.width}px;
padding:${data.padding}px ${data.padding * 2}px;
min-width:max-content;
background:${
        data.background.isSolid
            ? `${data.background.color};`
            : `linear-gradient(${data.background.gradient.angle}deg,${data.background.gradient.bg1},${data.background.gradient.bg2});`
    }
border-radius:${data.border.radius}px;
border: ${data.border.width}px ${data.border.type} ${data.border.color};
box-shadow: ${data.boxShadow.x}px ${data.boxShadow.y}px ${data.boxShadow.blur}px ${
        data.boxShadow.spread
    }px ${data.boxShadow.color};
text-shadow: ${data.textShadow.x}px ${data.textShadow.y}px ${data.textShadow.blur}px;
transition:all 0.3s;
}`;

    useEffect(() => {
        hljs.highlightAll();
        document.querySelector(".demo button").style = buttonstyle;
    }, [data, buttonstyle]);
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={`${process.env.NEXT_PUBLIC_APP_URL}/css/button-generator`}
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content: "css button generator, css 3D button generator",
                    },
                ]}
                openGraph={{
                    type: "software",
                    url: `${process.env.NEXT_PUBLIC_APP_URL}/css/button-generator`,
                    title: title,
                    description: description,

                    images: [
                        {
                            url: "/online-html-editor.png",
                            width: 1200,
                            height: 600,
                            alt: "3D HTML CSS Button Generator online ➜ #𝟙",
                            type: "image/png",
                        },
                        {
                            url: "/dev/css-button-generator.jpg",
                        },
                    ],
                    siteName: process.env.NEXT_PUBLIC_APP_NAME,
                }}
            />
            <ProductJsonLd
                productName={title}
                type="Product"
                brand="frontendzone"
                description={description}
                aggregateRating={{
                    worstRating: "1",
                    bestRating: "5",
                    ratingValue: "4.5",
                    ratingCount: "505435",
                }}
            />

            <div className={`${styles.tool} buttongenerator`}>
                <div className={styles.left}>
                    <h1 className="text-center">css button generator</h1>
                    <div className={styles.inputs}>
                        <div className="tab">
                            <label className={styles.link}>
                                Link
                                <input
                                    onChange={e =>
                                        setdata(prev => ({
                                            ...prev,
                                            link: {
                                                ...prev.link,
                                                isLink: e.target.checked,
                                            },
                                        }))
                                    }
                                    type="checkbox"
                                />
                                {data.link.isLink && (
                                    <input
                                        onChange={e =>
                                            setdata(prev => ({
                                                ...prev,
                                                link: {
                                                    ...prev.link,
                                                    url: e.target.value,
                                                },
                                            }))
                                        }
                                        value={data.link.url}
                                        placeholder="URL"
                                        type="url"
                                    />
                                )}
                            </label>
                            <label>
                                text
                                <input
                                    type="text"
                                    name="text"
                                    value={data.text}
                                    onChange={e =>
                                        setdata(prev => ({ ...prev, text: e.target.value }))
                                    }
                                    defaultValue="click me"
                                />
                            </label>

                            <label>
                                padding
                                <input
                                    type="range"
                                    value={data.padding}
                                    onChange={e =>
                                        setdata(prev => ({
                                            ...prev,
                                            padding: e.target.value,
                                        }))
                                    }
                                />
                            </label>
                            <label>
                                width
                                <input
                                    type="range"
                                    max={300}
                                    value={data.width}
                                    onChange={e =>
                                        setdata(prev => ({ ...prev, width: e.target.value }))
                                    }
                                />
                            </label>
                        </div>
                        <div className="tab">
                            <strong> font</strong>
                            {Object.keys(data.font).map((f, i) => (
                                <label key={i}>
                                    {f}
                                    <input
                                        type={
                                            f == "color"
                                                ? "color"
                                                : f == "bold"
                                                ? "checkbox"
                                                : f == "size"
                                                ? "range"
                                                : ""
                                        }
                                        value={data.font[f]}
                                        onChange={e =>
                                            setdata(prev => ({
                                                ...prev,
                                                font: {
                                                    ...prev.font,
                                                    [f]:
                                                        f == "bold"
                                                            ? e.target.checked
                                                            : e.target.value,
                                                },
                                            }))
                                        }
                                    />
                                </label>
                            ))}
                        </div>
                        <div className="tab">
                            <strong>background</strong>
                            <label>
                                solid
                                <input
                                    type="checkbox"
                                    checked={data.background.isSolid}
                                    onChange={e =>
                                        setdata(prev => ({
                                            ...prev,
                                            background: {
                                                ...prev.background,
                                                isSolid: e.target.checked,
                                            },
                                        }))
                                    }
                                />
                            </label>

                            {!data.background.isSolid ? (
                                <div className="d-flex flex-column">
                                    {Object.keys(data.background.gradient).map((g, i) => (
                                        <label key={i}>
                                            {g == "angle" ? "angle" : ""}
                                            <input
                                                value={data.background.gradient[g]}
                                                type={g == "angle" ? "range" : "color"}
                                                onChange={e =>
                                                    setdata(prev => ({
                                                        ...prev,
                                                        background: {
                                                            ...prev.background,
                                                            gradient: {
                                                                ...prev.background.gradient,
                                                                [g]: e.target.value,
                                                            },
                                                        },
                                                    }))
                                                }
                                            />
                                        </label>
                                    ))}
                                </div>
                            ) : (
                                <label>
                                    {" "}
                                    background
                                    <input
                                        type="color"
                                        onChange={e =>
                                            setdata(prev => ({
                                                ...prev,
                                                background: {
                                                    ...prev.background,
                                                    color: e.target.value,
                                                },
                                            }))
                                        }
                                    />
                                </label>
                            )}
                        </div>
                        <div className="tab">
                            <strong>border</strong>
                            {Object.keys(data.border).map((el, i) =>
                                el == "width" ? (
                                    <>
                                        <label key={i}>
                                            {el}
                                            <input
                                                value={data.border[el]}
                                                type="range"
                                                max={20}
                                                name={el}
                                                onChange={e =>
                                                    setdata(prev => ({
                                                        ...prev,
                                                        border: {
                                                            ...prev.border,
                                                            [el]: e.target.value,
                                                        },
                                                    }))
                                                }
                                            />
                                        </label>
                                    </>
                                ) : el == "type" ? (
                                    <div className={styles.grid}>
                                        {["solid", "dashed", "dotted"].map((s, i) => (
                                            <label key={i} className="d-inline-flex">
                                                {s}
                                                <input
                                                    name="border-color"
                                                    type="radio"
                                                    onChange={e =>
                                                        setdata(prev => ({
                                                            ...prev,
                                                            border: {
                                                                ...prev.border,
                                                                type: s,
                                                            },
                                                        }))
                                                    }
                                                />
                                            </label>
                                        ))}
                                    </div>
                                ) : el == "color" ? (
                                    <label>
                                        color
                                        <input
                                            value={data.border[el]}
                                            onChange={e =>
                                                setdata(prev => ({
                                                    ...prev,
                                                    border: {
                                                        ...prev.border,
                                                        [el]: e.target.value,
                                                    },
                                                }))
                                            }
                                            type="color"
                                        />
                                    </label>
                                ) : (
                                    <label>
                                        radius
                                        <input
                                            value={data.border[el]}
                                            max={(80 / data.width) * 100}
                                            onChange={e =>
                                                setdata(prev => ({
                                                    ...prev,
                                                    border: {
                                                        ...prev.border,
                                                        [el]: e.target.value,
                                                    },
                                                }))
                                            }
                                            type="range"
                                        />
                                    </label>
                                )
                            )}
                        </div>
                        <div className="tab">
                            <strong>box-shadow</strong>
                            {Object.keys(data.boxShadow).map((el, i) => (
                                <label key={i}>
                                    {el}
                                    <input
                                        value={data.boxShadow[el]}
                                        type={el == "color" ? "color" : "range"}
                                        name={el}
                                        onChange={e =>
                                            setdata(prev => ({
                                                ...prev,
                                                boxShadow: {
                                                    ...prev.boxShadow,
                                                    [el]: e.target.value,
                                                },
                                            }))
                                        }
                                    />
                                </label>
                            ))}
                        </div>
                        <div className="tab">
                            <strong> text-shadow</strong>
                            {Object.keys(data.textShadow).map((el, i) => (
                                <label key={i}>
                                    {el}
                                    <input
                                        value={data.textShadow[el]}
                                        type={el == "color" ? "color" : "range"}
                                        name={el}
                                        onChange={e =>
                                            setdata(prev => ({
                                                ...prev,
                                                textShadow: {
                                                    ...prev.textShadow,
                                                    [el]: e.target.value,
                                                },
                                            }))
                                        }
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`${styles.preview} demo`}>
                    {data.link.isLink?<a target="_blank" href={data.link.url}><button>{data.text || "button"}</button></a>:<button>{data.text || "button"}</button>}
                </div>
                <div className={styles.code}>
                    <pre>
                        <code className="language-css">{`
  ${
      data.link.isLink
          ? `<a href="${data.link.url}" class="btn">
       ${data.text.trim()}
       </a>`
          : `<button class="btn">
      ${data.text.trim()}
      </button>`.trim()
  }

.btn{${buttonstyle.trim()}
      `}</code>
                    </pre>
                </div>
            </div>
            <input id="readmore" type="checkbox" />
            <label htmlFor="readmore">read more</label>
            <section className={styles.content}>
                <div className="container">
                    <h1 className="text-center my-4">HTML CSS 3D Button Generator</h1>
                    <p>
                        CSS (Cascading Style Sheets) is a styling language that can be used to
                        enhance the look and feel of HTML elements, including buttons. While
                        creating buttons from scratch using CSS can be time-consuming and require a
                        good understanding of CSS, a CSS button generator can make the process much
                        simpler.
                    </p>
                    <h2>What is a CSS 3d Button Generator?</h2>

                    <p>
                        A CSS button generator is an online tool that allows you to create custom
                        buttons using CSS without writing any code. It provides a user-friendly
                        interface where you can choose the size, shape, color, and other properties
                        of the button. The CSS button generator then generates the CSS code that you
                        can use to style your buttons.
                    </p>
                    <Image
                        className="my-4"
                        height={600}
                        width={1200}
                        objectFit="contain"
                        src="/dev/css-button-generator.jpg"
                        alt="html css button generator"
                    />
                    <h2>Why Use a CSS Button Generator?</h2>
                    <p>
                        There are several reasons why you might want to use a CSS button generator:
                    </p>
                    <ol style={{ listStylePosition: "inside" }}>
                        <li>
                            Time-saving: Creating buttons from scratch using CSS can take a lot of
                            time, especially if you&apos;re not familiar with the language. A CSS
                            button generator can save you time by generating the code for you.
                        </li>
                        <li>
                            Easy to use: CSS button generators are usually user-friendly and
                            straightforward to use, making it easy for anyone to create custom
                            buttons.
                        </li>
                        <li>
                            Customizable: With a CSS button generator, you can choose from a variety
                            of sizes, shapes, colors, and other properties to create buttons that
                            match the look and feel of your website.
                        </li>
                        <li>
                            No coding required: If you&apos;re not familiar with CSS, a CSS button
                            generator is a great way to create buttons without writing any code.
                        </li>
                    </ol>
                    <h2>conclusion</h2>
                    <p>
                        In conclusion, a CSS button generator is a useful tool for creating custom
                        buttons for your website or application. It saves time, is easy to use,
                        customizable, and doesn&apos;t require any coding knowledge. So if
                        you&apos;re looking to create buttons for your website, consider using a CSS
                        button generator to make the process quick and easy.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Page;

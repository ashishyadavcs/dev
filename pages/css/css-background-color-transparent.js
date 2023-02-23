import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import Image from "next/image";

const Page = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <div className="container my-4">
        <h1>CSS background color transparent</h1>
        <p>To set transparent background color you can use rgba color</p>
        <h2>Ways to set transaprent background color in css</h2>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>
                Using background-color to Set Transparent Background Color in
                CSS
                <pre>
                  <code>background-color:transparent</code>
                </pre>
              </li>
              <li>
                Using Opacity Property to Set Transparent Background Color in
                CSS
                <pre>
                  <code>{`.bg {opacity : 0.2}`}</code>
                </pre>
              </li>
            </ul>
            <table className="max-content my-4">
              <tbody>
                <tr>
                  <td>background</td>
                  <td>red</td>
                </tr>
                <tr>
                  <td>background-image</td>
                  <td>url(``)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <pre>
              <code>
                {`
                  <div className="ts-bg">
                <h3>transaprent</h3>
                  <img
                    alt="css background color transparent"
                    src="/dev/about-frontend.png"
                  />
                </div>`}
              </code>
            </pre>
            <div className="ts-bg">
              <h3>transaprent</h3>
              <Image
                height={300}
                width={400}
                objectFit="cover"
                alt="css background color transparent"
                src="/dev/about-frontend.png"
              />
            </div>
          </div>
        </div>
        <p>
          Setting a CSS background color to transparent means that the
          element&apos;s background will be see-through, allowing the content
          behind it to be visible.
        </p>
        <p>
          To set a CSS background color to transparent, you can use the rgba()
          or hsla() color functions, and specify an alpha value (the last value)
          of 0, which represents fully transparent. Here&apos;s an example:
        </p>
        <pre>
          <code>
            background-color: rgba(255, 255, 255, 0); /* white with 0% opacity*/
          </code>
        </pre>
        <p>
          In the example above, the background color is set to white, but the
          alpha value is 0, making it fully transparent. You can replace the
          color values with any valid color code, such as hex or color name.
        </p>
        <p>
          You can also use the transparent keyword to set the background color
          to fully transparent, like this:
        </p>
        <pre>
          <code>background-color: transparent;</code>
        </pre>
        <p>
          In this case, the keyword transparent is used instead of a color
          value. This will make the element&apos;s background fully transparent.
        </p>
      </div>
    </>
  );
};

export default Page;

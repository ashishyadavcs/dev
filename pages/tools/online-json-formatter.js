import { NextSeo } from "next-seo";
import React, { useState } from "react";

const Page = () => {
  const [data, setdata] = useState({
    input: "",
    result: "",
  });
  const formatter = (input) => {
    if (input) {
      try {
        return JSON.stringify(JSON.parse(input), null, 4);
      } catch (err) {
        return err;
      }
    }
  };
  const minifier = (input) => {
    if (input) {
      try {
        return JSON.stringify(JSON.parse(input));
      } catch (err) {
        return err;
      }
    }
  };
  const uploadjson = (e) => {
    let reader = new FileReader();
    reader.onload = async (event) => {
      setdata((prev) => ({
        ...prev,
        input: event.target.result,
      }));
    };
    reader.readAsText(e.target.files[0]);
  };
  return (
    <div>
      <NextSeo
        title="#Online JSON Formatter, beautifier & minifier  ➜ #𝟙"
        canonical={`${process.env.NEXT_PUBLIC_APP_URL}/tools/online-json-formatter`}
        description="online JSON formatter is a web-based tool that helps to format and organize JSON data. It takes the raw JSON data and converts it into a readable and organized format, making it easy to understand and analyze."
      />
      <style jsx>{`
        textarea {
          min-height: 350px;
          outline: none;
          border: 2px solid #888;
          border-radius: 8px;
        }
        section {
          margin-top: 100px;
        }
      `}</style>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-5">
            <textarea
              value={data.input}
              onChange={(e) =>
                setdata((prev) => ({ ...prev, input: e.target.value }))
              }
              className=" outline-none  w-100 p-3"
              placeholder="write or upload json file"
            ></textarea>
            <input onChange={(e) => uploadjson(e)} type="file" accept=".json" />
          </div>
          <div className="col-md-2">
            <div className="d-flex my-3 flex-column align-items-center justify-content-center">
              <button
                className="btn btn-success"
                onClick={(e) =>
                  setdata((prev) => ({
                    ...prev,
                    result: formatter(data.input),
                  }))
                }
              >
                Format
              </button>
              <button
                onClick={(e) =>
                  setdata((prev) => ({
                    ...prev,
                    result: minifier(data.input),
                  }))
                }
                className=" btn btn-default my-3"
              >
                Minify
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <textarea
              readOnly
              value={data.result}
              className="h-100  w-100 p-3"
              placeholder="output"
            ></textarea>
          </div>
        </div>
        <section className="content">
          <h1 className="text-center">
            Online JSON Formatter: A Tool for Efficient and Organized Data
            Processing
          </h1>
          <p>
            JSON (JavaScript Object Notation) is a lightweight data-interchange
            format that is widely used for data exchange between applications.
            It is a text-based format that is easy to read and write, making it
            a popular choice for data transfer and storage. However, as the size
            of JSON data increases, it becomes difficult to read and understand
            the data, especially when it is not properly formatted. That&apos;s
            where an online JSON formatter comes in.
          </p>
          <p>
            An online JSON formatter is a web-based tool that helps to format
            and organize JSON data. It takes the raw JSON data and converts it
            into a readable and organized format, making it easy to understand
            and analyze. This tool is especially useful for developers, data
            scientists, and data analysts who need to work with large amounts of
            JSON data.
          </p>
          <p>
            There are several online JSON formatters available, each with its
            own set of features and functionality. Some of the common features
            of online JSON formatters include:
          </p>
          <ul className="text-secondary">
            <li>
              Indentation: The formatter automatically adds indentation to the
              JSON data to make it easier to read and understand.
            </li>
            <li>
              Syntax highlighting: The formatter highlights the different
              elements of the JSON data, such as keywords, strings, and numbers,
              making it easier to distinguish between different elements.
            </li>
            <li>
              Validation: Some online JSON formatters have built-in validation
              functionality that checks the JSON data for errors and reports any
              issues.
            </li>
            <li>
              Code folding: The formatter allows you to collapse sections of the
              JSON data, making it easier to focus on specific sections of the
              data.
            </li>
            <li>
              Copy and paste functionality: The formatter allows you to easily
              copy and paste the formatted JSON data into other applications.
            </li>
            <li>
              Using an online JSON formatter is simple and straightforward. To
              use the tool, you simply need to paste the raw JSON data into the
              formatter and click the &quot;format&quot; button. The formatter
              will then automatically format the data, adding indentation,
              syntax highlighting, and any other features specified by the
              formatter.
            </li>
          </ul>
          <p>
            In conclusion, an online JSON formatter is a useful tool for
            efficiently and effectively working with JSON data. It makes it
            easier to understand and analyze large amounts of JSON data, and can
            save time and effort for developers, data scientists, and data
            analysts. With its ease of use and wide range of features, an online
            JSON formatter is a must-have tool for anyone working with JSON
            data.
          </p>
          <h2>Online JSON Minifier</h2>
          <p>
            A JSON minifier is a tool or a program that can take a JSON file as
            input and remove all unnecessary characters, such as white spaces,
            line breaks, and indentations, to reduce its size and make it more
            compact. The goal of minifying JSON is to improve the loading speed
            of web pages and applications by reducing the amount of data that
            needs to be transferred over the network. The minified JSON file
            still retains its structure and data, but is not human-readable, so
            it&apos;s typically used in production environments where
            readability is not a concern. It&apos;s important to note that while
            minifying JSON can help improve performance, it can also make it
            difficult to debug or troubleshoot issues, so it&apos;s usually done
            as the last step before deploying an application.
          </p>
          <h2>Online JSON beautifier</h2>
          <p>
            A JSON beautifier is a tool or a program that can take a JSON file
            as input and format it to make it more readable. This typically
            involves adding white spaces, line breaks, and indentations to the
            file so that its structure and data can be easily understood by a
            human reader. The goal of beautifying JSON is to improve the
            readability and maintainability of the file, especially when
            it&apos;s used for development purposes. Beautifying a JSON file can
            make it easier to debug or troubleshoot issues, as well as
            collaborate with other developers who need to understand the data
            structure. It&apos;s important to note that while beautifying JSON
            can improve readability, it also increases the file size, so
            it&apos;s typically done only during development and not in
            production environments where performance is a concern.
          </p>
          <h2>Online JSON Viewer</h2>
          <p>
            An online JSON viewer is a web-based tool that provides a
            user-friendly interface for viewing and analyzing JSON (JavaScript
            Object Notation) data. JSON is a lightweight, text-based format for
            exchanging data, and it&apos;s widely used in web development for
            storing and exchanging information between a server and a client.
          </p>
          <p>
            An online JSON viewer provides a way for developers and other users
            to quickly view and inspect JSON data in a structured and
            easy-to-read format. The tool typically displays the JSON data in a
            tree-like structure, allowing users to expand and collapse branches
            to view and inspect nested elements. Some online JSON viewers also
            provide additional functionality, such as syntax highlighting,
            search, and sorting capabilities.
          </p>
          <p>
            Using an online JSON viewer can be particularly useful when working
            with large or complex JSON data, as it can provide a quick and
            convenient way to view and understand the structure of the data
            without having to write any code. Additionally, because the viewer
            is web-based, it can be accessed from any device with an internet
            connection, making it an accessible and convenient tool for
            developers and other users.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;

import hljs from "highlight.js";
import { useEffect } from "react";
import Toc from "@/components/tableofcontent";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Codeblock = dynamic(() => import("@/components/codeblock"), {
  loading: () => "loading...",
  ssr: false,
});
const Page = () => {
  useEffect(() => {
    hljs.highlightAll();
    document
      .querySelectorAll(".article p")
      .forEach((el) =>
        el.setAttribute(
          "style",
          `color:#${Math.floor(Math.random() * 1000000)}`
        )
      );
  }, []);
  return (
    <div className="container my-4 article">
      <NextSeo title="how to javascript" />
      <style>{`section{margin-bottom:2rem}`}</style>
      <div className="row">
        <div className="col-md-8">
          <section className="mt-4">
            <h2>javascript parse float </h2>
            <p>
              In JavaScript, parseFloat() is a built-in function that parses a
              string argument and returns a floating-point number. Here&apso;s
              an example of how to use parseFloat():
            </p>
            <Codeblock
              value={`var str = "3.14";
var num = parseFloat(str);
console.log(num); // Output: 3.14
`}
            />
            <p>
              In this example, we declare a string variable str that contains
              the value &quot;3.14&quot;. We then use the parseFloat() function
              to convert the string to a floating-point number and store it in a
              variable named num. Finally, we log the value of num to the
              console using console.log().
            </p>
            <p>
              It&apos;s important to note that if the string argument passed to
              parseFloat() cannot be converted to a number, the function returns
              NaN (Not a Number). For example:
            </p>
            <Codeblock
              value={`var str = "hello";
var num = parseFloat(str);
console.log(num); // Output: NaN
`}
            />
          </section>
          <section>
            <h2>javascript todatestring </h2>
            <p>
              {`  In JavaScript, the toDateString() method is used to convert a date
          object to a human-readable string representing the date. Here's an
          example:`}
            </p>
            <Codeblock
              value={`var date = new Date();
var dateString = date.toDateString();
console.log(dateString); // Output: "Tue Feb 22 2023"
`}
            />
            <p>
              In this example, we create a new Date object using the Date()
              constructor, which sets the date to the current date and time. We
              then call the toDateString() method on the date object to convert
              it to a string representing the date. Finally, we log the
              resulting string to the console using console.log().
            </p>
            <p>{`The output of toDateString() will vary depending on the current locale settings of the user's browser. However, the format of the string is typically something like "Day Mon DD YYYY", where "Day" is the day of the week (e.g., "Tue" for Tuesday), "Mon" is the abbreviated month name (e.g., "Feb" for February), "DD" is the two-digit day of the month (e.g., "22" for the 22nd day of the month), and "YYYY" is the four-digit year (e.g., "2023" for the year 2023).`}</p>
          </section>
          <section>
            <h2>push multiple elements in array javascript </h2>
            <p>{`In JavaScript, you can use the push() method to add one or more elements to the end of an array. Here's an example of how to push multiple elements into an array:`}</p>
            <Codeblock
              value={`var myArray = [1, 2, 3];
myArray.push(4, 5, 6);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]
`}
            />
          </section>
          <section>
            <h2>how to call a function every second in javascript </h2>
            <p>
              <Codeblock
                value={`function myFunction() {
  console.log("Hello World!");
}
setInterval(myFunction, 1000);
`}
              />
              {`To call a function every second in JavaScript, you can use the setInterval() method. Here's an example:`}
            </p>

            <p>{`In this example, we define a function myFunction() that simply logs the string "Hello World!" to the console using console.log(). We then use the setInterval() method to call myFunction() every 1000 milliseconds (i.e., every second). The first argument to setInterval() is the function to be called, and the second argument is the time interval (in milliseconds) at which to call the function.`}</p>
            <p>{`You can replace myFunction() with any function you want to call every second. Note that setInterval() returns a unique ID for the interval, which you can use with clearInterval() to stop the interval at any time. For example:`}</p>
          </section>
          <section>
            <h2>exponentiation in javascript</h2>
            <p>
              In JavaScript, exponentiation can be performed using the
              exponentiation operator (**), which raises the left operand to the
              power of the right operand.
            </p>
            <p>For example, to calculate 2 to the power of 3, you can use:</p>
            <Codeblock value={`console.log(2 ** 3); // Output: 8`} />
            <p>If you want to calculate the square of a number, you can use:</p>
            <Codeblock value="console.log(4 ** 2); // Output: 16" />
            <p>
              You can also use negative exponents to calculate the reciprocal of
              a number. For example:
            </p>
            <Codeblock value={`console.log(2 ** -3); // Output: 0.125`} />
            <p>
              You can also use variables or expressions as operands in the
              exponentiation operator. For example:
            </p>
            <Codeblock
              value={`let x = 2;
let y = 3;
console.log(x ** y); // Output: 8
console.log((x + y) ** 2); // Output: 25
`}
            />
            <p>
              Note that if you need to support older versions of JavaScript that
              do not support the exponentiation operator, you can use the
              Math.pow() method instead. For example:
            </p>
            <Codeblock value="console.log(Math.pow(2, 3)); // Output: 8" />
          </section>
        </div>
        <div className="col-md-4">
          <div className="sticky">
            <Toc />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

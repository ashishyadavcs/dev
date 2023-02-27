import Image from "next/image";
import React from "react";

const Ashish = () => {
  const techs = [
    "html",
    "css",
    "javascript",
    "react js",
    "wordpress",
    "Next js",
    "SEO",
    "express js ",
    "node js",
    "mongodb",
  ];
  return (
    <div className="ashish">
      <div className="hero d-flex align-items-center mb-4">
        <Image src="/ashish.jpg" alt="" height={90} width={90}></Image>
        <strong className="ml-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/ashishfgiet"
          >
            Ashish Yadav
          </a>
          <br></br>
          <small>Software Engineer</small>
        </strong>
      </div>
      <p>
        Hi, I am a software engineer . I love to learn and work on technologies
        . I have {new Date().getFullYear() - 2020} years of experience in web
        development
      </p>
      <div className="techs">
        {techs.map((t, i) => (
          <strong key={i}>{t}</strong>
        ))}
      </div>
    </div>
  );
};

export default Ashish;

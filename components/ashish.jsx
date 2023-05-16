import Image from "next/image";
import React from "react";

const Ashish = ({width}) => {
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
    <div className="ashish" style={{maxWidth:width}} itemprop="author" itemscope itemtype="https://schema.org/Person">
      <div
        title="click to see on linkedin"
        className="hero d-flex align-items-center mb-4"
      >
        <Image src="/ashish-lkd.jpg" alt="" height={90} width={90}></Image>
        <strong className="ml-4">
          <a itemprop="url" 
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/ashishfgiet"
          >
           <span itemprop="name" >Ashish Yadav</span> 
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

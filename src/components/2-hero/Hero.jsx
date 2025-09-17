// import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar">
          <img src="./a (153).png" className="avatar" alt="my-photo" />
          <span className="icon-verified" />
        </div>
        <h1 className="title">software developer, & forntend developer</h1>
        <p className="subTitle">
          I am a software developer with a passion for creating beautiful and
          functional web applications. I have a strong background in JavaScript,
          React, and Node.js, and I am always eager to learn new technologies
          and improve my skills.
        </p>
        <div className="all-icons flex">
          <a href="#" target="_blank">
            <div className="icon icon-social-linkedin" />
          </a>
          <a href="#" target="_blank">
            <div className="icon icon-facebook" />
          </a>
          <a href="#" target="_blank">
            <div className="icon icon-github" />
          </a>
          <a href="#" target="_blank">
            <div className="icon icon-instagram" />
          </a>
        </div>
      </div>
      <div className="right-section animation">animation</div>
    </section>
  );
}

export default Hero;

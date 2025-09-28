import React from "react";
import "./about.css";

function About() {
  return (
    <main className="about-page">
      <div className="container">

      <header className="about-header ">
        <h1>About Me</h1>
        <p className="lead">A short intro and highlights — who I am and what I build.</p>
        <nav className="toc">
          <a href="#hero-1">Section 1</a>
          <a href="#content-1">Details 1</a>
          <a href="#hero-2">Section 2</a>
          <a href="#content-2">Details 2</a>
          <a href="#hero-3">Section 3</a>
        </nav>
      </header>

      <section className="hero" id="hero-1">
        <div className="">
          <h2>Parallax Section #1</h2>
          <p>Short description for the first parallax section.</p>
        </div>
      </section>

      <section className="content" id="content-1">
        <div className="">
          <h3>Content Block 1</h3>
          <p>This area contains more detailed information, skills and experience.</p>
        </div>
      </section>

      <section className="hero" id="hero-2">
        <div className="">
          <h2>Parallax Section #2</h2>
          <p>Another highlight or showcase area.</p>
        </div>
      </section>

      <section className="content" id="content-2">
        <div className="">
          <h3>Content Block 2</h3>
          <p>More details, links to projects, and callouts.</p>
        </div>
      </section>

      <section className="hero" id="hero-3">
        <div className="">
          <h2>Parallax Section #3</h2>
          <p>Final section and footer callout for this page.</p>
        </div>
      </section>
      </div>
    </main>
  );
}

export default About;

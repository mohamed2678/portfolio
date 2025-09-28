import "./main.css";

function Main() {
  return (
    <main className="flex">
      <section className="left-section flex">
        <button className="active">all projects</button>
        <button>HTML & CSS</button>
        <button>Javascript</button>
        <button>Vue & NuxtJS</button>
        <button>React & Nextjs</button>
      </section>

      <section  className="right-section flex">
      {["aa", "bb", "cc", 1].map((item) => {
        return (
            <article key={item} className="card">
              <img width={255} src="./template1.png" alt="Project 1" />
              <div style={{width: 255}} className="box">
                <h1 className="title">project 1</h1>
                <p className="subTitle">A brief description of project 1.</p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a href="#" className="link flex">
                    more{" "}
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-long-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
        );
      })}
      </section>
    </main>
  );
}

export default Main;

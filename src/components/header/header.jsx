import React from "react";
import "./header.css";

function Header() {

  const [shoMoadl, setShowModal] = React.useState(false);
  return (
    <header className="flex">
      <button onClick={() => {
        setShowModal(!shoMoadl)
      }} className="menu flex icon-menu" />
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="mode flex">
        <span className="icon-moon-o" />
      </button>

  {shoMoadl && (
          <div className="fixed">
          <ul className="model">
          <li><button className="icon-clear" onClick={() => setShowModal(false)} /></li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
      </div>
  )}
    </header>
  );
}

export default Header;

import React from "react";
import "./header.css";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const [shoMoadl, setShowModal] = React.useState(false);
  // route 
  const location = useLocation();
  return (
    <header className="flex">
      <button
        onClick={() => {
          setShowModal(!shoMoadl);
        }}
        className="menu flex icon-menu"
      />
      <div />

      <nav>
        <ul className="flex">
          <li>
            <Link to="/about">About</Link>
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
            <li>
              <button
                className="icon-clear"
                onClick={() => setShowModal(false)}
              />
            </li>
            <li>
              <Link to="/about">About</Link>
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

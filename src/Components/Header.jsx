import React from "react";
import { useState } from "react";
import "./Header.css";
import logo from "../images/pinned.png";
import menubar from "../images/menu-bar.png";
import closeBtn from "../images/cancel.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <nav>
        <div className="navbar-logo">
          <a href="#home">
            <img src={logo} alt="Logo" style={{ width: "30px" }} />
          </a>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <img
          src={menubar}
          alt="menubar"
          style={{ width: "30px" }}
          onClick={handleToggleMenu}
          className="menu"
        />
      </nav>

      {toggleMenu && (
        <div className="small-screen-overlay">
          <nav className="smallscreen">
            <div className="closebtn">
              <img
                src={closeBtn}
                alt="closebtn"
                style={{ width: "32px" }}
                onClick={handleToggleMenu}
              />
            </div>

            <ul className="navbar-links-smallscreen">
              <li onClick={handleToggleMenu}>
                <a href="#home">Home</a>
              </li>
              <li onClick={handleToggleMenu}>
                <a href="#features">Features</a>
              </li>
              <li onClick={handleToggleMenu}>
                <a href="#about">About</a>
              </li>
              <li onClick={handleToggleMenu}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;

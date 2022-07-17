/** @format */

import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "./header.css";
import "./footer.css";

const Base = (props) => {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (menuOpened) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "hidden scroll";
  }, [menuOpened]);

  return (
    <div className="app">
      <header>
        <h1 className="company-name">Soul4English</h1>
        <nav className={menuOpened ? "opened" : "closed"}>
          <HashLink smooth to="/#why-us" onClick={() => setMenuOpened(false)}>
            Why Us
          </HashLink>
          <HashLink smooth to="/#story" onClick={() => setMenuOpened(false)}>
            Our Story
          </HashLink>
          <HashLink smooth to="/#founder" onClick={() => setMenuOpened(false)}>
            Message from Founder
          </HashLink>
          <HashLink smooth to="/#mission" onClick={() => setMenuOpened(false)}>
            Our Mission
          </HashLink>
          <HashLink smooth to="/#teachers" onClick={() => setMenuOpened(false)}>
            Teachers
          </HashLink>
          <HashLink smooth to="/#courses" onClick={() => setMenuOpened(false)}>
            Courses
          </HashLink>
        </nav>
        <div
          className={!menuOpened ? "menu-icon shake" : "menu-icon"}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <div className={menuOpened ? "bar-one" : ""}></div>
          <div className={menuOpened ? "bar-two" : ""}></div>
          <div className={menuOpened ? "bar-three" : ""}></div>
        </div>
      </header>

      {props.children}

      <footer>
        <div className="links">
          <HashLink smooth to="/#why-us" className="link-1">
            Why Us
          </HashLink>
          <HashLink smooth to="/#story">
            Our Story
          </HashLink>
          <HashLink smooth to="/#founder">
            Message from Founder
          </HashLink>
          <HashLink smooth to="/#mission">
            Our Mission
          </HashLink>
          <HashLink smooth to="/#teachers">
            Teachers
          </HashLink>
          <HashLink smooth to="/#courses">
            Courses
          </HashLink>
        </div>

        <p className="email">Email: soul4english@gmail.com</p>
        <p className="company">
          Soul4English &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Base;

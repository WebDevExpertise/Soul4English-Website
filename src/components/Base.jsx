/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Mission from "./Mission";

const Base = (props) => {
  return (
    <div className="app">
      <header>
        <h1 class="logo">Logo</h1>
        <nav>
          <Link to="/" element={<Home />}>
            Home
          </Link>
          <Link to="/about" element={<About />}>
            About Us
          </Link>
          <Link to="/contact" element={<Contact />}>
            Contacts
          </Link>
          <Link to="/mission" element={<Mission />}>
            Our Mission
          </Link>
        </nav>
      </header>

      {props.children}

      <footer>
        <Link class="link-1" to="/" element={<Home />}>
          Home
        </Link>
        <Link to="/about" element={<About />}>
          About Us
        </Link>
        <Link to="/contact" element={<Contact />}>
          Contacts
        </Link>
        <Link to="/mission" element={<Mission />}>
          Our Mission
        </Link>

        <p>Soul4English &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Base;

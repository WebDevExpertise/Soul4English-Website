/** @format */

import React from "react";
import { useEffect } from "react";
import Base from "./Base";

const About = () => {
  useEffect(() => {
    document.title = "Soul4English | About Us";
  });

  return (
    <div className="app">
      <Base>
        <h1>About Us</h1>
        <div className="content"></div>
      </Base>
    </div>
  );
};

export default About;

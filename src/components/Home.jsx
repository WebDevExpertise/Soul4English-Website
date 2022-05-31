/** @format */

import React from "react";
import { useEffect } from "react";
import Base from "./Base";
import Slideshow from "./Slideshow";

const Home = () => {
  useEffect(() => {
    document.title = "Soul4English | Home";
  });

  return (
    <div className="app">
      <Base>
        <h1>Home</h1>
        <div className="content">
          <Slideshow />
        </div>
      </Base>
    </div>
  );
};

export default Home;

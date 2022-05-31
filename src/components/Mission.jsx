/** @format */

import React from "react";
import { useEffect } from "react";
import Base from "./Base";

const Mission = () => {
  useEffect(() => {
    document.title = "Soul4English | Our Mission";
  });

  return (
    <div className="app">
      <Base>
        <h1>Our Mission</h1>
        <div className="content"></div>
      </Base>
    </div>
  );
};

export default Mission;

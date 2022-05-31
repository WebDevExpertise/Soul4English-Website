/** @format */

import React from "react";
import { useEffect } from "react";
import Base from "./Base";

const Contact = () => {
  useEffect(() => {
    document.title = "Soul4English | Contact Us";
  });

  return (
    <div className="app">
      <Base>
        <h1>Contact Us</h1>
        <div className="content">
        </div>
      </Base>
    </div>
  );
};

export default Contact;

/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Mission from "./components/Mission";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/about" element={<About />}>
        About Us
      </Route>
      <Route path="/contact" element={<Contact />}>
        Contact Us
      </Route>
      <Route path="/mission" element={<Mission />}>
        Our Missions
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

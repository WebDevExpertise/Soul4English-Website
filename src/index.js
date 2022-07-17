/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import "./mediaQueries.css";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        Home
      </Route>
      <Route path="/#why-us">Why Us</Route>
      <Route path="/#story">Our Story</Route>
      <Route path="/#founder">About Founder</Route>
      <Route path="/#mission">Our Mission</Route>
      <Route path="/#teachers">Teachers</Route>
      <Route path="/#courses">Courses</Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Mission from "./Mission";

const timeBetweenImages = 6250;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  // const [firstImageTextShowing, setFirstImageTextShowing] = useState(true);
  // const [secondImageTextShowing, setSecondImageTextShowing] = useState(true);
  const timeRef = useRef(0);

  function resetTimeout() {
    if (timeRef.current) clearTimeout(timeRef.current);
  }

  useEffect(() => {
    resetTimeout();
    timeRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1)),
      timeBetweenImages
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <section className="first-image">
          <img src="https://media.timeout.com/images/105658075/image.jpg" />
          <div className="image-text">
            <span style={{ fontSize: `1.8rem` }}>Soul4English</span>
            <p>
              Our innovative program for non-native English speakers from around
              the world. Find out more about our program by clicking{" "}
              <Link to="/mission" element={<Mission />}>
                here
              </Link>{" "}
              or on the "About Us" page.
            </p>
          </div>
        </section>
        <section className="second-image">
          <img src="https://static.onecms.io/wp-content/uploads/sites/28/2021/02/23/boston-massachusetts-BOSTONTG0221.jpg" />
          <p className="image-text">
            Through Soul4English, our teachers aim to offer the highest quality
            lessons on a variety of topics in the most straightforward manner.
            Learn more about our mission by clicking{" "}
            <Link to="/about" element={<About />}>
              here
            </Link>{" "}
            or on the "About Us" page.
          </p>
        </section>
      </div>

      <div className="slideshowDots">
        {[1, 2].map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

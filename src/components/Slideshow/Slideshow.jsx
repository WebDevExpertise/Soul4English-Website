/** @format */

import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import "./slideshow.css";

const timeBetweenImages = 4000;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const timeRef = useRef(0);

  const firstSlidePictures = [
    "https://media.timeout.com/images/105658075/image.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg",
    "https://media.cntraveler.com/photos/5a99b5c520dfb6552425ecc8/2:1/w_2560%2Cc_limit/san-francisco_GettyImages-600366840.jpg",
  ];

  const [firstSlideImage, setFirstSlideImage] = useState(
    firstSlidePictures[Math.floor(Math.random() * firstSlidePictures.length)]
  );

  const secondSlidePictures = [
    "https://static.onecms.io/wp-content/uploads/sites/28/2021/02/23/boston-massachusetts-BOSTONTG0221.jpg",
    "https://www.discoverphl.com/wp-content/uploads/2021/07/Philadelphia-Museum-of-Art-and-skyline.-Photo-by-Elevated-Angles-1.jpg",
    "https://www.outfrontmedia.com/-/media/images/ofm/markets/nashville/nashville-hero.jpg",
  ];

  const [secondSlideImage, setSecondSlideImage] = useState(
    secondSlidePictures[Math.floor(Math.random() * secondSlidePictures.length)]
  );

  function resetTimeout() {
    if (timeRef.current) clearTimeout(timeRef.current);
  }

  function changeImage() {
    if (index === 1)
      setFirstSlideImage(
        firstSlidePictures[
          Math.floor(Math.random() * firstSlidePictures.length)
        ]
      );
    else if (index === 0)
      setSecondSlideImage(
        secondSlidePictures[
          Math.floor(Math.random() * secondSlidePictures.length)
        ]
      );
  }

  useEffect(() => {
    resetTimeout();
    timeRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
    }, timeBetweenImages);

    return () => {
      resetTimeout();
    };
  }, [index, firstSlideImage, secondSlideImage]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        onTransitionEnd={changeImage}
      >
        <section className="first-image">
          <img src={firstSlideImage} alt="" />
          <div className="image-text">
            <span style={{ fontSize: `1.8rem` }}>Soul4English</span>
            <p>
              Our innovative program for non-native English speakers from around
              the world. Find out more about our program by clicking{" "}
              <HashLink smooth to="/#story">
                here
              </HashLink>{" "}
              or by going to the "Our Story" section.
            </p>
          </div>
        </section>
        <section className="second-image">
          <img src={secondSlideImage} alt="" />
          <p className="image-text">
            Through Soul4English, our certified teachers aim to offer the
            highest quality lessons on a variety of topics in the most
            straightforward manner. Learn more about our mission by clicking{" "}
            <HashLink smooth to="/#mission">
              here
            </HashLink>{" "}
            or by going the "Our Mission" section.
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

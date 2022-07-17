/** @format */

import React, { useState, useEffect, useRef } from "react";
import "./whyUs.css";
import WhyUsTemplate from "./WhyUsTemplate";

const timeBetweenAnimation = 5500;

const WhyUs = () => {
  const [index, setIndex] = useState(1);
  const timeRef = useRef(0);

  const [firstTransition, setFirstTransition] = useState(
    "scale(1) translate3d(-102.5%, 0, 0)"
  );
  const [secondTransition, setSecondTransition] = useState(
    "scale(1) translate3d(205%, 0, 0)"
  );
  const [thirdTransition, setThirdTransition] = useState(
    "scale(1.1) translate3d(-90%, 0, 0)"
  );

  const [firstElement, setFirstElement] = useState(
    <WhyUsTemplate
      className="card"
      transform={{ transform: "translate3d(-2.5%, 0, 0)" }}
      reason="Our Commitment"
      description="Our top priority is to ensure your future success. By paying attention to small details, we've formed a program like no other, in which your success is our success."
    />
  );
  const [secondElement, setSecondElement] = useState(
    <WhyUsTemplate
      className="card"
      transform={{
        transform: "scale(1.1)",
        zIndex: "2",
      }}
      reason="Qualified Teachers"
      description="Through using state-of-the-art technology, our certified teachers from world-renowned universities are
        available for all students to gain as much knowledge from each class."
    />
  );
  const [thirdElement, setThirdElement] = useState(
    <WhyUsTemplate
      className="card"
      transform={{ transform: "translate3d(3.5%, 0, 0)" }}
      reason="Satisfaction Guaranteed"
      description="After registration, we offer students  free classes. By choosing us, our teachers commit themselves to
      spending valuable time to help students reach their needs."
    />
  );

  function resetTimeout() {
    if (timeRef.current) clearTimeout(timeRef.current);
  }

  useEffect(() => {
    resetTimeout();
    timeRef.current = setTimeout(() => {
      setIndex((prevIndex) => {
        if (prevIndex === 0) return 1;
        else if (prevIndex === 1) return 2;
        else if (prevIndex === 2) return 0;
      });

      if (index === 1) {
        setFirstElement(
          <WhyUsTemplate
            className="card"
            click={index !== 2 ? setIndex(index + 1) : setIndex(0)}
            initial={{ transform: firstTransition }}
            animate={{
              transform: secondTransition,
            }}
            k={index}
            reason="Our Commitment"
            description="Our top priority is to ensure your future success. By paying attention to small details, we've formed a program like no other, in which your success is our success."
          />
        );
        setSecondElement(
          <WhyUsTemplate
            className="card"
            initial={{ transform: thirdTransition }}
            initialScale={1.1}
            animate={{
              transform: firstTransition,
            }}
            k={index}
            reason="Qualified Teachers"
            description="Through using state-of-the-art technology, our certified teachers from world-renowned universities are
            available for all students to gain as much knowledge from each class."
          />
        );
        setThirdElement(
          <WhyUsTemplate
            className="card"
            initial={{ transform: secondTransition }}
            animate={{
              transform: thirdTransition,
            }}
            k={index}
            reason="Satisfaction Guaranteed"
            description="For certain courses, we offer students free classes. By choosing us, our teachers commit themselves to
            spending valuable time to help students reach their needs."
          />
        );
      } else if (index === 2) {
        setFirstElement(
          <WhyUsTemplate
            className="card"
            click={index !== 2 ? setIndex(index + 1) : setIndex(0)}
            initial={{ transform: firstTransition }}
            animate={{
              transform: secondTransition,
            }}
            k={index}
            reason="Qualified Teachers"
            description="Through using state-of-the-art technology, our certified teachers from world-renowned universities are
            available for all students to gain as much knowledge from each class."
          />
        );
        setSecondElement(
          <WhyUsTemplate
            className="card"
            initial={{ transform: thirdTransition }}
            initialScale={1.1}
            animate={{
              transform: firstTransition,
            }}
            k={index}
            reason="Satisfaction Guaranteed"
            description="For certain courses, we offer students free classes. By choosing us, our teachers commit themselves to
            spending valuable time to help students reach their needs."
          />
        );
        setThirdElement(
          <WhyUsTemplate
            className="card"
            initial={{ transform: secondTransition }}
            animate={{
              transform: thirdTransition,
            }}
            k={index}
            reason="Our Commitment"
            description="Our top priority is to ensure your future success. By paying attention to small details, we've formed a program like no other, in which your success is our success."
          />
        );
      } else if (index === 0) {
        setFirstElement(
          <WhyUsTemplate
            className="card"
            click={index !== 2 ? setIndex(index + 1) : setIndex(0)}
            initial={{ transform: firstTransition }}
            animate={{
              transform: secondTransition,
            }}
            k={index}
            reason="Satisfaction Guaranteed"
            description="For certain courses, we offer students free classes. By choosing us, our teachers commit themselves to
            spending valuable time to help students reach their needs."
          />
        );
        setSecondElement(
          <WhyUsTemplate
            className="card"
            initial={{ transform: thirdTransition }}
            initialScale={1.1}
            animate={{
              transform: firstTransition,
            }}
            k={index}
            reason="Our Commitment"
            description="Our top priority is to ensure your future success. By paying attention to small details, we've formed a program like no other, in which your success is our success."
          />
        );
        setThirdElement(
          <WhyUsTemplate
            className="card"
            initial={{ transform: secondTransition }}
            animate={{
              transform: thirdTransition,
            }}
            k={index}
            reason="Qualified Teachers"
            description="Through using state-of-the-art technology, our certified teachers from world-renowned universities are
                available for all students to gain as much knowledge from each class."
          />
        );
      }
    }, timeBetweenAnimation);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="why-us content" id="why-us">
      <h1>Why Choose Us?</h1>
      <section className="text" key={index}>
        {firstElement}
        {secondElement}
        {thirdElement}
      </section>
    </div>
  );
};

export default WhyUs;

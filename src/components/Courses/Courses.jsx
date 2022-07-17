/** @format */

import React, { useState, useEffect } from "react";
import Course from "./Course";
import "./courses.css";
import { motion, AnimatePresence } from "framer-motion";

export const Courses = () => {
  const [index, setIndex] = useState(0);
  const [previousArrowClick, setPreviousArrowClick] = useState(false);
  const [nextArrowClick, setNextArrowClick] = useState(false);
  const [bigScreenSize, setBigScreenSize] = useState(
    window.matchMedia("(min-width: 1025px)").matches
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 1025px)").matches) {
        setBigScreenSize(true);
        setIndex(index === 2 ? 1 : index);
      } else {
        setBigScreenSize(false);
      }
    });
  }, []);

  return (
    <div className="courses content" id="courses">
      <h1>Courses</h1>
      <section className="text">
        <p className="course-section-description">
          Our courses have been made with care for our students' needs, and each
          course comes with great quality. If you're interested in enrolling in
          any of the courses below, feel free to email us at
          soul4english@gmail.com.
        </p>
        {bigScreenSize && (
          <AnimatePresence initial={false}>
            <motion.div
              className="course-options"
              initial={
                nextArrowClick && !previousArrowClick
                  ? index === 0
                    ? {
                        transform: `translate3d(-200%, 0, 0)`,
                      }
                    : index === 1
                    ? {
                        transform: `translate3d(0%, 0, 0)`,
                      }
                    : {
                        transform: `translate3d(${(-index + 1) * 100}%, 0, 0)`,
                      }
                  : index === 2
                  ? {
                      transform: `translate3d(0%, 0, 0)`,
                    }
                  : {
                      transform: `translate3d(${(-index - 1) * 100}%, 0, 0)`,
                    }
              }
              animate={
                nextArrowClick && !previousArrowClick
                  ? index === 0
                    ? {
                        transform: `translate3d(0%, 0, 0)`,
                      }
                    : {
                        transform: `translate3d(${-index * 100}%, 0, 0)`,
                      }
                  : index === 2
                  ? {
                      transform: `translate3d(-200%, 0, 0)`,
                    }
                  : {
                      transform: `translate3d(${-index * 100}%, 0, 0)`,
                    }
              }
              transition={{
                duration: 0.65,
                ease: "anticipate",
              }}
            >
              <div className="course-set">
                <Course courseName="ESL Class" freeClasses={3} />
                <Course courseName="US Citizenship Class" freeClasses={3} />
                <Course courseName="English for New Immigrants" />
              </div>
              <div className="course-set">
                <Course courseName="English for College Students" />
                <Course courseName="English for Job Promotion" />
                <Course courseName="English for Professional Career" />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        {!bigScreenSize && (
          <AnimatePresence initial={false}>
            <motion.div
              className="course-options"
              initial={
                nextArrowClick && !previousArrowClick
                  ? index === 0
                    ? {
                        transform: `translate3d(-200%, 0, 0)`,
                      }
                    : index === 1
                    ? {
                        transform: `translate3d(0%, 0, 0)`,
                      }
                    : {
                        transform: `translate3d(${(-index + 1) * 100}%, 0, 0)`,
                      }
                  : index === 2
                  ? {
                      transform: `translate3d(0%, 0, 0)`,
                    }
                  : {
                      transform: `translate3d(${(-index - 1) * 100}%, 0, 0)`,
                    }
              }
              animate={
                nextArrowClick && !previousArrowClick
                  ? index === 0
                    ? {
                        transform: `translate3d(0%, 0, 0)`,
                      }
                    : {
                        transform: `translate3d(${-index * 100}%, 0, 0)`,
                      }
                  : index === 2
                  ? {
                      transform: `translate3d(-200%, 0, 0)`,
                    }
                  : {
                      transform: `translate3d(${-index * 100}%, 0, 0)`,
                    }
              }
              transition={{
                duration: 0.65,
                ease: "anticipate",
              }}
            >
              <div className="course-set">
                <Course courseName="ESL Class" freeClasses={3} />
                <Course courseName="US Citizenship Class" freeClasses={3} />
              </div>
              <div className="course-set">
                <Course courseName="English for New Immigrants" />
                <Course courseName="English for College Students" />
              </div>
              <div className="course-set">
                <Course courseName="English for Job Promotion" />
                <Course courseName="English for Professional Career" />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        <div
          className={
            index === 2 && !bigScreenSize ? "restart-arrow" : "next-arrow"
          }
          style={
            index === 1 && bigScreenSize
              ? {
                  opacity: "0",
                }
              : {
                  opacity: "1",
                }
          }
          onClick={() => {
            setIndex((prevIndex) => {
              if (prevIndex === 0) return 1;
              else if (prevIndex === 1 && !bigScreenSize) return 2;
              else if (prevIndex === 2 && !bigScreenSize) return 0;
              else return index;
            });
            setPreviousArrowClick(false);
            setNextArrowClick(true);
          }}
        ></div>
        <div
          className="previous-arrow"
          style={
            index === 0
              ? {
                  opacity: "0",
                }
              : {
                  opacity: "1",
                }
          }
          onClick={() => {
            setIndex((prevIndex) => {
              if (prevIndex === 1) return 0;
              else if (prevIndex === 2 && !bigScreenSize) return 1;
              else return index;
            });
            setPreviousArrowClick(true);
            setNextArrowClick(false);
          }}
        ></div>
      </section>
    </div>
  );
};

export default Courses;

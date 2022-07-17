/** @format */

import React from "react";

const Course = (props) => {
  return (
    <div className="course">
      <p className="course-name">{props.courseName}</p>
      <p className="price">USD $99</p>
      <div className="course-details">
        <p className="classes-per-week">2 Classes Per Week</p>
        <p className="classes-per-month">8 Classes Per Month</p>
        <p className="class-duration">40 Minute Classes</p>
        {props.freeClasses && (
          <p className="free-classes">{props.freeClasses} Free Classes</p>
        )}
      </div>
    </div>
  );
};

export default Course;

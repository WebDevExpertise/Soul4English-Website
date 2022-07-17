/** @format */

import React from "react";
import Teacher from "./Teacher";
import "./teachers.css";

const Teachers = () => {
  return (
    <div className="teachers content" id="teachers">
      <h1>Teachers</h1>
      <section className="text">
        <Teacher teacherName="Khadija Albi" />
        <Teacher teacherName="Shams Shahriear" />
        <Teacher teacherName="Amimul Ehsan" />
      </section>
    </div>
  );
};

export default Teachers;

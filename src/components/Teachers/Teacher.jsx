/** @format */

import React from "react";
import userIcon from "../../images/user-icon.png";

const Teacher = (props) => {
  return (
    <div className="teacher">
      <img className="user-icon" src={userIcon} alt="" />
      <p className="teacher-name">{props.teacherName}</p>
    </div>
  );
};

export default Teacher;

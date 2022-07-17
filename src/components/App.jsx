/** @format */

import React from "react";
import Base from "./Base/Base";
import Slideshow from "./Slideshow/Slideshow";
import Story from "./Story/Story";
import Founder from "./Founder/Founder";
import Mission from "./Mission/Mission";
import WhyUs from "./WhyUs/WhyUs";
import Teachers from "./Teachers/Teachers";
import Courses from "./Courses/Courses";

const App = () => {
  return (
    <div className="app">
      <Base>
        <div className="main-content">
          <Slideshow />
          <WhyUs />
          <Story />
          <Founder />
          <Mission />
          <Teachers />
          <Courses />
        </div>
      </Base>
    </div>
  );
};

export default App;

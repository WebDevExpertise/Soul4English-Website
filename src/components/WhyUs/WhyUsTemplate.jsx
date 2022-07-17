/** @format */

import React from "react";
import { motion } from "framer-motion";

const WhyUsTemplate = (props) => {
  return (
    <motion.div
      className="card"
      initial={
        props.initial
          ? {
              transform: `scale(${
                props.initialScale ? props.initialScale.toString() : "1"
              }) translate3d(0%, 0, 0)`,
            }
          : {}
      }
      animate={props.animate}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      style={props.transform}
      key={props.k}
      onClick={props.click}
    >
      <h5>{props.reason}</h5>
      <p className="reason-description">{props.description}</p>
    </motion.div>
  );
};

export default WhyUsTemplate;

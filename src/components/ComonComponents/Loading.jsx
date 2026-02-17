import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Loading() {
  const dotStyle = {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#0d6efd",
  };

  const bounceTransition = {
    duration: 0.6,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="d-flex gap-3">
        <motion.div
          style={dotStyle}
          animate={{ y: [-10, 10] }}
          transition={{ ...bounceTransition, delay: 0 }}
        />
        <motion.div
          style={dotStyle}
          animate={{ y: [-10, 10] }}
          transition={{ ...bounceTransition, delay: 0.2 }}
        />
        <motion.div
          style={dotStyle}
          animate={{ y: [-10, 10] }}
          transition={{ ...bounceTransition, delay: 0.4 }}
        />
      </div>
    </div>
  );
}

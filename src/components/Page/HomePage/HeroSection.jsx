import React from "react";

import Heading from "../../ComonComponents/Heading";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import img from "../../../assets/heroImg.png"

export default function HeroSection() {
  return (
    <div className="Section1">
      <Box1
        heading={
          <Heading
            title={"Libero X250"}
            subtitle={"250 Watt Electric Scooter"}
            heroSubBox={true}
            btn={true}
          />
        }
      />

      <Box2 img={img} />

      <Box3
        dis={
          "The Fully Loaded Libero x250 is a High Performance, Extremely Durable, High Speed, Lightweight Electric Scooter with a Huge Battery"
        }
      />
    </div>
  );
}

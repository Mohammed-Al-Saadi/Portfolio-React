import React from "react";
import "./css/Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CC1 from "./Pic/CC1.png";
import CC2 from "./Pic/CC2.png";
import CC3 from "./Pic/CC3.png";
import CC4 from "./Pic/CC4.png";
import CC5 from "./Pic/CC5.png";
import CC6 from "./Pic/CC6.png";
import CC7 from "./Pic/CC7.png";
import CC8 from "./Pic/CC8.png";

export default function Slider() {
  return (
    <>
      <div className="main-slides">
        <h1>Courses i have completed</h1>

        <Carousel infiniteLoop useKeyboardArrows autoPlay>
          <div>
            <img className="slides" alt="" src={CC1} />
          </div>
          <div>
            <img className="slides" alt="" src={CC2} />
          </div>
          <div>
            <img className="slides" alt="" src={CC3} />
          </div>
          <div>
            <img className="slides" alt="" src={CC4} />
          </div>
          <div>
            <img className="slides" alt="" src={CC5} />
          </div>
          <div>
            <img className="slides" alt="" src={CC6} />
          </div>
          <div>
            <img className="slides" alt="" src={CC7} />
          </div>
          <div>
            <img className="slides" alt="" src={CC8} />
          </div>
        </Carousel>
      </div>
    </>
  );
}

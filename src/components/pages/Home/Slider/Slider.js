import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import slider1 from "../../../../images/sliders/slider-1.jpg";
import slider2 from "../../../../images/sliders/slider-2.jpg";
import slider3 from "../../../../images/sliders/slider-3.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={slider1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Blogs from "../../../Blogs/Blogs";
import Footer from "../../../shared_components/Footer/Footer";
import Tour from "../../../Tours/Tours";
import Slider from "../Slider/Slider";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Slider />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;

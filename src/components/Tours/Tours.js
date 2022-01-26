import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Tour from "../Tour/Tour";
import "./Tours.css";

const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("https://ghoulish-barrow-11758.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  return (
    <Container>
      <div className="my-5">
        <h2 className="text-warning ">Popular Tour</h2>
        <p>We have a unique way of meeting your adventurous expectations!</p>
      </div>
      <Row lg={3} md={3} sm={2} xs={1} className="tours-container text-start">
        {tours.map((tour) => (
          <Tour key={tour._id} tour={tour}></Tour>
        ))}
      </Row>
    </Container>
  );
};

export default Tours;

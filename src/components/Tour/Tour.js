import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Tour.css";

const Tour = (props) => {
  const { _id, name, description, price, img, duration } = props.tour;

  return (
    <Col>
      <div className="tour-card" style={{ marginBottom: "40px" }}>
        <div className="card-image">
          <Card.Img variant="top" className="p-3 " height="200px" src={img} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <span className="d-flex">
            <p className="duration">{duration}</p>
            <p className="ms-auto price">$ {price}</p>
          </span>
          <Link to={`/tours/tourDetails/${_id}`}>
            <button className="btn-book">Book Now</button>
          </Link>
        </Card.Body>
      </div>
    </Col>
  );
};

export default Tour;

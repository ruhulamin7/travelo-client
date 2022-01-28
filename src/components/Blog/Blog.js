import React from "react";
import { Col } from "react-bootstrap";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import "./Blog.css";

const Blog = (props) => {
  const {
    _id,
    date,
    title,
    description,
    cost,
    img,
    rating,
    location,
    category,
    travellerInfo,
  } = props.blog;
  return (
    <div>
      <Col className="main-card border mb-5">
        <div className="mb-3">
          <div className="row g-0 card-row">
            <div className="col-md-4 card-image">
              <img src={img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <div className="location_date">
                  <h5 className="price">location: {location} </h5>
                  <h6 className="date">Date: {date} </h6>
                </div>
                <p className="card-text">{description.slice(0, 80)}</p>
                <div className="card-bottom">
                  <h5>
                    <span>{rating} </span>
                    <Rating
                      initialRating={`${rating}`}
                      readonly
                      fullSymbol="fas fa-star text-warning"
                      emptySymbol="far fa-star"
                    ></Rating>
                  </h5>
                  <h5 className="price">Cost: ${cost} </h5>
                </div>
                <div className="card-bottom">
                  <div>
                    <h6>Category: {category} </h6>
                  </div>
                </div>

                <div className="card-bottom">
                  <div>
                    <h6 className="price">Traveller: {travellerInfo} </h6>
                  </div>

                  <NavLink to={`/blogDetails/${_id}`}>
                    <button className="btn btn-warning">View Details</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Blog;

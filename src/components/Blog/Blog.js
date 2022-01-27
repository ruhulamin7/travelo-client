import React from "react";
import { Col } from "react-bootstrap";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import "./Blog.css";

const Blog = (props) => {
  const {
    _id,
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
      <Col className="main-card mb-5">
        <div className="mb-3" style={{ maxWidth: "560px" }}>
          <div className="row g-0 card-row">
            <div className="col-md-4 card-image">
              <img src={img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="price">location: {location} </p>
                <p className="card-text">{description.slice(0, 80)}</p>
                <div className="card-bottom">
                  <div>
                    <span>{rating} </span>
                    <Rating
                      initialRating={`${rating}`}
                      readonly
                      fullSymbol="fas fa-star text-warning"
                      emptySymbol="far fa-star"
                    ></Rating>
                  </div>
                  <span className="price">Cost: ${cost} </span>
                </div>
                <div className="card-bottom">
                  <div>
                    <span>Category: {category} </span>
                  </div>
                </div>

                <div className="card-bottom">
                  <div>
                    <small className="price">Traveller: {travellerInfo} </small>
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

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./BlogDetails.css";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  //   const { user } = useAuth();
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`https://pure-bastion-95266.herokuapp.com/blogs/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  console.log(blog);
  return (
    <Container>
      <div className="blog-details-container">
        <div>
          <div className="my-3 text-center">
            <img src={blog.img} className="img-fluid rounded" alt="..." />
          </div>
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <h4 className="card-text">Location: {blog.location}</h4>
            <h6 className="card-text">
              Rating: {blog.rating} &nbsp;
              <Rating
                initialRating={`${blog.rating}`}
                readonly
                fullSymbol="fas fa-star text-warning"
                emptySymbol="far fa-star"
              ></Rating>
            </h6>
            <h5>
              Cost: <strong>${blog.cost}</strong>
            </h5>
            <h5 className="card-text">Category: {blog.category}</h5> <br />
            <h4>Travel Description: </h4>
            <p className="card-text">{blog.description}</p>
            <br />
            <h5 className="card-text">Traveller: {blog.travellerInfo}</h5>
            <h6 className="card-text">Date: {blog.date}</h6>{" "}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetails;

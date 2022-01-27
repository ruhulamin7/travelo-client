import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./BloogDetails.css";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  //   const { user } = useAuth();
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  console.log(blog);
  return (
    <Container>
      {/* <h2>Bloog Details</h2> */}

      {/* <h2>{blog.title}</h2> */}
      <div className="tour-detail-info">
        <div className="row row-cols-md-1">
          <div className="mt-3 text-center">
            <img src={blog.img} className="img-fluid rounded" alt="..." />
          </div>
          <div className="">
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p className="card-text">Location: {blog.location}</p>
              <p className="card-text">
                Rating: {blog.rating} &nbsp;
                <Rating
                  initialRating={`${blog.rating}`}
                  readonly
                  fullSymbol="fas fa-star text-warning"
                  emptySymbol="far fa-star"
                ></Rating>
              </p>
              <b className="ms-auto text-warning">Cost ${blog.cost}</b>
              <p className="card-text">Category: {blog.category}</p>{" "}
              <h4>Travel Description: </h4>
              <p className="card-text">{blog.description}</p>
              <p className="card-text">Blogger: {blog.travellerInfo}</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetails;

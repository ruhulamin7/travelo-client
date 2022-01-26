import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./BloogDetails.css";
const BlogDetails = () => {
  //   const { user } = useAuth();
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const tourId = blogId;
  useEffect(() => {
    fetch(`https://ghoulish-barrow-11758.herokuapp.com/tours/${tourId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  console.log(blogId);
  return (
    <Container>
      <h2>Bloog Details</h2>

      <h2>{blog.name}</h2>
      <div className="tour-detail-info">
        <div className="row row-cols-md-1">
          <div className="mt-3 text-center">
            <img src={blog.img} className="img-fluid rounded" alt="..." />
          </div>
          <div className="">
            <div className="card-body">
              <h5 className="card-title">Place Name: {blog.name}</h5>
              <p className="card-text">{blog.description}</p>
              <span className="d-flex ">
                <b>{blog.duration}</b>
              </span>
              <b className="ms-auto text-warning">$ {blog.price}</b>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetails;

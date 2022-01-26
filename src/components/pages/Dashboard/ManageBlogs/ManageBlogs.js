import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./ManageBlogs.css";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://ghoulish-barrow-11758.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="row">
      <Container className="col-md-9 blog_content">
        <div className="my-5">
          <h2 className="text-warning ">Popular Tour</h2>
          <p>We have a unique way of meeting your adventurous expectations!</p>
        </div>
        <Row lg={1} md={1} sm={1} xs={1} className="blog-container text-start">
          {blogs.map((blog) => (
            <SingleBlog key={blog._id} blog={blog}></SingleBlog>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageBlogs;

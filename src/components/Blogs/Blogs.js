import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Blog from "../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://ghoulish-barrow-11758.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="row">
      <div className="col-md-2 side_bar ">
        <h3 className="my-5">Filter Blog</h3>
        <label for="cars">Choose a car:</label>
        <select name="cars" id="cars" form="carform">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <Container className="col-md-9 blog_content">
        <div className="my-5">
          <h2 className="text-warning ">Popular Tour</h2>
          <p>We have a unique way of meeting your adventurous expectations!</p>
        </div>
        <Row lg={2} md={2} sm={2} xs={1} className="blog-container text-start">
          {blogs.map((blog) => (
            <Blog key={blog._id} tour={blog}></Blog>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;

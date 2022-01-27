import React, { useEffect, useState } from "react";
import { Card, Container, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import Blog from "../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const approvedBlog = blogs.filter((blog) => blog.status === "Approved");
  console.log(approvedBlog);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const latestBlog = blogs.filter((blog) => blog.rating >= 5);

  if (!blogs) {
    return <Spinner animation="grow" variant="warning" />;
  }
  return (
    <div className="row">
      <div className="col-md-3 side_bar ">
        <h3 className="my-5">Latest Blog</h3>
        {/* <h3 className="my-5">Filter Blog</h3>
        <form action="">
          <label for="blogs">Choose filter category:</label>
          <select name="blogs" id="blogs" form="blogsform">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <button>Filter</button>
        </form> */}
        {latestBlog.slice(0, 4).map((blog) => (
          <div className="card side_bar_card">
            <img src={blog.img} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <span> {blog.rating} </span>
              <Rating
                initialRating={`${blog.rating}`}
                readonly
                fullSymbol="fas fa-star text-warning"
                emptySymbol="far fa-star"
              ></Rating>
              <NavLink to={`/blogDetails/${blog._id}`}>
                <button className="btn btn-warning btn-sm mt-2">
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <Container className="col-md-9 blog_content">
        <div className="my-5">
          <h2 className="text-warning ">Travellers Blog</h2>
          <p>We have a unique way of meeting your adventurous expectations!</p>
        </div>
        <Row lg={2} md={2} sm={2} xs={1} className="blog-container text-start">
          {approvedBlog.map((blog) => (
            <Blog key={blog._id} blog={blog}></Blog>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;

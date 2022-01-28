import React, { useEffect, useState } from "react";
import { Card, Container, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import Blog from "../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);

  const pageSize = 10;

  const approvedBlog = blogs.filter((blog) => blog.status === "Approved");
  console.log(approvedBlog);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs?page=${page}&&size=${pageSize}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        const count = data.count;
        const pageNumber = Math.ceil(count / pageSize);
        setCount(pageNumber);
      });
  }, [page]);

  const latestBlog = blogs.filter((blog) => blog.rating >= 5);

  return (
    <div className="row">
      <div className="col-md-3 side_bar ">
        <h3 className="my-5">Top Rated Spots</h3>

        {latestBlog.slice(0, 4).map((blog) => (
          <div key={blog._id} className="card side_bar_card">
            <img src={blog.img} className="card-img-top" alt="..." />
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
        {blogs.length === 0 && (
          <button class="btn btn-primary loader" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        )}

        <Row lg={1} md={1} sm={1} xs={1} className="blog-container text-start">
          {approvedBlog.map((blog) => (
            <Blog key={blog._id} blog={blog}></Blog>
          ))}

          <div className="pagination">
            <strong>Pages:</strong>
            {[...Array(count).keys()].map((number) => (
              <button
                className={number === page ? "selected" : ""}
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;

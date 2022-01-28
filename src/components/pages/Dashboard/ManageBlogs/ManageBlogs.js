import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./ManageBlogs.css";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data.blogs));
  }, [blogs]);

  const approvedBlog = blogs.filter((blog) => blog.status === "Approved");

  const pendingBlog = blogs.filter((blog) => blog.status === "Pending");
  if (!blogs) {
    return <Spinner animation="grow" variant="warning" />;
  }
  return (
    <div className="row">
      <Container className="col-md-9 blog_content">
        <div className="my-5">
          <h2 className="text-warning ">All Blogs</h2>
          <hr />
          <div className="total_blog bg-dark rounded  p-3 ">
            <h4 className="text-warning ">Total Blogs: {blogs.length}</h4>
            <h4 className="text-success ">
              Approved Blogs: {approvedBlog.length}
            </h4>
            <h4 className="text-danger">Pending Blogs: {pendingBlog.length}</h4>
          </div>
          <hr />
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
          {blogs.map((blog) => (
            <SingleBlog key={blog._id} blog={blog}></SingleBlog>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageBlogs;

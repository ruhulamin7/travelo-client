import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

const SingleBlog = (props) => {
  const { _id, name, description, price, img } = props.blog;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`https://murmuring-ravine-72524.herokuapp.com/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [blogs]);

  // delete order
  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://murmuring-ravine-72524.herokuapp.com/orders/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Order has been deleted.", "success");
            }
          });
      }
    });
  };

  // update order
  const handleUpdateStatus = (id) => {
    axios
      .put(`https://murmuring-ravine-72524.herokuapp.com/orders/${id}`, {
        status: "Approved",
      })
      .then((res) => {
        console.log(res);
        if (res.data.matchedCount > 0) {
          Swal.fire("Approved!", "Order has been Approved.", "success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Col className="main-card mb-5">
        <div className="mb-3" style={{}}>
          <div className="row g-0 card-row">
            <div className="col-md-4 card-image">
              <img src={img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description.slice(0, 80)}</p>
                <div className="card-bottom">
                  <div>
                    <span>{price} </span>
                    <Rating
                      initialRating={`${price}`}
                      readonly
                      fullSymbol="fas fa-star text-warning"
                      emptySymbol="far fa-star"
                    ></Rating>
                  </div>
                  <span className="price">Price: ${price} </span>
                </div>
                <div className="card-bottom">
                  <button
                    class="btn btn-warning"
                    onClick={() => handleUpdateStatus(_id)}
                  >
                    Pending
                    {blogs.status}
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteOrder(_id)}
                  >
                    Delete <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default SingleBlog;

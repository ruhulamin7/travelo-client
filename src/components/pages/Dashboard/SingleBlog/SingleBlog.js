import axios from "axios";

import { Col } from "react-bootstrap";
import Rating from "react-rating";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

const SingleBlog = (props) => {
  const {
    _id,
    title,
    description,
    cost,
    img,
    rating,
    location,
    travellerInfo,
    status,
  } = props.blog;

  // update blog
  const handleUpdateStatus = (id) => {
    axios
      .put(`http://localhost:5000/blogs/${id}`, {
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

  // delete blog
  const handleDeleteBlog = (id) => {
    const proceed = window.confirm("Are you sure to Delete it?");
    if (proceed) {
      const url = `http://localhost:5000/blogs/${id}`;
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
                <h5 className="card-title">{title}</h5>
                <h6>Location: {location}</h6>
                <p className="card-text">{description.slice(0, 80)}</p>
                <div className="card-bottom">
                  <div>
                    <span>Rating: {rating} </span>
                    <Rating
                      initialRating={`${rating}`}
                      readonly
                      fullSymbol="fas fa-star text-warning"
                      emptySymbol="far fa-star"
                    ></Rating>
                  </div>
                  <strong className="price">Cost: ${cost} </strong>
                </div>
                <div className="card-bottom">
                  <small>Traveller: {travellerInfo}</small>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleUpdateStatus(_id)}
                  >
                    {status}
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteBlog(_id)}
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

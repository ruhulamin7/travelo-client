import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import "./PostBlog.css";
const PostBlog = () => {
  const { admin } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.status = "Pending";
    if (admin) {
      data.status = "Approved";
    }
    axios
      .post("https://pure-bastion-95266.herokuapp.com/blogs", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Blog added successfully");
          reset();
        }
      });
  };
  return (
    <Container>
      <div className="add-tour my-5">
        <h2 className="text-warning text-center">Post a Travel Blog</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="add-tour-form">
          <input
            {...register("img", { required: true })}
            placeholder="Travelling spot's Image URL"
          />
          <input
            {...register("title", { required: true })}
            placeholder="Blog Title"
          />
          <textarea
            className="description-field"
            {...register("location", { required: true })}
            placeholder="Spot / Location"
          />
          <textarea
            className="description-field"
            {...register("travellerInfo", { required: true })}
            placeholder="Traveller's Name and Address"
          />

          <select {...register("category", { required: true })}>
            <option>--Select Travelling Category--</option>
            <option value="Solo Tour">Solo Tour</option>
            <option value="Family Tour">Family Tour</option>
            <option value="Adventure Tour">Adventure Tour</option>
            <option value="Bicycle Tour">Bicycle Tour</option>
            <option value="Cultural Tour">Cultural Tour</option>
            <option value="Hiking Tours">Hiking Tour</option>
          </select>

          <input
            type="date"
            placeholder="Travelling Date"
            {...register("date", { required: true })}
          />

          <textarea
            className="description-field"
            {...register("description", { required: true })}
            placeholder="Travelling Description"
          />

          <input
            type="number"
            {...register("cost", { required: true })}
            placeholder="Travelling Cost (in Dollar)"
          />
          <input
            type="number"
            {...register("rating", { required: true })}
            placeholder="Rating the travelling Spot (within 1-5)"
          />

          <button className="btn btn-submit btn-warning" type="submit">
            POST BLOG
          </button>
        </form>
      </div>
    </Container>
  );
};

export default PostBlog;

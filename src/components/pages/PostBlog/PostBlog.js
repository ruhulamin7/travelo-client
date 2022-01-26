import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./PostBlog.css";
const PostBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://ghoulish-barrow-11758.herokuapp.com/tours", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Tour added successfully");
          reset();
        }
      });
  };
  return (
    <Container>
      <div className="add-tour my-5">
        <h2 className="text-warning text-center">Post a Travel Blog</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="add-tour-form">
          <input {...register("img")} placeholder="Travel Image URL" />
          <input
            {...register("title", { required: true })}
            placeholder="Blog Title"
          />
          <textarea
            className="description-field"
            {...register("travelerInfo", { required: true })}
            placeholder="Traveler's Name and Address"
          />
          <textarea
            className="description-field"
            {...register("description", { required: true })}
            placeholder="Travel Description"
          />
          <select {...register("category", { required: true })}>
            <option>--Select Travel Category--</option>
            <option value="Solo Tour">Solo Tour</option>
            <option value="Family Tour">Family Tour</option>
            <option value="Adventure Tour">Adventure Tour</option>
            <option value="Bicycle Tour">Bicycle Tour</option>
            <option value="Cultural Tour">Cultural Tour</option>
            <option value="Hiking Tours">Hiking Tour</option>
          </select>
          <input
            type="number"
            {...register("cost")}
            placeholder="Traveling Cost (in Dollar)"
          />
          <textarea
            className="description-field"
            {...register("location", { required: true })}
            placeholder="Location/Address"
          />
          <button className="btn btn-submit btn-warning" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </Container>
  );
};

export default PostBlog;

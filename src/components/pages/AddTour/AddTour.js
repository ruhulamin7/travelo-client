import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddTour.css";

const AddTour = () => {
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
        <h2 className="text-warning ">Add a Tour</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="add-tour-form">
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Place Name"
          />
          <select {...register("duration")}>
            <option value="2 Days / 3 Nights">2 Days / 3 Nights</option>
            <option value="3 Days / 4 Nights">3 Days / 4 Nights</option>
            <option value="5 Days / 6 Nights">5 Days / 6 Nights</option>
          </select>
          <textarea
            className="description-field"
            {...register("description", { required: true })}
            placeholder="Tour Description"
          />
          <input type="number" {...register("price")} placeholder="Tour Cost" />

          <input {...register("img")} placeholder="Image URL" />
          <button className="btn btn-submit btn-warning" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </Container>
  );
};

export default AddTour;

import React, { useEffect } from "react";
import CardsComments from "../Cards/CardsComments";
import Rating from "../Rating/Rating";
import "./Scream.css";
import useFormComments from "./useForm";

const Scream = () => {
  const {
    handleChange,
    handleSubmit,
    comments,
    uploadComments,
    viewComments,
    getComments,
  } = useFormComments();

  const imgUrl = JSON.parse(localStorage.getItem("imgUrl"));

  useEffect(() => {
    getComments();
  }, []);
  return (
    <>
      <div className="comments container">
        <div className="scream container">
          <div className="row">
            <div className="col-md-8">
              <div className="image-container">
                <img src={imgUrl} alt="" />
              </div>
            </div>
            <div className="col-md scream">
              <Rating />
            </div>
          </div>
        </div>
        <form className="form-upload" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Comments</label>
            <br />
            <textarea
              // name=""
              id="desc"
              // cols="5"
              rows="2"
              className="form-control"
              value={comments}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="d-flex flex-row-reverse">
            <button className="btn btn-primary" onClick={uploadComments}>
              Comments
            </button>
          </div>
        </form>
        {viewComments.map((info) => {
          return (
            <CardsComments
              key={info.id}
              userName={info.data.user}
              comments={info.data.comments}
            />
          );
        })}
      </div>
    </>
  );
};

export default Scream;

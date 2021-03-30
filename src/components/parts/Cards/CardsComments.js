import React from "react";
import "./Cards.css";

const CardsComments = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h6>{props.userName}</h6>
          <p>{props.comments}</p>
        </div>
      </div>
    </>
  );
};

export default CardsComments;

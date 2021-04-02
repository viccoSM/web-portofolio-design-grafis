import React from "react";
import "./Rating.css";
import StarRatings from "react-star-ratings";

const GetRatings = (props) => {
  return (
    <>
      <div className="ratings">
        <p>{props.userName}</p>

        <StarRatings
          rating={props.rating}
          starRatedColor="gold"
          // changeRating={this.changeRating}
          starDimension="15px"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />
      </div>
    </>
  );
};

export default GetRatings;

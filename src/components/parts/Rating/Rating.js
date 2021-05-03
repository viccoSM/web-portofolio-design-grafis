import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import StarRatings from "react-star-ratings";
import GetRatings from "./GetRatings";

import "./Rating.css";
import useFormRating from "./useForm";

const Rating = () => {
  // const [rating, setRating] = useState();
  const { rating, addValueRating, getRatingApi, ratings } = useFormRating();
  useEffect(() => {
    getRatingApi();
  }, []);
  return (
    <div className="rating">
      <p>Give/Update ratings</p>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              className="rating"
              value={ratingValue}
              onClick={() => {
                // setRating(ratingValue);
                // console.log(ratingValue);
                addValueRating(ratingValue);
              }}
            />

            <FaStar
              className="star"
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9 "}
            />
          </label>
        );
      })}
      <div></div>
      {ratings.map((info) => {
        return (
          <GetRatings
            key={info.id}
            userName={info.data.userName}
            rating={info.data.rating}
          />
        );
      })}
    </div>
  );
};

export default Rating;

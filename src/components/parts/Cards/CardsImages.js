import React from "react";
import { BiComment, BiLike, BiSave, BiShare, BiTrash } from "react-icons/bi";

import Rating from "../Rating/Rating";

const CardsImages = (props) => {
  return (
    <>
      <div className="card-container">
        <div className="card-content">
          <h6>{props.userName}</h6>
          <div className="image-container">
            <img src={props.imageUrl} alt="" />
          </div>
          <div className="btn icons">
            <button onClick={() => props.likeWork()}>
              {props.iconLike}
              <p>{props.likes}</p>
            </button>
            <button onClick={() => props.comments()}>
              {/* <BiComment /> */}
              {props.iconComment}
            </button>
            <button onClick={() => props.share()}>
              {/* <BiShare /> */}
              {props.iconShare}
            </button>
            <button onClick={() => props.save()}>
              {/* <BiSave /> */}
              {props.iconSave}
            </button>
            <button onClick={() => props.delete()}>
              {/* <BiTrash /> */}
              {props.iconDelete}
            </button>
          </div>
          {/* <Rating /> */}
          {/* <div className="card-title">
            <h3>{props.title}</h3>
          </div> */}
          <p>{props.body}</p>
        </div>
      </div>
    </>
  );
};

export default CardsImages;

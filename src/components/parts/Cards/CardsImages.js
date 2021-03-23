import React from "react";
import { BiComment, BiLike, BiSave, BiShare, BiTrash } from "react-icons/bi";

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
            <button>
              <BiLike />
              <p>{props.likes}</p>
            </button>
            <button onClick={() => props.view(props.id)}>
              <BiComment />
            </button>
            <button>
              <BiShare />
            </button>
            <button>
              <BiSave />
            </button>
            <button>
              <BiTrash />
            </button>
          </div>
          {/* <div className="card-title">
            <h3>{props.title}</h3>
          </div> */}
          <p>{props.body}</p>
          <div className="card-body"></div>
        </div>
      </div>
    </>
  );
};

export default CardsImages;

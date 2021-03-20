import react from "react";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-body">
          <p>{props.body}</p>
        </div>
      </div>

      <div className="btn">
        <button>Edit</button>
        <button onClick={() => props.view(props.id)}>View</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Cards;

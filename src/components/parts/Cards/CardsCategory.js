import react from "react";
import "./Cards.css";

function CardsCategory(props) {
  return (
    <div className="card-container">
      <div className="image-container">
        {/* <img src={props.imageUrl} alt="" /> */}
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
      </div>

      <div className="btn">
        <button>{props.textEdit}</button>
        <button onClick={() => props.view(props.id)}>View</button>
        <button onClick={() => props.delete()}>{props.textDelete}</button>
      </div>
    </div>
  );
}

export default CardsCategory;

import React from "react";
import "./Category.css";

function Category() {
  return (
    <>
      <div className="category container">
        <h4 className="text-center">Create Category</h4>
        <hr></hr>
        <form className="form-category">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              id="email"
            />
          </div>

          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </>
  );
}

export default Category;

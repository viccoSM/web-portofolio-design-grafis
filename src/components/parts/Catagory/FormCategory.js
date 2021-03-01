import React, { useState, useEffect } from "react";

import firebase from "../../../config/Firebase/Firebase";
import "./FormCategory.css";

function FormCategory() {
  const [category, setCategory] = useState();
  // const [user, setUser] = useState();

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const createDataUser = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log("user", userData.uid);
    console.log("category", category);
    firebase
      .database()
      .ref("users/" + userData.uid)
      .push({
        category: category,
      });
  };

  return (
    <>
      <form className="form-category" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            id="category"
            value={category}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary" onClick={createDataUser}>
          Create
        </button>
      </form>
    </>
  );
}

export default FormCategory;

import React, { useState, useEffect } from "react";

import { database } from "../../../config/Firebase/Firebase";
import "./FormCategory.css";

function FormCategory() {
  const [values, setValues] = useState({
    category: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const userData = JSON.parse(localStorage.getItem("userData"));
  const createDataUser = () => {
    database()
      .ref("users/" + userData.uid)
      .push({
        category: values.category,
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

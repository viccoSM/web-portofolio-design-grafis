import React from "react";

// import firebase from "../../../config/Firebase/Firebase";
import "./FormCategory.css";
import useFormCategory from "./useForm";

function FormCategory() {
  const {
    handleChange,
    createDataUser,
    handleSubmit,
    category,
  } = useFormCategory();
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

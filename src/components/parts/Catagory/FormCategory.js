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
          <div className="create category input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Create Category"
              id="category"
              value={category}
              onChange={handleChange}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={createDataUser}>
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormCategory;

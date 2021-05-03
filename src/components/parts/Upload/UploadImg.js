import React from "react";

import "./UploadImg.css";
import useFormUpload from "./useForm";

const UploadImg = () => {
  // const [desc, setDesc] = useState();
  const {
    handleChange,
    uploadFile,
    onFileChange,
    desc,
    fileUrl,
  } = useFormUpload();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // const createDesc = () => {
  //   const userData = JSON.parse(localStorage.getItem("userData"));
  //   const idCategory = JSON.parse(localStorage.getItem("idCategory"));
  //   console.log("user", userData.user.uid);
  //   console.log("category", desc);
  //   firebase
  //     .database()
  //     .ref("users/" + userData.user.uid + "/category/" + idCategory)
  //     .push({
  //       description: desc,
  //     });
  //   history.push(`/dash/category/${idCategory}`);
  // };
  return (
    <>
      <div className="upload container">
        <form className="form-upload" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">
              Upload your work <i class="bi bi-heart"></i>
            </label>

            <br />
            <input type="file" onChange={onFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="">Description</label>
            <br />
            <textarea
              // name=""
              id="desc"
              cols="5"
              rows="3"
              className="form-control"
              value={desc}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={uploadFile}>
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadImg;

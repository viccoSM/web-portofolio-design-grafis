import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Cards from "../../parts/Cards/Cards";
import useFormUserWork from "./useForm";

const UserWork = () => {
  const { images, getImageApi } = useFormUserWork();
  const history = useHistory();
  useEffect(() => {
    getImageApi();
  });
  return (
    <>
      <div className="container">
        <div className="category">
          <div className="d-flex flex-row-reverse">
            <button
              class="btn btn-primary"
              onClick={() => {
                history.push(`/dash/upload`);
              }}
            >
              Upload
            </button>
          </div>
          <div class="d-flex flex-wrap">
            {images.map((info) => {
              return (
                // <Cards key={info.id} imageUrl={info.data.file} />
                <img
                  key={info.id}
                  src={info.data.file}
                  style={{ width: 200 }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserWork;

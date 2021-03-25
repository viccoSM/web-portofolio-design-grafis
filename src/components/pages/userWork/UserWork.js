import React, { useEffect, useState } from "react";
import { BiComment, BiLike, BiShare, BiTrash } from "react-icons/bi";
import { useHistory } from "react-router";
// import CardsCategory from "../../parts/Cards/CardsCategory";
// import Cards from "../../parts/Cards/CardsCategory";
import CardsImages from "../../parts/Cards/CardsImages";
import useFormUserWork from "./useForm";

const UserWork = () => {
  const { images, getImageApi, getData } = useFormUserWork();
  const history = useHistory();

  useEffect(() => {
    getImageApi();
    // getData();
  }, []);
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
                <CardsImages
                  key={info.id}
                  userName={info.data.user}
                  imageUrl={info.data.file}
                  body={info.data.description}
                  iconDelete={<BiTrash />}
                  iconLike={<BiLike />}
                  iconShare={<BiShare />}
                  iconComment={<BiComment />}
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

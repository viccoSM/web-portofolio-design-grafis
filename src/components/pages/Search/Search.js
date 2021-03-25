import React, { useEffect, useState } from "react";
import { BiComment, BiLike, BiSave, BiShare } from "react-icons/bi";
import firebase from "../../../config/Firebase/Firebase";
import CardsImages from "../../parts/Cards/CardsImages";
import useFormSearch from "./useform";

const Search = () => {
  const { getImageApi, saveImages, images } = useFormSearch();

  useEffect(() => {
    getImageApi();
  }, []);
  return (
    <>
      <div className="container">
        <div className="category">
          <div className="d-flex flex-row-reverse"></div>
          <div class="d-flex flex-wrap">
            {images.map((info) => {
              return (
                <CardsImages
                  key={info.id}
                  userName={info.data.user}
                  imageUrl={info.data.file}
                  body={info.data.description}
                  iconComment={<BiComment />}
                  iconShare={<BiShare />}
                  iconSave={<BiSave />}
                  iconLike={<BiLike />}
                  save={() => {
                    saveImages(
                      info.data.description,
                      info.data.file,
                      info.data.user
                    );
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

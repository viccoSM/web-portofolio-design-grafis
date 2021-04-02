import React, { useEffect } from "react";
import { BiComment, BiLike, BiSave, BiShare } from "react-icons/bi";
import { useHistory } from "react-router";
import likesWork from "../../../config/likesWork/likesWork";
import CardsImages from "../../parts/Cards/CardsImages";
import Rating from "../../parts/Rating/Rating";
import SearchBar from "../../parts/SearchBar/SearchBar";
import useFormBeranda from "./useForm";
const Beranda = () => {
  const { getImageApi, images, saveImages } = useFormBeranda();
  const { likeWork } = likesWork();

  const history = useHistory();

  useEffect(() => {
    getImageApi();
    // console.log("img", images);
    // getFileApi();
  }, []);
  return (
    <>
      <div className="container">
        <div className="category">
          <div className="d-flex flex-row-reverse"></div>
          <div class="d-flex flex-wrap">
            {images.map((info) => {
              return (
                <>
                  <CardsImages
                    key={info.id}
                    userName={info.data.user}
                    imageUrl={info.data.file}
                    body={info.data.description}
                    likes={info.data.likes}
                    iconComment={<BiComment />}
                    iconShare={<BiShare />}
                    iconSave={<BiSave />}
                    iconLike={<BiLike />}
                    comments={() => {
                      const idImg = localStorage.setItem(
                        "idImg",
                        JSON.stringify(info.id)
                      );
                      const imgUrl = localStorage.setItem(
                        "imgUrl",
                        JSON.stringify(info.data.file)
                      );
                      history.push(`/dash/scream/${info.id}`);
                    }}
                    save={() => {
                      saveImages(
                        info.data.description,
                        info.data.file,
                        info.data.user
                      );
                    }}
                    likeWork={() => {
                      const countLikes = localStorage.setItem(
                        "countLikes",
                        info.data.likes
                      );
                      const idImg = localStorage.setItem(
                        "idImg",
                        JSON.stringify(info.id)
                      );
                      likeWork();
                    }}
                    share={() => {
                      const imgUrl = localStorage.setItem(
                        "imgUrl",
                        JSON.stringify(info.data.file)
                      );
                      history.push(`/dash/share/${info.id}`);
                    }}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;

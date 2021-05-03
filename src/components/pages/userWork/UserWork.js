import React, { useEffect } from "react";
import { BiComment, BiLike, BiShare, BiTrash } from "react-icons/bi";
import { useHistory } from "react-router";
import likesWork from "../../../config/likesWork/likesWork";
import CardsImages from "../../parts/Cards/CardsImages";
import useFormUserWork from "./useForm";

const UserWork = () => {
  const { images, getImageApi, deleteImg } = useFormUserWork();
  const { likeWork } = likesWork();
  const history = useHistory();

  useEffect(() => {
    getImageApi();
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
                  likes={info.data.likes}
                  delete={() => {
                    const idImg = localStorage.setItem(
                      "idImg",
                      JSON.stringify(info.id)
                    );
                    deleteImg();
                  }}
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

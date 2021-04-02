import axios from "axios";
import React, { useState, useEffect } from "react";
import { BiShare, BiTrash } from "react-icons/bi";
import { useHistory } from "react-router";
import CardsImages from "../../parts/Cards/CardsImages";
import useFormSaved from "./useForm";

const SavesFiles = () => {
  const [images, setImages] = useState([]);
  const { deleteImg } = useFormSaved();
  const history = useHistory();

  const getImages = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    axios
      .get(
        "https://portofolio-desain-grafis-default-rtdb.firebaseio.com/users/" +
          userData.user.uid +
          "/saved.json"
      )
      .then((res) => {
        const infoData = [];
        Object.keys(res.data).map((key) => {
          infoData.push({
            id: key,
            data: res.data[key],
          });
        });
        setImages(infoData);
        console.log("img", images);
        // console.log("categories", categories);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getImages();
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
                  delete={() => {
                    const idImg = localStorage.setItem(
                      "idImg",
                      JSON.stringify(info.id)
                    );
                    deleteImg();
                  }}
                  share={() => {
                    const imgUrl = localStorage.setItem(
                      "imgUrl",
                      JSON.stringify(info.data.file)
                    );
                    history.push(`/dash/share/${info.id}`);
                  }}
                  iconDelete={<BiTrash />}
                  iconShare={<BiShare />}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SavesFiles;

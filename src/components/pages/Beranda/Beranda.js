import React, { useEffect } from "react";
import { BiComment, BiSave, BiShare } from "react-icons/bi";
import CardsImages from "../../parts/Cards/CardsImages";
import SearchBar from "../../parts/SearchBar/SearchBar";
import useFormBeranda from "./useForm";
const Beranda = () => {
  const { getImageApi, images, saveImages } = useFormBeranda();
  useEffect(() => {
    getImageApi();
    // console.log("img", images);
    // getFileApi();
  }, []);
  return (
    <>
      <div className="container">
        <div className="category">
          <div className="d-flex flex-row-reverse">
            <SearchBar />
          </div>
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

export default Beranda;

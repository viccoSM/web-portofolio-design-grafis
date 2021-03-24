import React, { useEffect } from "react";
import CardsImages from "../../parts/Cards/CardsImages";
import SearchBar from "../../parts/SearchBar/SearchBar";
import useFormBeranda from "./useForm";
const Beranda = () => {
  const { getImageApi, images } = useFormBeranda();
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
            {/* <button
              class="btn btn-primary"
              onClick={() => {
                // history.push(`/dash/upload`);
              }}
            >
              Upload
            </button> */}
          </div>
          <div class="d-flex flex-wrap">
            {images.map((info) => {
              return (
                <CardsImages
                  key={info.id}
                  userName={info.data.user}
                  imageUrl={info.data.file}
                  body={info.data.description}
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

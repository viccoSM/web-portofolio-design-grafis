import axios from "axios";
import React, { useState } from "react";

const useFormUserWork = () => {
  const [images, setImages] = useState([]);

  const getImageApi = async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const idCategory = JSON.parse(localStorage.getItem("idCategory"));

    axios
      .get(
        `https://portofolio-desain-grafis-default-rtdb.firebaseio.com/users/${userData.user.uid}/files/${idCategory}.json`
      )
      .then((res) => {
        const infoData = [];
        Object.keys(res.data).map((key) => {
          infoData.push({
            id: key,
            data: res.data[key],
          });
        });
        // console.log("info", infoData);
        // setImages(infoData);
        setImages(infoData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return { images, getImageApi };
};

export default useFormUserWork;

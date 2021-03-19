import { useState } from "react";
import { useHistory } from "react-router";
import firebase from "../../../config/Firebase/Firebase";

export const useFormUpload = () => {
  const [desc, setDesc] = useState();
  const [image, setImage] = useState();
  const [fileUrl, setFileUrl] = useState();

  const history = useHistory();

  const onFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const userData = JSON.parse(localStorage.getItem("userData"));
  const idCategory = JSON.parse(localStorage.getItem("idCategory"));

  const uploadFileImg = () => {
    return new Promise(async (resolve, reject) => {
      const storageRef = firebase.storage().ref(`images/`);
      const fileRef = storageRef.child(image.name);
      await fileRef.put(image);
      setFileUrl(await fileRef.getDownloadURL());
      //  history.push(`/dash/category/${idCategory}`);
      resolve(fileUrl);
    });
  };
  //   const uploadDescImg = () => {
  //     console.log("user", userData.user.uid);
  //     console.log("category", desc);
  //     firebase
  //       .database()
  //       .ref("users/" + userData.user.uid + "/category/" + idCategory)
  //       .push({
  //         description: desc,
  //         file: fileUrl,
  //       });
  //     // history.push(`/dash/category/${idCategory}`);
  //   };
  const uploadFile = async () => {
    const res = await uploadFileImg().catch((err) => err);
    if (res) {
      console.log("user", userData.user.uid);
      console.log("category", desc);
      firebase
        .database()
        .ref("users/" + userData.user.uid + "/files/" + idCategory)
        .push({
          description: desc,
          file: res,
        });
      history.push(`/dash/category/${idCategory}`);
    }
  };

  return {
    handleChange,
    onFileChange,
    desc,
    fileUrl,
    uploadFile,
  };
};

export default useFormUpload;

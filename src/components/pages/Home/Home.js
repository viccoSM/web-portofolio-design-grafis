import React, { useEffect, useState } from "react";
// import firebase from "../../../config/Firebase/Firebase";
import FormCategory from "../../parts/Catagory/FormCategory";
import Cards from "../../parts/Cards/Cards";
import Profile from "../../parts/Profile/Profile";
import useForm from "./useForm";

const Home = () => {
  const { getProfilApi, profil, getCategoryApi, categories } = useForm();
  // const [profil, setProfil] = useState([]);
  useEffect(() => {
    getProfilApi();
    getCategoryApi();
    // const userData = JSON.parse(localStorage.getItem("userData"));
    // axios
    //   .get(
    //     "https://portofolio-desain-grafis-default-rtdb.firebaseio.com/users/" +
    //       userData.user.uid +
    //       "/information.json"
    //   )
    //   .then((res) => {
    //     // console.log("res", res);
    //     const infoData = [];
    //     Object.keys(res.data).map((key) => {
    //       infoData.push({
    //         id: key,
    //         data: res.data[key],
    //       });
    //     });
    //     setProfil(infoData);
    //   });
  });
  return (
    <>
      <div className="home jumbotron bg-dark" style={{ background: `url()` }}>
        <div className="home container">
          <div className="position-relative">
            {profil.map((info) => (
              <Profile
                key={info.id}
                firstName={info.data.firstName}
                lastName={info.data.lastName}
                university={info.data.university}
                major={info.data.major}
                email={info.data.email}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="profile"></div>
        <div className="category">
          <div className="d-flex flex-row-reverse">
            <FormCategory />
          </div>
          <div class="d-flex flex-wrap">
            {categories.length > 0 ? (
              <>
                {categories.map((info) => {
                  return <Cards key={info.id} title={info.data.tittle} />;
                })}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

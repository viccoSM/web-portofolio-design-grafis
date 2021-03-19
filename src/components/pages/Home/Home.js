import React, { useEffect, useState } from "react";
// import firebase from "../../../config/Firebase/Firebase";
import FormCategory from "../../parts/Catagory/FormCategory";
import Cards from "../../parts/Cards/Cards";
import Profile from "../../parts/Profile/Profile";
import useForm from "./useForm";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const { getProfilApi, profil, getCategoryApi, categories } = useForm();
  useEffect(() => {
    getProfilApi();
    getCategoryApi();
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
        <div className="category">
          <div className="d-flex flex-row-reverse">
            <FormCategory />
          </div>
          <div class="d-flex flex-wrap">
            {categories.map((info) => {
              return (
                <Cards
                  key={info.id}
                  title={info.data.tittle}
                  view={() => {
                    history.push(`/dash/category/${info.id}`);
                    const idCategory = localStorage.setItem(
                      "idCategory",
                      JSON.stringify(info.id)
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

export default Home;

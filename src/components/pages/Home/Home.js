import React, { useEffect, useState } from "react";
import firebase from "../../../config/Firebase/Firebase";
import FormCategory from "../../parts/Catagory/FormCategory";
// import Cards from "../../parts/Cards/Cards";
import Profile from "../../parts/Profile/Profile";
import useForm from "./useForm";
import { useHistory } from "react-router";
import CardsCategory from "../../parts/Cards/CardsCategory";

const Home = () => {
  const history = useHistory();
  const {
    getProfilApi,
    profil,
    getCategoryApi,
    DeleteCategory,
    categories,
  } = useForm();
  useEffect(() => {
    getProfilApi();
    getCategoryApi();
  });
  return (
    <>
      <div className="home jumbotron bg-dark" style={{ background: `url()` }}>
        <div className="home container">
          <div className="position-relative">
            {profil.map((info) => {
              const userName = localStorage.setItem(
                "userName",
                JSON.stringify(info.data.userName)
              );
              return (
                <>
                  <Profile
                    key={info.id}
                    userName={info.data.userName}
                    firstName={info.data.firstName}
                    lastName={info.data.lastName}
                    university={info.data.university}
                    major={info.data.major}
                    email={info.data.email}
                  />
                </>
              );
            })}
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
                <CardsCategory
                  key={info.id}
                  title={info.data.tittle}
                  delete={async () => {
                    const idCategory = localStorage.setItem(
                      "idCategory",
                      JSON.stringify(info.id)
                    );
                    await DeleteCategory();
                  }}
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

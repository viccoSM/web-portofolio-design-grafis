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
          <div className="d-flex flex-wrap">
            <CardsCategory
              title={"Saved Files"}
              view={() => {
                history.push(`/dash/savedfiles`);
              }}
            />
            {categories.map((info) => {
              return (
                <CardsCategory
                  key={info.id}
                  title={info.data.tittle}
                  textDelete={"Delete"}
                  textEdit={"Edit"}
                  delete={() => {
                    const idCategory = localStorage.setItem(
                      "idCategory",
                      JSON.stringify(info.id)
                    );
                    DeleteCategory();
                  }}
                  view={() => {
                    history.push(`/dash/category/${info.id}`);
                    const idCategory = localStorage.setItem(
                      "idCategory",
                      JSON.stringify(info.id)
                    );
                    const tittleCat = localStorage.setItem(
                      "tittleCat",
                      JSON.stringify(info.data.tittle)
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

import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { handleLoginSubmit } from "../../../config/Redux/Action/Auth";

import "./Login.css";
import useForm from "./useForm";

const Login = () => {
  const { handleLoginSubmit, handleChange, handleSubmit } = useForm();

  const history = useHistory();
  const loginSubmit = async () => {
    const res = await handleLoginSubmit().catch((err) => err);
    if (res) {
      history.push("/dash/Home");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <>
      <div className="login container">
        <h4 className="text-center">Login</h4>
        <hr></hr>
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary" onClick={loginSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

import React from "react";

import "./Login.css";
import useForm from "./useForm";

const Login = () => {
  const { handleLoginSubmit, handleChange, handleSubmit } = useForm();

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
          <button className="btn btn-primary" onClick={handleLoginSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

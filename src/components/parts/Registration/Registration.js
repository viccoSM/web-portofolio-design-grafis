import React from "react";
import validate from "./ValidateInfo";

import "./Registration.css";
import useFormRegister from "./useForm";

const Registration = () => {
  const {
    handleChange,
    registerSubmit,
    values,
    handleSubmit,
    errors,
  } = useFormRegister(validate);

  return (
    <>
      <div className="registration container">
        <h4 className="text-center">Registration</h4>
        <hr></hr>
        <form className="form-register" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  id="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p>{errors.firstName}</p>}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  id="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />

                {errors.lastName && <p>{errors.lastName}</p>}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="userName"
                  id="userName"
                  value={values.userNamr}
                  onChange={handleChange}
                />

                {errors.userName && <p>{errors.userName}</p>}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="University"
                  name="university"
                  id="university"
                  value={values.university}
                  onChange={handleChange}
                />

                {errors.university && <p>{errors.university}</p>}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Program of Study"
                  name="major"
                  id="major"
                  value={values.major}
                  onChange={handleChange}
                />

                {errors.major && <p>{errors.major}</p>}
              </div>
            </div>
            <div className="col-md">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gender"
                  name="gender"
                  id="gender"
                  value={values.gender}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Date of Birth"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  value={values.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />

                {errors.email && <p>{errors.email}</p>}
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
            />

            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name="confirmPassword"
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
            />

            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </div>
          <button className="btn btn-primary" onClick={registerSubmit}>
            Register
          </button>
        </form>
      </div>
    </>
  );
  // }
};

export default Registration;

import React, { Component } from "react";

import firebase from "../../../config/Firebase";

import "./Registration.css";

class Registration extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChangeText = (e) => {
    // console.log(e.target);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleRegisterSubmit = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        // ...
        console.log("success", user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);
      });
  };
  render() {
    return (
      <>
        <div className="registration container">
          <h4 className="text-center">Registration</h4>
          <hr></hr>
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                id="email"
                onChange={this.handleChangeText}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
                onChange={this.handleChangeText}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={this.handleRegisterSubmit}
            >
              Register
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Registration;

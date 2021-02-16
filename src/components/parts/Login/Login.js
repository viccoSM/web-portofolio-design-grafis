import React, { Component } from "react";

import firebase from "../../../config/Firebase/Firebase";

import "./Login.css";

class Login extends Component {
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
  handleLoginSubmit = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
        <div className="login container">
          <h4 className="text-center">Login</h4>
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
              onClick={this.handleLoginSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;

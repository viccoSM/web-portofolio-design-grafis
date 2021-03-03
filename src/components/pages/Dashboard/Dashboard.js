import React, { useEffect, useState, Component } from "react";
// import Home from "../Home/Home";
import firebase from "../../../config/Firebase/Firebase";
import Login from "../../parts/Login/Login";
import Dash from "./Dash";

const Dashboard = () => {
  const [user, setUser] = useState("");

  const authListner = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListner();
  }, []);
  return (
    <>
      <div className="dashboard">{user ? <Dash /> : <Login />}</div>
    </>
  );
};

export default Dashboard;

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: null,
//     };

//     this.authListener = this.authListener.bind(this);
//   }

//   componentDidMount() {
//     this.authListener();
//   }

//   authListener() {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({ user });
//       } else {
//         this.setState({ user: null });
//       }
//     });
//   }

//   render() {
//     return <div className="App">{this.state.user ? <Home /> : <Login />}</div>;
//   }
// }

// export default Dashboard;

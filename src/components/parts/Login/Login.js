import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { handleLoginSubmit } from "../../../config/Redux/Action/Auth";

import "./Login.css";
import useForm from "./useForm";

const Login = () => {
  const { handleLoginSubmit, handleChange, handleSubmit } = useForm();
  // const { isLoading } = useSelector((state) => state.AuthReducer);
  // const dispatch = useDispatch();

  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setValues({
  //     ...values,
  //     [id]: value,
  //   });
  // };

  // dispatch(handleLoginSubmit(values));

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  // dispatch(handleLoginSubmit(values));

  // useEffect(() => {
  // }, [dispatch]);

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

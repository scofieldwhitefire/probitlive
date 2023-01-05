import "assets/css/login/login.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { login } from "features/users";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initial = {
  username: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initial);
  const { isAuthenticated } = useSelector((state) => state.user);

  const { username, password } = formData;

  const Toast = (t, m) => {
    if (t === "success") {
      toast.success(m);
    } else if (t === "info") {
      toast.info(m);
    } else if (t === "error") {
      toast.error(m);
    } else if (t === "warn") {
      toast.warn(m);
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(login({ username, password }));
    if (res?.error?.message.toLowerCase() === "rejected") {
      if (res?.payload?.status === 401) {
        Toast("error", res?.payload?.detail);
      } else {
        Toast("error", "Unable to process your request");
      }
    }
  };

  if (isAuthenticated) return <Navigate to="/dashboard" />;
  return (
    <>
      <ToastContainer />
      <div className="form-body without-side">
        <div className="website-logo">
          <a href="index-2.html">
            <div className="logo">
              <img className="logo-size" src="images/logo-light.svg" alt="" />
            </div>
          </a>
        </div>
        <div className="row">
          <div className="img-holder">
            <div className="bg"></div>
            <div className="info-holder">
              <img src="images/graphic3.svg" alt="" />
            </div>
          </div>
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Login to account</h3>
                <p>Enter details to access account.</p>
                <form onSubmit={onSubmit}>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={onChange}
                    value={username}
                    required
                  />
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                    value={password}
                    required
                  />
                  <div className="form-button">
                    <button id="submit" type="submit" className="ibtn">
                      Login
                    </button>{" "}
                    <Link to="/forget-password">Forget password?</Link>
                  </div>
                </form>
                <div className="page-links" style={{ paddingTop: "15px" }}>
                  <Link to="/register">Register new account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

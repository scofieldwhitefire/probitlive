import "assets/css/login/login.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Register, checkEmaila } from "features/users";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initial = {
  first_name: "",
  last_name: "",
  username: "",
  email: "", //
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const { registered, loading } = useSelector((state) => state.user);
  const [formData, setFormData] = useState(initial);
  const [ee, setEE] = useState(!0);

  const { first_name, last_name, username, email, password, confirmPassword } =
    formData;

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
    if (e.target.name === "email") {
      checkEmail(e.target.value);
    }
  };
  
  const checkEmail = async (email) => {
    const res = await dispatch(checkEmaila({ email }));
    if (res.meta.requestStatus.toLowerCase() === "fulfilled") {
      if (res?.payload?.email === "found") {
        Toast("error", `${email} has been used, Try another`);
        setEE(!1) 
      } else if (res.meta.requestStatus.toLowerCase() === "rejected") {
        setEE(!0)
      }
    }
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();

    await checkEmail(email);
    
    let pw = !0;

    if (password !== confirmPassword) {
      Toast("error", `Both passwords don't match`);
      pw = !1;
    }

    let res;

    if (pw&&ee) {
      res = await dispatch(
        Register({ first_name, last_name, username, email, password })
      );
      if (res?.error?.message.toLowerCase() === "rejected") {
        if (res?.payload?.statusText.toLowerCase() === "bad request") {
          Toast("error", `${res?.payload?.detail[0]}`);
        }
      }
    }
  };

  if (registered) return <Navigate to="/login" />;
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
                <h3>Register</h3>
                <p>Enter details to create a new account.</p>
                <form onSubmit={onSubmit}>
                  <input
                    className="form-control"
                    type="text"
                    name="first_name"
                    placeholder="First name"
                    onChange={onChange}
                    value={first_name}
                    required
                  />
                  <input
                    className="form-control"
                    type="text"
                    name="last_name"
                    placeholder="Last name"
                    onChange={onChange}
                    value={last_name}
                    required
                  />
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
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    onChange={onChange}
                    value={email}
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
                  <input
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmed Password"
                    onChange={onChange}
                    value={confirmPassword}
                    required
                  />
                  <div className="form-button">
                    <button id="submit" type="submit" className="ibtn">
                      Register
                    </button>
                  </div>
                </form>
                <div className="page-links" style={{ paddingTop: "15px" }}>
                  <Link to="/login">Login to account</Link>
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

import "assets/css/dashboard/css/index.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { login } from "features/users";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardHelmet from "components/Helmets/Dashboard";

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
    toast.clearWaitingQueue()
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

  const viewPassword = (e) => {
    
  };
  
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let ce = !0

    if (username === null || username === "") {
      Toast("error", "Username is required");
      ce = !1;
    }
    if (password === null || password === "") {
      Toast("error", "Password is required");
      ce = !1;
    }

    if (ce) {
    const res = await dispatch(login({ username, password }));
    if (res.meta.requestStatus.toLowerCase() === "rejected") {
      if (res?.payload?.status === 401) {
        Toast("error", res?.payload?.detail);
      } else {
        Toast("error", "Unable to process your request");
      }
    }
    }
  };

  if (isAuthenticated) return <Navigate to="/dashboard" />;
  return (
    <>
      <DashboardHelmet />
      <ToastContainer />
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card overflow-hidden">
                <div className="bg-primary bg-soft">
                  <div className="row">
                    <div className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back!</h5>
                        <p>Login to continue to Probitlive.</p>
                      </div>
                    </div>
                    <div className="col-5 align-self-end">
                      <img
                        src="assets/images/profile-img.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="auth-logo">
                    <Link to="/" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src="assets/images/logo-light.svg"
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>

                    <Link to="/" className="auth-logo-dark">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src="assets/images/logo.svg"
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <form className="form-horizontal" onSubmit={onSubmit}>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          id="username"
                          onChange={onChange}
                          value={username}
                          placeholder="Enter username"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-group auth-pass-inputgroup">
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                            onChange={onChange}
                            value={password}
                          />
                          <button
                            className="btn btn-light "
                            type="button"
                            id="password-addon"
                            onClick={viewPassword}
                          >
                            <i className="mdi mdi-eye-outline"></i>
                          </button>
                        </div>
                      </div>

                      {/* <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember-check"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="remember-check"
                        >
                          Remember me
                        </label>
                      </div> */}

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forget-password" className="text-muted">
                          <i className="mdi mdi-lock me-1"></i> Forgot your
                          password?
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <div>
                  <p>
                    Don't have an account?{" "}
                    <Link to="/register" className="fw-medium text-primary">
                      Register
                    </Link>
                  </p>
                  <p>© {new Date().getFullYear()} Probitlive. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end account-pages --> */}
    </>
  );
};

export default Login;

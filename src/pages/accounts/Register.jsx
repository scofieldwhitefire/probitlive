import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Register, checkEmaila } from "features/users";

import { ToastContainer, toast } from "react-toastify";
import DashboardHelmet from "components/Helmets/Dashboard";

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
  const { registered, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
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
    try {
      const res = await dispatch(checkEmaila({ email }));
      if (res.meta.requestStatus.toLowerCase() === "fulfilled") {
        if (res?.payload?.email === "found") {
          Toast("error", `${email} has been used, Try another`);
          setEE(!1);
        } else {
          setEE(!0);
        }
      }
    } catch (err) {}
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // await checkEmail(email);

    let pw = !0;
    let ce = !0;
    let res;
    if (first_name === null || first_name === "") {
      Toast("error", "First name is required");
      ce = !1;
    }
    if (last_name === null || last_name === "") {
      Toast("error", "Last name is required");
      ce = !1;
    }
    if (username === null || username === "") {
      Toast("error", "Username is required");
      ce = !1;
    }
    if (email === null || email === "") {
      Toast("error", "Email is required");
      ce = !1;
    }
    if (password === null || password === "") {
      Toast("error", "Password is required");
      ce = !1;
      pw = !1;
    }
    if (!pw && password !== confirmPassword)
      Toast("error", `Both passwords don't match`);

    ce && (await checkEmail(email));

    if (pw && ee && ce) {
      try {
        res = await dispatch(
          Register({ first_name, last_name, username, email, password })
        );
        if (res.meta.requestStatus.toLowerCase() === "rejected") {
          if (res.payload.statusText.toLowerCase() === "bad request") {
            Toast("error", `${res?.payload?.detail[0]}`);
          }
        } else {
          <Navigate to="/login" />;
        }
      } catch (err) {
        Toast("error", `Can't register you now, We are working to fix this.`);
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
                        <h5 className="text-primary">Free Register</h5>
                        <p>Get your free Probitlive account now.</p>
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
                  <div>
                    <Link to="/">
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
                    <form className="needs-validation" onSubmit={onSubmit}>
                      <div className="mb-3">
                        <label htmlFor="fname" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          value={first_name}
                          name="first_name"
                          onChange={onChange}
                          placeholder="Enter first name"
                        />
                        <div className="invalid-feedback">
                          Please Enter First Name
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="lname" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lname"
                          value={last_name}
                          name="last_name"
                          onChange={onChange}
                          placeholder="Enter last name"
                        />
                        <div className="invalid-feedback">
                          Please Enter Last Name
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          value={username}
                          name="username"
                          onChange={onChange}
                          placeholder="Enter username"
                        />
                        <div className="invalid-feedback">
                          Please Enter Username
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                          name="email"
                          onChange={onChange}
                          placeholder="Enter email"
                        />
                        <div className="invalid-feedback">
                          Please Enter Email
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
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
                          >
                            <i className="mdi mdi-eye-outline"></i>
                            {/* <i className="mdi mdi-eye-off-outline"></i> */}
                          </button>
                        </div>
                        <div className="invalid-feedback">
                          Please Enter Password
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          value={confirmPassword}
                          name="confirmPassword"
                          onChange={onChange}
                          placeholder="Confirm password"
                        />
                        <div className="invalid-feedback">
                          Please Confirm Password
                        </div>
                      </div>

                      <div className="mt-4 d-grid">
                        <button
                          className="btn btn-primary waves-effect waves-light"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          By registering you agree to the Probitlive{" "}
                          <Link to="#" className="text-primary">
                            Terms of Use
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <div>
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className="fw-medium text-primary">
                      Login
                    </Link>
                  </p>
                  <p>© {new Date().getFullYear()} Probitlive. </p>
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

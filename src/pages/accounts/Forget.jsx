import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Forget = () => {
  const [sent, setSent] = useState(!1);

  return (
    <>
      <div class="form-body without-side">
        <div class="website-logo">
          <a href="index-2.html">
            <div class="logo">
              <img class="logo-size" src="images/logo-light.svg" alt="" />
            </div>
          </a>
        </div>
        <div class="row">
          <div class="img-holder">
            <div class="bg"></div>
            <div class="info-holder">
              <img src="images/graphic3.svg" alt="" />
            </div>
          </div>
          <div class="form-holder">
            <div class="form-content">
              {/* {!sent ? ( */}
              <div class="form-items">
                <h3>Password Reset</h3>
                <p>
                  To reset your password, enter the email address you use to
                  register your account.
                </p>
                <form>
                  <input
                    class="form-control"
                    type="text"
                    name="username"
                    placeholder="E-mail Address"
                    required
                  />
                  <div class="form-button full-width">
                    <button id="submit" type="submit" class="ibtn btn-forget">
                      Send Reset Link
                    </button>
                  </div>
                </form>
                <div class="page-links" style={{ paddingTop: "15px" }}>
                  <Link to="/login">Back to login</Link>
                </div>
              </div>
              {/* ) : ( */}
              <div class="form-sent">
                <div class="tick-holder">
                  <div class="tick-icon"></div>
                </div>
                <h3>Password link sent</h3>
                <p>
                  Please check your inbox{" "}
                  <a
                    href="http://brandio.io/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="b9d0d6dfcbd4f9d0d6dfcbd4cddcd4c9d5d8cddc97d0d6"
                  >
                    [email&#160;protected]
                  </a>
                </p>
                <div class="info-holder">
                  <span>Couldn't find the message in your inbox? Check your spam folder.</span>
                  {/* <a href="#">We can help</a>. */}
                </div>
              </div>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;

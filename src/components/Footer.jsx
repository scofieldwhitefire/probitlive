import { Images } from 'assets/images';
import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <!-- rts footer area start --> */}
      <div className="rts-footer-area footer-one rts-section-gapTop bg-footer-one">
        <div className="container bg-shape-f1">
          {/* <!-- footer call to action area --> */}
          <div className="row">
            <div className="col-12">
              <div className="rts-cta-wrapper">
                <div className="background-cta">
                  <div className="row">
                    {/* <!-- cta-left --> */}
                    <div className="col-lg-6">
                      <div className="cta-left-wrapepr">
                        <p className="cta-disc">Latest Business Ideas</p>
                        <h3 className="title">Sign Up Newsletter</h3>
                      </div>
                    </div>
                    {/* <!-- cta left end --> */}
                    <div className="col-lg-6">
                      {/* <!-- cta right --> */}
                      <form className="cta-input-arae">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Email Address"
                          required
                        />
                        <button type="submit" className="rts-btn btn-primary">
                          Subscribe Now
                        </button>
                      </form>
                      {/* <!-- cta right End --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- footer call to action area End --> */}
          {/* <!-- rts footer area --> */}
          <div className="row pt--120 pt_sm--80 pb--80 pb_sm--40">
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized">
                <div className="wized-title">
                  <h5 className="title">Quick Links</h5>
                  <img src={Images.footerundertitle} alt="pro_footer" />
                </div>
                <div className="quick-link-inner">
                  <ul className="links">
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right"></i> Forum Support
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right"></i> Help & FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right"></i> Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right"></i> Pricing & Plans
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right"></i> Cookie Policy
                      </a>
                    </li>
                  </ul>
                  <ul className="links margin-left-70">
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right"></i> About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right"></i> My Account
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right"></i>Our Company
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-arrow-right"></i>Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- footer mid area --> */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized mid-bg">
                <div className="wized-title">
                  <h5 className="title">Opening Hours</h5>
                  <img src={Images.footerundertitle} alt="pro_footer" />
                </div>
                <div className="opening-time-inner">
                  <div className="single-opening">
                    <p className="day">Week Days</p>
                    <p className="time">09.00 - 24:00</p>
                  </div>
                  <div className="single-opening">
                    <p className="day">Saturday</p>
                    <p className="time">08:00 - 03.00</p>
                  </div>
                  <div className="single-opening mb--30 mb_sm--10">
                    <p className="day">Sunday</p>
                    <p className="time">Day Off</p>
                  </div>
                  <a href="#" className="rts-btn btn-primary contact-us">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- footer mid area end --> */}

            {/* <!-- footer end area post --> */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized margin-left-65">
                <div className="wized-title">
                  <h5 className="title">Popular Updates</h5>
                  <img src={Images.footerundertitle} alt="pro_footer" />
                </div>
                <div className="post-wrapper">
                  {/* <!-- single post --> */}
                  <div className="single-footer-post mb--30">
                    <div className="left-thumbnail">
                      <img src={Images.footerpost01} alt="pro_business-post" />
                    </div>
                    <div className="post-right">
                      <p>
                        {" "}
                        <i className="fal fa-clock"></i> 15th April, 2022
                      </p>
                      <a href="blog-details.html">
                        <h6 className="title">
                          Best Business Ideas For Getting Solution
                        </h6>
                      </a>
                      <a className="red-more" href="blog-details.html">
                        Read More<i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- single post End --> */}
                  {/* <!-- single post --> */}
                  <div className="single-footer-post">
                    <div className="left-thumbnail">
                      <img src={Images.footerpost02} alt="pro_business-post" />
                    </div>
                    <div className="post-right">
                      <p>
                        {" "}
                        <i className="fal fa-clock"></i> 15th April, 2022
                      </p>
                      <a href="blog-details.html">
                        <h6 className="title">
                          Best Business Ideas For Getting Solution
                        </h6>
                      </a>
                      <a className="red-more" href="blog-details.html">
                        Read More<i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- single post End --> */}
                </div>
              </div>
            </div>
            {/* <!-- footer end area post end--> */}
          </div>
          {/* <!-- rts footer area End --> */}
        </div>
        {/* <!-- copyright area start --> */}
        <div className="rts-copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <p>PROBITLIVE - Copyright 2022. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- copyright area end --> */}
      </div>
      {/* <!-- rts footer area end --> */}
    </>
  );
}

export default Footer
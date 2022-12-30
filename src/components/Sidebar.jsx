import { Logos } from 'assets/images';
import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div id="side-bar" className="side-bar">
        <button className="close-icon-menu">
          <i className="far fa-times"></i>
        </button>
        {/* <!-- inner menu area desktop start --> */}
        <div className="rts-sidebar-menu-desktop">
          <Link className="logo-1" to="/">
            <img className="logo" src={Logos.logo1} alt="pro_logo" />
          </Link>
          <Link className="logo-2" to="/">
            <img className="logo" src={Logos.logo4} alt="pro_logo" />
          </Link>
          <Link className="logo-3" to="/">
            <img className="logo" src={Logos.logo3} alt="pro_logo" />
          </Link>
          <Link className="logo-4" to="/">
            <img className="logo" src={Logos.logo5} alt="pro_logo" />
          </Link>
          <div className="body d-none d-xl-block">
            <p className="disc">
              We must explain to you how all seds this mistakens idea denouncing
              pleasures and praising account.
            </p>
            <div className="get-in-touch">
              {/* <!-- title --> */}
              <div className="h6 title">Get In Touch</div>
              {/* <!-- title End --> */}
              <div className="wrapper">
                {/* <!-- single --> */}
                <div className="single">
                  <i className="fas fa-phone-alt"></i>
                  <a href="#">+8801234566789</a>
                </div>
                {/* <!-- single ENd --> */}
                {/* <!-- single --> */}
                <div className="single">
                  <i className="fas fa-envelope"></i>
                  <a href="#">example@gmail.com</a>
                </div>
                {/* <!-- single ENd --> */}
                {/* <!-- single --> */}
                <div className="single">
                  <i className="fas fa-globe"></i>
                  <a href="#">www.webexample.com</a>
                </div>
                {/* <!-- single ENd --> */}
                {/* <!-- single --> */}
                <div className="single">
                  <i className="fas fa-map-marker-alt"></i>
                  <a href="#">13/A, New Pro State, NYC</a>
                </div>
                {/* <!-- single ENd --> */}
              </div>
              <div className="social-wrapper-two menu">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-whatsapp"></i>
                </a>
                {/* <!-- <a href="#"><i className="fab fa-linkedin"></i></a> --> */}
              </div>
            </div>
          </div>
          <div className="body-mobile d-block d-xl-none">
            <nav className="nav-main mainmenu-nav">
              <ul className="mainmenu">
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/plans">Price & Plan</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li >
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="social-wrapper-two menu mobile-menu">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              {/* <!-- <a href="#"><i className="fab fa-linkedin"></i></a> --> */}
            </div>
            <a
              href="#"
              className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
            >
              Login
            </a>
            <a
              href="#"
              className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
            >
              Register
            </a>
          </div>
        </div>
        {/* <!-- inner menu area desktop End --> */}
      </div>
    </>
  );
}

export default Sidebar
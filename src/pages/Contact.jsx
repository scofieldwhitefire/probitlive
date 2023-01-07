import { Images } from "assets/images";
import Footer from "components/Footer";
import Menu from "components/Menu";
import Sidebar from "components/Sidebar";
import TopBanner from "components/TopBanner";
import React from "react";
import HomeHelmet from "components/Helmets/HomeHelmet";

const Contact = () => {
  return (
    <>
      <HomeHelmet title={"Contact Us"} />
      {/* <!-- start header area --> */}
      {/* <!-- start header area --> */}
      <header className="header--sticky header-one ">
        <TopBanner />
        <Menu />
      </header>
      {/* <!-- End header area --> */}
      <Sidebar />
      <div id="anywhere-home"></div>
      {/* <!-- start breadcrumb area --> */}
      <div className="rts-breadcrumb-area breadcrumb-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1">
              <h1 className="title">Contact Us</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index-2.html">Home</a>
                <span> / </span>
                <a href="#" className="active">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb area --> */}
      {/* <!-- contact single area start --> */}
      <div className="rts-contact-area rts-section-gap">
        <div className="container">
          <div className="row g-5">
            {/* <!-- single contact area --> */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-contact-one-inner">
                <div className="thumbnail">
                  <img src={Images.contact01p} alt="" />
                </div>
                <div className="content">
                  <div className="icone">
                    <img src={Images.shape01s} alt="" />
                  </div>
                  <div className="info">
                    <span>Call Us 24/7</span>
                    <a href="tel:+18475555555">
                      <h5>+584 (25) 21453</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single contact area end --> */}
            {/* <!-- single contact area --> */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-contact-one-inner">
                <div className="thumbnail">
                  <img src={Images.contact02p} alt="" />
                </div>
                <div className="content">
                  <div className="icone">
                    <img src={Images.shape02s} alt="" />
                  </div>
                  <div className="info">
                    <span>MAke A Quote</span>
                    <a href="mailto:someone@example.com">
                      <h5>info@finbiz.com</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single contact area end --> */}
            {/* <!-- single contact area --> */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-contact-one-inner">
                <div className="thumbnail">
                  <img src={Images.contact03p} alt="" />
                </div>
                <div className="content">
                  <div className="icone">
                    <img src={Images.shape03s} alt="" />
                  </div>
                  <div className="info">
                    <span>Service Station</span>
                    <a href="#">
                      <h5>25 Hilton Street.</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single contact area end --> */}
          </div>
        </div>
      </div>
      {/* <!-- conact single area end --> */}
      {/* <!-- bizup map area start --> */}
      <div className="rts-contact-map-area">
        <div className="contaciner-fluid">
          <div className="row">
            <div className="col-12">
              <div className="contact-map-area-fluid">
                <iframe
                  className="contact-map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <img
                  className="location"
                  src={Images.location}
                  alt="Business_map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- bizup map area end --> */}
      {/* <!-- conact us form fluid start --> */}
      <div className="rts-contact-form-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-contact-fluid rts-section-gap">
                <div className="rts-title-area contact-fluid text-center mb--50">
                  <p className="pre-title">Get In Touch</p>
                  <h2 className="title">Needs Help? Let’s Get in Touch</h2>
                </div>
                <div className="form-wrapper">
                  <div id="form-messages"></div>
                  <form
                    id="contact-form"
                    action="https://reactheme.com/products/html/finbiz/mailer.php"
                    method="post"
                  >
                    <div className="name-email">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                    />
                    <textarea
                      placeholder="Type Your Message"
                      name="message"
                    ></textarea>
                    <button type="submit" className="rts-btn btn-primary">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- conact us form fluid end --> */}
      {/* <!-- start header area --> */}
      <Footer />
      {/* <!-- ENd Header Area --> */}
      {/* <!-- start loader --> */}
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      {/* <!-- End loader --> */}
      {/* <!-- progress Back to top --> */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* <!-- progress Back to top End --></div></> */}
    </>
  );
};

export default Contact;

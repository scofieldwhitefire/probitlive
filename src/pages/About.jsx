import { Images } from "assets/images";
import Footer from "components/Footer";
import Menu from "components/Menu";
import Sidebar from "components/Sidebar";
import TopBanner from "components/TopBanner";
import HomeHelmet from "components/Helmets/HomeHelmet";

const About = () => {
  return (
    <>
          <HomeHelmet title={"About Us"} />
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
              <h1 className="title">About Us</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index-2.html">Home</a>
                <span> / </span>
                <a href="#" className="active">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb area --> */}

      {/* <!-- rts about us section start --> */}
      <div className="rts-about-area rts-section-gap">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-image-v-inner">
                <div className="image-area">
                  <img
                    className="mt--110 img-1"
                    src={Images.about03}
                    alt="BUsiness_image"
                  />
                  <img
                    className="img-over"
                    src={Images.about04}
                    alt="BUsiness_image"
                  />
                  <div className="goal-button-wrapper">
                    <div className="vedio-icone">
                      <a id="play-video" className="video-play-button" href="#">
                        <span></span>
                      </a>
                      <div id="video-overlay" className="video-overlay">
                        <a className="video-overlay-close">×</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-progress-inner">
                <div className="title-area">
                  <span>JUST A CONSULTANCY</span>
                  <h2 className="title">
                    Get Consulting For Better Business Growth
                  </h2>
                </div>
                {/* <!-- inner start --> */}
                <div className="inner">
                  <p className="disc">
                    Dapibus curae risus rutrum curabitur nunc sociis nullam
                    nisl, aliquet quis iaculis scelerisque primis massa
                    imperdiet, dis senectus blandit aptent nulla cubilia sodales
                    convallis tortor pellentesque nulla.
                  </p>
                  <div className="rts-progress-one-wrapper">
                    <div className="single-progress">
                      <div className="progress-top">
                        <p className="progress-title">Business Strategy</p>
                        <span className="persectage">70%</span>
                      </div>
                      <div className="meter cadetblue">
                        <span data-progress="70" style={{width:"0"}}></span>
                      </div>
                    </div>
                    <div className="single-progress">
                      <div className="progress-top">
                        <p className="progress-title">Company Strength</p>
                        <span className="persectage">93%</span>
                      </div>
                      <div className="meter">
                        <span data-progress="93" style={{width:"0"}}></span>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="rts-btn btn-primary">
                    Make an Appointment
                  </a>
                </div>
                {/* <!-- end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- rts about us section end --> */}

      {/* <!-- rts services area start --> */}
      <div className="rts-service-area rts-section-gapBottom">
        <div className="container-fluid service-main about-service-width-controler">
          <div className="background-service service-three row">
            <div className="row g-5">
              <div className="rts-title-area service-four text-center pt--40 pt_md--0 mt_sm--0 mt_md--0">
                <p className="pre-title">Our Services</p>
                <h2 className="title">What We Provide</h2>
              </div>
              {/* <!-- start single Service --> */}
              <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80 mb_md--40 mb_sm--30">
                <div className="service-one-inner-four">
                  <div className="big-thumbnail-area">
                    <a href="#" className="thumbnail">
                      <img
                        src={Images.service07}
                        alt="Business-service"
                      />
                    </a>
                    <div className="content">
                      <img
                        src={Images.serviceicon13}
                        alt="Business-icon"
                      />
                      <h5 className="title">Business Consultancy</h5>
                      <p className="disc">
                        Aenean augue venenatis est porttitor fames aptent
                        lobortis nam potenti
                      </p>
                    </div>
                    <a href="service-details.html" className="over_link"></a>
                  </div>
                  <a href="service-details.html" className="rts-btn btn-primary">
                    {" "}
                    Read More<i className="fal fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- start single Service --> */}
              <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80 mb_md--40 mb_sm--30">
                <div className="service-one-inner-four">
                  <div className="big-thumbnail-area">
                    <a href="#" className="thumbnail">
                      <img
                        src={Images.service08}
                        alt="Business-service"
                      />
                    </a>
                    <div className="content">
                      <img
                        src={Images.serviceicon14}
                        alt="Business-icon"
                      />
                      <h5 className="title">Business Appoinment</h5>
                      <p className="disc">
                        Aenean augue venenatis est porttitor fames aptent
                        lobortis nam potenti
                      </p>
                    </div>
                    <a href="service-details.html" className="over_link"></a>
                  </div>
                  <a href="service-details.html" className="rts-btn btn-primary">
                    {" "}
                    Read More<i className="fal fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- start single Service --> */}
              <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80">
                <div className="service-one-inner-four">
                  <div className="big-thumbnail-area">
                    <a href="#" className="thumbnail">
                      <img
                        src={Images.service09}
                        alt="Business-service"
                      />
                    </a>
                    <div className="content">
                      <img
                        src={Images.serviceicon15}
                        alt="Business-icon"
                      />
                      <h5 className="title">Consultancy Foundation</h5>
                      <p className="disc">
                        Aenean augue venenatis est porttitor fames aptent
                        lobortis nam potenti
                      </p>
                    </div>
                    <a href="service-details.html" className="over_link"></a>
                  </div>
                  <a href="service-details.html" className="rts-btn btn-primary">
                    {" "}
                    Read More<i className="fal fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cta-one-bg col-12">
              <div className="cta-one-inner">
                <div className="cta-left">
                  <h3 className="title animated fadeIn">
                    Let’s discuss about how we can help make your business
                    better
                  </h3>
                </div>
                <div className="cta-right">
                  <a className="rts-btn btn-white" href="#">
                    Lets Work Togather
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- rts services area End --> */}


      {/* <!-- rts faq section area --> */}
      <div className="rts-faq-section rts-section-gap rts-faq-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-two-inner">
                <div className="title-area-faq">
                  <span className="sub">WHY CHOOSE US</span>
                  <h2 className="title">
                    We Are Experienced {' '}
                    <span className="sm-title">
                      Business <span>Solution</span>
                    </span>
                  </h2>
                </div>
                {/* <!-- faq accordion area --> */}
                <div className="faq-accordion-area">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span>01. </span> What should i included my personal
                          details?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Neque partrient nascetur facilisis suscipit ridiculus
                          agna lobortis imperdiet vivamus est aliquam euismod
                          nector quam convallis ornare justo service lifereu
                          visionary sources unleash online businesss solutions
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span>02. </span> Where i can find my business growth
                          result?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Neque partrient nascetur facilisis suscipit ridiculus
                          agna lobortis imperdiet vivamus est aliquam euismod
                          nector quam convallis ornare justo service lifereu
                          visionary sources unleash online businesss solutions
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span>03. </span> Did you get any business consultant?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Neque partrient nascetur facilisis suscipit ridiculus
                          agna lobortis imperdiet vivamus est aliquam euismod
                          nector quam convallis ornare justo service lifereu
                          visionary sources unleash online businesss solutions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- faq accordion area end --> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="thumbnail-faq-four">
                <img src={Images.faq02} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- rts faq section area End --> */}

      {/* <!-- customers feed back area start --> */}
      <div className="rts-customer-feedback-area rts-section-gap bg-customer-feedback">
        <div className="container">
          <div className="row">
            <div className="rts-title-area feedback team text-center">
              <p className="pre-title">Feedbacks</p>
              <h2 className="title">Customer Feedbacks</h2>
            </div>
          </div>
          <div className="row g-5 mt--20">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="testimopnial-wrapper-two">
                <div className="test-header">
                  <div className="thumbnail">
                    <img src={Images.testimonials02} alt="" />
                  </div>
                  <div className="name-desig">
                    <h5 className="title">David Smith</h5>
                    <span className="designation">Business Expert</span>
                  </div>
                </div>
                <div className="test-body">
                  <p className="disc">
                    “Parallel task user friendly convergence through supply are
                    chains type siflify reliable meta provide service visionary
                    sources unleash tactical thinking via granular intellectual
                    capital architect dynamic information value online business
                    solution services”
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="testimopnial-wrapper-two">
                <div className="test-header">
                  <div className="thumbnail">
                    <img src={Images.testimonials03} alt="" />
                  </div>
                  <div className="name-desig">
                    <h5 className="title">David Smith</h5>
                    <span className="designation">Business Expert</span>
                  </div>
                </div>
                <div className="test-body">
                  <p className="disc">
                    “Parallel task user friendly convergence through supply are
                    chains type siflify reliable meta provide service visionary
                    sources unleash tactical thinking via granular intellectual
                    capital architect dynamic information value online business
                    solution services”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- customers feed back area end --> */}

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

export default About;

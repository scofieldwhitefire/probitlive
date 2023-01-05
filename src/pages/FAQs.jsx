import { Images } from "assets/images";
import Footer from "components/Footer";
import Menu from "components/Menu";
import Sidebar from "components/Sidebar";
import TopBanner from "components/TopBanner";

const FAQs = () => {
  return (
    <>
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
              <h1 className="title">FAQs</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index-2.html">Home</a>
                <span> / </span>
                <a href="#" className="active">
                  FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb area --> */}

      {/* <!-- start customers faq section --> */}
      <div className="rts-faq-area rts-section-gap inner inner2">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 order-xl-1 order-md-2 order-sm-2 order-2">
              <div className="accordion-area inner inner2">
                <div className="title-area">
                  <span>Frequently Asked Questions </span>
                  <h2 className="title">All you need to know</h2>
                </div>
                <div className="accordion-one-inner inner">
                  <div className="accordion" id="accordionExample4">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span>01.</span> What should i included my personal
                          details?
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample4"
                      >
                        <div className="accordion-body">
                          Neque partrient sed nascetur facilisis suscipit
                          ridiculus magna lobortis imperdiet vivamus est aliquam
                          euismod nector quam convallis ornare justo service
                          visionary sources unleash online
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span>02.</span> Where i can find my business growth
                          result?
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample4"
                      >
                        <div className="accordion-body">
                          Neque partrient sed nascetur facilisis suscipit
                          ridiculus magna lobortis imperdiet vivamus est aliquam
                          euismod nector quam convallis ornare justo service
                          visionary sources unleash online
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span>03.</span> Did you get any business consultant?
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample4"
                      >
                        <div className="accordion-body">
                          Neque partrient sed nascetur facilisis suscipit
                          ridiculus magna lobortis imperdiet vivamus est aliquam
                          euismod nector quam convallis ornare justo service
                          visionary sources unleash online
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <span>04.</span> Did you get any business consultant?
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample4"
                      >
                        <div className="accordion-body">
                          Neque partrient sed nascetur facilisis suscipit
                          ridiculus magna lobortis imperdiet vivamus est aliquam
                          euismod nector quam convallis ornare justo service
                          visionary sources unleash online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{paddingTop: '100px'}}>
          <div className="cta-one-bg col-12">
            <div className="cta-one-inner">
              <div className="cta-left">
                <h3 className="title">
                  Let’s discuss about how we can help make your trading better
                </h3>
              </div>
              <div className="cta-right">
                <a className="rts-btn btn-white" href="appoinment.html">
                  Lets Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End customers faq section --> */}

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
    </>
  );
};

export default FAQs;

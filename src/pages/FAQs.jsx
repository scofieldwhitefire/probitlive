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
                        <a href="#" className="active">FAQs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- end breadcrumb area --> */}

        {/* <!-- rts faq section area --> */}
    <div className="rts-faq-section rts-section-gap rts-faq-bg bg_image">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="thumbnail-faq-four">
                        <img src="assets/images/faq/02.png" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq-two-inner">
                        <div className="title-area-faq">
                            <span className="sub">ACCORDION</span>
                            <h2 className="title">Accordion Style One</h2>
                        </div>
                        {/* <!-- faq accordion area --> */}
                        <div className="faq-accordion-area">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <span>01. </span> What should i included my personal details?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Neque partrient nascetur facilisis suscipit ridiculus agna lobortis
                                            imperdiet vivamus est aliquam euismod nector quam convallis ornare justo
                                            service lifereu visionary sources unleash online businesss solutions
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <span>02. </span> Where i can find my business growth result?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Neque partrient nascetur facilisis suscipit ridiculus agna lobortis
                                            imperdiet vivamus est aliquam euismod nector quam convallis ornare justo
                                            service lifereu visionary sources unleash online businesss solutions
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <span>03. </span> Did you get any business consultant?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Neque partrient nascetur facilisis suscipit ridiculus agna lobortis
                                            imperdiet vivamus est aliquam euismod nector quam convallis ornare justo
                                            service lifereu visionary sources unleash online businesss solutions
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- faq accordion area end --> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- rts faq section area End --> */}

    {/* <!-- start customers faq section --> */}
    <div className="rts-faq-area rts-section-gap inner">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-12 order-xl-1 order-md-2 order-sm-2 order-2">
                    <div className="accordion-area inner">
                        <div className="title-area">
                            <span>ACCORDION</span>
                            <h2 className="title">Accordion Style Two</h2>
                        </div>
                        <div className="accordion-one-inner">
                            <div className="accordion" id="accordionExample2">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <span>01.</span> What should i included my personal details?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <span>02.</span> Where i can find my business growth result?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <span>03.</span> Did you get any business consultant?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <span>04.</span> Did you get any business consultant?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End customers faq section --> */}
    {/* <!-- start customers faq section --> */}
    <div className="rts-faq-area rts-section-gap inner inner2">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-12 order-xl-1 order-md-2 order-sm-2 order-2">
                    <div className="accordion-area inner inner2">
                        <div className="title-area">
                            <span>ACCORDION</span>
                            <h2 className="title">Accordion Style Three</h2>
                        </div>
                        <div className="accordion-one-inner inner">
                            <div className="accordion" id="accordionExample4">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapseOne">
                                            <span>01.</span> What should i included my personal details?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample4">
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapseTwo">
                                            <span>02.</span> Where i can find my business growth result?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample4">
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapseThree">
                                            <span>03.</span> Did you get any business consultant?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample4">
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapseFour">
                                            <span>04.</span> Did you get any business consultant?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample4">
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End customers faq section --> */}
    <div className="rts-faq-area rts-section-gap inner">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-12 order-xl-1 order-md-2 order-sm-2 order-2">
                    <div className="accordion-area inner inner2">
                        <div className="title-area">
                            <span>ACCORDION</span>
                            <h2 className="title">Accordion Style Four</h2>
                        </div>
                        <div className="accordion-one-inner inner inner2">
                            <div className="accordion" id="accordionExample5">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapseOne">
                                            <span>01.</span> What should i included my personal details?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample5">
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapseTwo">
                                            <span>02.</span> Where i can find my business growth result?
                                        </button>
                                    </h2>
                                    <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample5">
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapseThree">
                                            <span>03.</span> Did you get any business consultant?
                                        </button>
                                    </h2>
                                    <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample5">
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapseFour">
                                            <span>04.</span> Did you get any business consultant?
                                        </button>
                                    </h2>
                                    <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample5">
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

import { useEffect, useState } from "react";
import "App.css";
import { Images, Logos } from "assets/images";
import HomeHelment from "components/HomeHelment";
import TopBanner from "components/TopBanner";
import Menu from "components/Menu";
import Sidebar from "components/Sidebar";
import Footer from "components/Footer";

const Home = () => {

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
      {/* <!-- ENd Header Area --> */}

      {/* <!-- banner blank space area --> */}
      <div className="rts-banner-area rts-banner-one">
        <div className="swiper mySwiper banner-one">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              {/* <!-- banner single content --> */}
              <div className="banner-one-inner text-start">
                <p className="pre-title">
                  <span>Welcome!</span> Start Growing Your Business Today
                </p>
                <h1 className="title ">
                  Make <span>Business Unique </span> <br />
                  With Great Ideas
                </h1>
                <p className="disc banner-para">
                  Porttitor ornare fermentum aliquam pharetra facilisis gravida
                  risus suscipit <br /> Dui feugiat fusce conubia ridiculus
                  tristique parturient
                </p>
                <a href="#" className="rts-btn btn-primary color-h-black">
                  Get Consultant
                </a>
                <img
                  className="shape-img one"
                  src={Images.shape01}
                  alt="banner_business"
                />
              </div>
              {/* <!-- banner single content end --> */}
            </div>
            <div className="swiper-slide two">
              {/* <!-- banner single content --> */}
              <div className="banner-one-inner text-start">
                <p className="pre-title">
                  <span>Welcome!</span> Start Growing Your Business Today
                </p>
                <h1 className="title ">
                  Launch <span>Ultra Modern</span> <br /> Effective Business
                </h1>
                <p className="disc banner-para">
                  Porttitor ornare fermentum aliquam pharetra facilisis gravida
                  risus suscipit <br /> Dui feugiat fusce conubia ridiculus
                  tristique parturient
                </p>
                <a href="#" className="rts-btn btn-primary color-h-black">
                  Get Consultant
                </a>
                <img
                  className="shape-img one"
                  src={Images.shape01}
                  alt="banner_business"
                />
              </div>
              {/* <!-- banner single content end --> */}
            </div>
            <div className="swiper-slide three">
              {/* <!-- banner single content --> */}
              <div className="banner-one-inner text-start">
                <p className="pre-title">
                  <span>Welcome!</span> Start Growing Your Business Today
                </p>
                <h1 className="title ">
                  Make <span>Business Growth</span> <br /> With Next Level
                </h1>
                <p className="disc banner-para">
                  Porttitor ornare fermentum aliquam pharetra facilisis gravida
                  risus suscipit <br /> Dui feugiat fusce conubia ridiculus
                  tristique parturient
                </p>
                <a href="#" className="rts-btn btn-primary color-h-black">
                  Get Consultant
                </a>
                <img
                  className="shape-img one"
                  src={Images.shape01}
                  alt="banner_business"
                />
              </div>
              {/* <!-- banner single content end --> */}
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="animation-img">
          <img
            className="shape-img two"
            src={Images.shape02}
            alt="banner_business"
          />
          <img
            className="shape-img three"
            src={Images.shape03}
            alt="banner_business"
          />
        </div>
      </div>
      {/* <!-- banner blank space area end --> */}
{/* <div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
      
  {
  "symbols": [
    {
      "proName": "FOREXCOM:SPXUSD",
      "title": "S&P 500"
    },
    {
      "proName": "FOREXCOM:NSXUSD",
      "title": "US 100"
    },
    {
      "proName": "FX_IDC:EURUSD",
      "title": "EUR/USD"
    },
    {
      "proName": "BITSTAMP:BTCUSD",
      "title": "Bitcoin"
    },
    {
      "proName": "BITSTAMP:ETHUSD",
      "title": "Ethereum"
    },
    {
      "description": "Litecoin",
      "proName": "BINANCE:LTCUSDT"
    },
    {
      "description": "Xrp",
      "proName": "BINANCE:XRPUSDT"
    }
  ],
  "showSymbolLogo": true,
  "colorTheme": "light",
  "isTransparent": false,
  "displayMode": "adaptive",
  "locale": "en"
}
  </script>
</div> */}


      {/* <!-- rts about us section start --> */}
      <div className="rts-about-area rts-section-gap bg-about-sm-shape">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* <!-- about left --> */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-2 order-sm-2 order-2 mt_md--50 mt_sm--50">
              <div className="rts-title-area">
                <p className="pre-title">More About Us</p>
                <h2 className="title">
                  We Provide The Best And Secure Platform
                </h2>
              </div>
              <div className="about-inner">
                <p className="disc">
                  Trade from Anywhere. Trading at your Fingertips. Compatible
                  with multiple devices, start trading with safety and
                  convenience.
                </p>
                {/* <!-- start about success area --> */}
                <div className="row about-success-wrapper">
                  {/* <!-- left wrapper start --> */}
                  <div className="col-lg-6 col-md-6">
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">24/7 Call Services Available</p>
                    </div>
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Great Skilled Consultant</p>
                    </div>
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Expert Team Members</p>
                    </div>
                  </div>
                  {/* <!-- left wrapper end --> */}
                  <div className="col-lg-6 col-md-6">
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">High Reliability</p>
                    </div>
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Live Technical Analysis</p>
                    </div>
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Raw spreads on Forex pairs</p>
                    </div>
                  </div>
                </div>
                {/* <!-- start about success area --> */}

                {/* <!-- about founder & get in touch start --> */}
                <div className="row about-founder-wrapper align-items-center mt--40">
                  {/* <!-- left area start --> */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="author-inner">
                      <a className="thumbnail" href="#">
                        <img src={Images.sm01} alt="pro_founder" />
                      </a>
                      <div className="founder-details">
                        <a href="team-details.html">
                          <h6 className="title">Adrew David</h6>
                        </a>
                        <span>CEO & Founder</span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- left area end --> */}
                  {/* <!-- right founder area --> */}
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_sm--20">
                    <div className="author-call-option">
                      <img
                        className="authore-call"
                        src={Images.call}
                        alt="call_founder"
                      />
                      <div className="call-details">
                        <span>Call us anytime</span>
                        <a href="tel:+18475555555">
                          <h6 className="title">+256 21458.2146</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- left founder area --> */}
                </div>
                {/* <!-- about founder & get in touch end --> */}
              </div>
            </div>
            {/* <!-- about right --> */}

            {/* <!-- about-right Start--> */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1">
              <div className="about-one-thumbnail">
                <img src={Images.about01} alt="about-finbiz" />
                <img
                  className="small-img"
                  src={Images.about02}
                  alt="pro-small"
                />
                <div className="experience">
                  <div className="left single">
                    <h2 className="title">10+</h2>
                    <p className="time">Years</p>
                  </div>
                  <div className="right single">
                    <p className="disc">
                      Of experience in consulting and trading
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- about-right end --> */}
          </div>
        </div>
      </div>
      {/* <!-- rts about us section end --> */}

      {/* <!-- rts service post area  Start--> */}
      <div className="rts-service-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-title-area service text-center">
                <p className="pre-title">Our Services</p>
                <h2 className="title">High Quality Services</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
          <div className="background-service row">
            {/* <!-- start single Service --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-one-inner one">
                <div className="thumbnail">
                  <img src={Images.icon01} alt="pro_service" />
                </div>
                <div className="service-details">
                  <a href="service-details.html">
                    <h5 className="title">FLEXIBLE TRADING</h5>
                  </a>
                  <p className="disc">
                    The latest trends in options trading: Digital Option,
                    Pending Orders, Trades Copying. Payouts up to 128%.
                  </p>
                  {/* <a
                    className="rts-read-more btn-primary"
                    href="service-details.html"
                  >
                    <i className="far fa-arrow-right"></i>Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- end single Services --> */}
            {/* <!-- start single Service --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-one-inner two">
                <div className="thumbnail">
                  <img src={Images.icon02} alt="pro_service" />
                </div>
                <div className="service-details">
                  <a href="service-details.html">
                    <h5 className="title">24/7 CUSTOMER SUPPORT</h5>
                  </a>
                  <p className="disc">
                    We provide 24/7 customer support through e-mail. Our support
                    representatives are always available to answer any
                    questions.
                  </p>
                  {/* <a
                    className="rts-read-more btn-primary"
                    href="service-details.html"
                  >
                    <i className="far fa-arrow-right"></i>Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- end single Services --> */}
            {/* <!-- start single Service --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-one-inner three">
                <div className="thumbnail">
                  <img src={Images.icon03} alt="pro_service" />
                </div>
                <div className="service-details">
                  <a href="service-details.html">
                    <h5 className="title">SAFE AND SECURE</h5>
                  </a>
                  <p className="disc">
                    We use the highest level of protection . Our website can
                    resists attacks of any size.With advanced security systems,
                    we keep your account always protected.
                  </p>
                  {/* <a
                    className="rts-read-more btn-primary"
                    href="service-details.html"
                  >
                    <i className="far fa-arrow-right"></i>Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- end single Services --> */}
            {/* <!-- start single Service --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-one-inner four">
                <div className="thumbnail">
                  <img src={Images.icon04} alt="pro_service" />
                </div>
                <div className="service-details">
                  <a href="service-details.html">
                    <h5 className="title">EXPERT TRADERS</h5>
                  </a>
                  <p className="disc">
                    Our highly skilled traders assist our clients in developing
                    a strong trading portfolio.
                  </p>
                  {/* <a
                    className="rts-read-more btn-primary"
                    href="service-details.html"
                  >
                    <i className="far fa-arrow-right"></i>Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- end single Services --> */}
            {/* <!-- start single Service --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-one-inner five">
                <div className="thumbnail">
                  <img src={Images.icon05} alt="pro_service" />
                </div>
                <div className="service-details">
                  <a href="service-details.html">
                    <h5 className="title">COVERED BY INSURANCE</h5>
                  </a>
                  <p className="disc">
                    All Investments in ProBitLive are insured with top Insurance
                    company.
                  </p>
                  {/* <a
                    className="rts-read-more btn-primary"
                    href="service-details.html"
                  >
                    <i className="far fa-arrow-right"></i>Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- end single Services --> */}
            {/* <!-- start single Service --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-one-inner six">
                <div className="thumbnail">
                  <img src={Images.icon06} alt="pro_service" />
                </div>
                <div className="service-details">
                  <a href="service-details.html">
                    <h5 className="title">INSTANT WITHDRAWALS</h5>
                  </a>
                  <p className="disc">
                    Our withdrawals are all processed instantly after they are
                    requested.
                  </p>
                  {/* <a
                    className="rts-read-more btn-primary"
                    href="service-details.html"
                  >
                    <i className="far fa-arrow-right"></i>Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- end single Services --> */}
          </div>
          <div className="row">
            <div className="cta-one-bg col-12">
              <div className="cta-one-inner">
                <div className="cta-left">
                  <h3 className="title">
                    Let’s discuss about how we can help make your trading
                    better
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
      </div>
      {/* <!-- rts service post area ENd --> */}

      {/* <!-- business goal area --> */}
      <div className="rts-business-goal mt--0 rts-section-gapBottom">
        <div className="container">
          <div className="row">
            {/* <!-- business goal left --> */}
            <div className="col-lg-6">
              <div className="business-goal-one">
                <img src={Images.goal01} alt="Business_Goal" />
                <img
                  className="small"
                  src={Images.goalsm01}
                  alt="Business_Goal"
                />
              </div>
            </div>
            {/* <!-- business goal right --> */}

            {/* <!-- right area business --> */}
            <div className="col-lg-6 mt--35 mt_md--70 mt_sm--70">
              <div className="business-goal-right">
                <div className="rts-title-area business text-start pl--30">
                  <p className="pre-title">JUST A CONSULTANCY</p>
                  <h2 className="title">
                    We know how to manage trading globally
                  </h2>
                </div>
                <div className="rts-business-goal pl--30">
                  <div className="single-goal">
                    <img
                      src={Images.goalicon01}
                      alt="business_Icone"
                      className="thumb"
                    />
                    <div className="goal-wrapper">
                      <h6 className="title">Best Business Consulting</h6>
                      <p className="disc">
                        We are trusted by a huge number of people. We are
                        working hard constantly to improve the level of our
                        security system and minimize possible risks.
                      </p>
                    </div>
                  </div>
                  <div className="single-goal">
                    <img
                      src={Images.goalicon02}
                      alt="business_Icone"
                      className="thumb"
                    />
                    <div className="goal-wrapper">
                      <h6 className="title">24/7 Customer Support</h6>
                      <p className="disc">
                        We provide 24/7 customer support through e-mail and
                        livechat. Our support representatives are available to
                        elucidate any difficulty.
                      </p>
                    </div>
                  </div>
                  <div className="goal-button-wrapper mt--70">
                    <a
                      href="contactus.html"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Contact Us
                    </a>
                    <div className="vedio-icone">
                      <a id="play-video" className="video-play-button" href="#">
                        <span></span>
                        <span className="outer-text">Watch Video</span>
                      </a>
                      <div id="video-overlay" className="video-overlay">
                        <a className="video-overlay-close">×</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- right area business ENd --> */}
          </div>
        </div>
      </div>
      {/* <!-- business goal area End --> */}

      {/* <!-- rts-counter up area start --> */}
      <div className="rts-counter-up-area rts-section-gap counter-bg">
        <div className="container">
          <div className="row">
            {/* <!-- counter up area --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-counter">
                <img src={Images.counterupicon01} alt="Business_counter" />
                <div className="counter-details">
                  <h2 className="title">
                    <span className="counter animated fadeInDownBig">858</span>
                  </h2>
                  <p className="disc">Successful Traders</p>
                </div>
              </div>
            </div>
            {/* <!-- counter up area --> */}
            {/* <!-- counter up area --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-counter pl--10 justify-content-center two pl--30">
                <img src={Images.counterupicon02} alt="Business_counter" />
                <div className="counter-details">
                  <h2 className="title">
                    <span className="counter animated fadeInDownBig">650</span>
                  </h2>
                  <p className="disc">Active Traders</p>
                </div>
              </div>
            </div>
            {/* <!-- counter up area --> */}
            {/* <!-- counter up area --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-counter pl--10 justify-content-center three pl--50">
                <img src={Images.counterupicon03} alt="Business_counter" />
                <div className="counter-details">
                  <h2 className="title">
                    <span className="counter animated fadeInDownBig">567</span>
                  </h2>
                  <p className="disc">Skilled Experts</p>
                </div>
              </div>
            </div>
            {/* <!-- counter up area --> */}
            {/* <!-- counter up area --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-counter pl--10 justify-content-end four">
                <img src={Images.counterupicon04} alt="Business_counter" />
                <div className="counter-details">
                  <h2 className="title happy">
                    <span className="counter animated fadeInDownBig">28</span>
                  </h2>
                  <p className="disc">Happy Clients</p>
                </div>
              </div>
            </div>
            {/* <!-- counter up area --> */}
          </div>
        </div>
      </div>
      {/* <!-- rts-counter up area end --> */}

      {/* <!-- start gallery section --> */}
      <div className="rts-gallery-area rts-section-gap gallery-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="rts-title-area gallery text-start pl_sm--20">
              <p className="pre-title">Popular Trades</p>
              <h2 className="title">Our Great Trades</h2>
            </div>
          </div>
          <div className="row mt--45">
            <div className="col-12">
              <div className="swiper mygallery mySwipers">
                <div className="swiper-wrapper gallery">
                  <div className="swiper-slide">
                    <div className="row g-5 w-g-100">
                      <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                        <div className="thumbnail-gallery">
                          <img
                            src={Images.gallerygallery01}
                            alt="business-images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                        <div className="bg-right-gallery">
                          <div className="icon">
                            <img
                              src={Images.galleryicon01}
                              alt="Business-gallery"
                            />
                          </div>
                          <a href="#">
                            <h4 className="title">Pro Business Solution</h4>
                          </a>
                          <span>Case Study, Growth</span>
                          <p className="disc">
                            Ornare etiam laoreet dictumst nisl quisque
                            scelerisque cras ut porta interdum purus mattis
                            iaculis litora turpis torquent posuere.
                          </p>
                          <a
                            className="rts-btn btn-primary"
                            href="project-details.html"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row g-5 w-g-100">
                      <div className="col-lg-7">
                        <div className="thumbnail-gallery">
                          <img
                            src={Images.gallerygallery02}
                            alt="business-images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="bg-right-gallery">
                          <div className="icon">
                            <img
                              src={Images.galleryicon01}
                              alt="Business-gallery"
                            />
                          </div>
                          <a href="#">
                            <h4 className="title">Finbiz Pro Business</h4>
                          </a>
                          <span>Case Study, Growth</span>
                          <p className="disc">
                            In the literal sense, the term “Business” means the
                            state of being busy. But it is a very wide
                            connotation of business.
                          </p>
                          <a
                            className="rts-btn btn-primary"
                            href="project-details.html"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row g-5 w-g-100">
                      <div className="col-lg-7">
                        <div className="thumbnail-gallery">
                          <img
                            src={Images.gallerygallery03}
                            alt="business-images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="bg-right-gallery">
                          <div className="icon">
                            <img
                              src={Images.galleryicon01}
                              alt="Business-gallery"
                            />
                          </div>
                          <a href="#">
                            <h4 className="title">Pro Solution Business</h4>
                          </a>
                          <span>Case Study, Growth</span>
                          <p className="disc">
                            But a very wide of business because it covers every
                            human activity. Business is really concerned with
                            the production.
                          </p>
                          <a
                            className="rts-btn btn-primary"
                            href="project-details.html"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- start gallery section --> */}

      {/* <!-- start trusted client section --> */}
      {/* <div className="rts-trusted-client rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-area-client text-center">
                <p className="client-title">Our Trusted Clients</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="client-wrapper-one">
              <a href="#">
                <img src={Images.client01} alt="business_finbiz" />
              </a>
              <a href="#">
                <img src={Images.client02} alt="business_finbiz" />
              </a>
              <a href="#">
                <img src={Images.client03} alt="business_finbiz" />
              </a>
              <a href="#">
                <img src={Images.client04} alt="business_finbiz" />
              </a>
              <a href="#">
                <img src={Images.client05} alt="business_finbiz" />
              </a>
              <a href="#">
                <img src={Images.client06} alt="business_finbiz" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- end trusted client section --> */}

      {/* <!-- start team section --> */}
      {/* <div className="rts-team-area rts-section-gap bg-team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-title-area team text-center">
                <p className="pre-title">Professionals Team</p>
                <h2 className="title">Professionals Team</h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--0">
            <div className="swiper mySwiperh1_team">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="team-single-one-start">
                    <div className="team-image-area">
                      <a href="team-details.html">
                        <img src={Images.tm01} alt="Business_Team_single" />
                        <div className="team-social">
                          <div className="main">
                            <i className="fal fa-plus"></i>
                          </div>
                          <div className="team-social-one">
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="single-details">
                      <a href="team-details.html">
                        <h5 className="title">Archer Graham</h5>
                      </a>
                      <p>Founder</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="team-single-one-start">
                    <div className="team-image-area">
                      <a href="team-details.html">
                        <img src={Images.tm02} alt="Business_Team_single" />
                        <div className="team-social">
                          <div className="main">
                            <i className="fal fa-plus"></i>
                          </div>
                          <div className="team-social-one">
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="single-details">
                      <a href="team-details.html">
                        <h5 className="title">Amelia Clover</h5>
                      </a>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="team-single-one-start">
                    <div className="team-image-area">
                      <a href="team-details.html">
                        <img src={Images.tm03} alt="Business_Team_single" />
                        <div className="team-social">
                          <div className="main">
                            <i className="fal fa-plus"></i>
                          </div>
                          <div className="team-social-one">
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="single-details">
                      <a href="team-details.html">
                        <h5 className="title">Beckett Hayden</h5>
                      </a>
                      <p>Deputy Manager</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="team-single-one-start">
                    <div className="team-image-area">
                      <a href="team-details.html">
                        <img src={Images.tm04} alt="Business_Team_single" />
                        <div className="team-social">
                          <div className="main">
                            <i className="fal fa-plus"></i>
                          </div>
                          <div className="team-social-one">
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="single-details">
                      <a href="team-details.html">
                        <h5 className="title">Julian Wyat</h5>
                      </a>
                      <p>Finance Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- end team section --> */}

      {/* <!-- rts features area start --> */}
      <div className="rts-team-area rts-section-gap">
        <div className="container-fluid padding-controler plr--120">
          <div className="row bg-white-feature  pt--120 pb--120">
            <div className="col-xl-6 col-lg-12">
              <div className="feature-left-area">
                <img src={Images.feature01} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="rts-title-area feature text-start pl--30 pl_sm--0">
                <p className="pre-title">Boost Your Portfolio Today</p>
                <h2 className="title feature-title">
                  Most Reliable Efficient <br />
                  Trading Company
                </h2>
                <p>
                  ProBitLive Limited, provides its clients with an opportunity
                  to invest money into mining farms located all around the world
                  to obtain quite a big income later.
                </p>
              </div>

              <div className="feature-one-wrapper pl--30 mt--40 pl_sm--0">
                <div className="single-feature-one">
                  <i className="fal fa-check"></i>
                  <p>Fast Growing Profits</p>
                </div>
                <div className="single-feature-one">
                  <i className="fal fa-check"></i>
                  <p>24/7 Quality Services</p>
                </div>
                <div className="single-feature-one">
                  <i className="fal fa-check"></i>
                  <p>Expert Traders</p>
                </div>
                <div className="single-feature-one">
                  <i className="fal fa-check"></i>
                  <p>Best Quality Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- rts features area end --> */}

      {/* <!-- start client feed back section --> */}
      <div className="rts-client-feedback">
        <div className="container">
          <div className="row">
            {/* <!-- start testimonials area --> */}
            <div className="col-lg-7">
              <div className="rts-title-area reviews text-start pl--30 pt--70">
                <p className="pre-title">Our Testimonials</p>
                <h2 className="title">Client’s Feedbacks</h2>

                {/* <!-- swiper area start --> */}
                <div className="swiper mySwipertestimonial">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-inner">
                        <p className="disc text-start">
                          “Consectetur adipiscing elit velit porta sapien purus
                          erat nec, a ornare laoreet sem gravida accumsan in
                          commodo aliquet nascetur maecenas. Sem tempus
                          hendrerit diam mauris leo magna sociosqu viverra,
                          accumsan massa tristique egestas cum sodales hac
                          lacinia feugiat scelerisque porttitor”
                        </p>
                        <div className="testimonial-bottom-one">
                          <div className="thumbnail">
                            <img
                              src={Images.testimonials02}
                              alt="business-testimonials"
                            />
                          </div>
                          <div className="details">
                            <a href="#">
                              <h5 className="title">David Smith</h5>
                            </a>
                            <span>JHKL Owner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-inner">
                        <p className="disc text-start">
                          “Consectetur adipiscing elit velit porta sapien purus
                          erat nec, a ornare laoreet sem gravida accumsan in
                          commodo aliquet nascetur maecenas. Sem tempus
                          hendrerit diam mauris leo magna sociosqu viverra,
                          accumsan massa tristique egestas cum sodales hac
                          lacinia feugiat scelerisque porttitor”
                        </p>
                        <div className="testimonial-bottom-one">
                          <div className="thumbnail">
                            <img
                              src={Images.testimonials02}
                              alt="business-testimonials"
                            />
                          </div>
                          <div className="details">
                            <a href="#">
                              <h5 className="title">David Smith</h5>
                            </a>
                            <span>JHKL Owner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-inner">
                        <p className="disc text-start">
                          “Consectetur adipiscing elit velit porta sapien purus
                          erat nec, a ornare laoreet sem gravida accumsan in
                          commodo aliquet nascetur maecenas. Sem tempus
                          hendrerit diam mauris leo magna sociosqu viverra,
                          accumsan massa tristique egestas cum sodales hac
                          lacinia feugiat scelerisque porttitor”
                        </p>
                        <div className="testimonial-bottom-one">
                          <div className="thumbnail">
                            <img
                              src={Images.testimonials02}
                              alt="business-testimonials"
                            />
                          </div>
                          <div className="details">
                            <a href="#">
                              <h5 className="title">David Smith</h5>
                            </a>
                            <span>JHKL Owner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
                {/* <!-- swiper area end --> */}
              </div>
            </div>
            {/* <!-- end testimonials are --> */}
            {/* <!-- images area --> */}
            <div className="col-lg-5">
              <div className="rts-test-one-image-inner">
                <img src={Images.testimonials01} alt="business_testimobials" />
              </div>
            </div>
            {/* <!-- image area end --> */}
          </div>
        </div>
      </div>
      {/* <!-- start client feed back section End --> */}

      {/* <!-- blog area start --> */}
      <div className="rts-blog-area rts-section-gap bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-area text-center">
                <span>Blog Posts</span>
                <h2 className="title">News & Updates</h2>
              </div>
            </div>
          </div>
          <div className="g-5 mt--20">
            <div className="swiper mySwiperh1_blog">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="single-blog-one-wrapper">
                    <div className="thumbnail">
                      <img src={Images.blog01} alt="business_Blog" />
                      <div className="blog-badge">
                        <span>25.05.2023</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <p>
                        <span>Business Solution </span>/ by David Dolean
                      </p>
                      <a href="blog-details.html">
                        <h5 className="title">
                          The quick settle tips of the new ages exist{" "}
                        </h5>
                      </a>
                      <a
                        className="rts-read-more btn-primary"
                        href="blog-details.html"
                      >
                        <i className="far fa-arrow-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-blog-one-wrapper">
                    <div className="thumbnail">
                      <img src={Images.blog02} alt="business_Blog" />
                      <div className="blog-badge">
                        <span>25.05.2023</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <p>
                        <span>Business Solution </span>/ by David Dolean
                      </p>
                      <a href="blog-details.html">
                        <h5 className="title">
                          Old generation settle tips of the new ages upps !{" "}
                        </h5>
                      </a>
                      <a
                        className="rts-read-more btn-primary"
                        href="blog-details.html"
                      >
                        <i className="far fa-arrow-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-blog-one-wrapper">
                    <div className="thumbnail">
                      <img src={Images.blog03} alt="business_Blog" />
                      <div className="blog-badge">
                        <span>25.05.2023</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <p>
                        <span>Business Solution </span>/ by David Dolean
                      </p>
                      <a href="blog-details.html">
                        <h5 className="title">
                          Monkey Form settle tips of the new ages end{" "}
                        </h5>
                      </a>
                      <a
                        className="rts-read-more btn-primary"
                        href="blog-details.html"
                      >
                        <i className="far fa-arrow-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- blog area end --> */}

      {/* <!-- contact area start --> */}
      <div className="rts-contact-area contact-one">
        <div className="container">
          <div className="row align-items-center g-0">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="contact-image-one">
                <img src={Images.contact01} alt="" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="contact-form-area-one">
                <div className="rts-title-area contact text-start">
                  <p className="pre-title">Contact Us</p>
                  <h2 className="title">Feel free to say Hello</h2>
                </div>
                <div id="form-messages"></div>
                <form
                  id="contact-form"
                  action="https://reactheme.com/products/html/finbiz/mailer.php"
                  method="post"
                >
                  <div className="name-email">
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Business Topic"
                    name="subject"
                  />
                  <textarea
                    placeholder="Type Your Message"
                    name="message"
                  ></textarea>
                  <button type="submit" className="rts-btn btn-primary">
                    Submit Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- contact area end --> */}

      {/* <!-- map area start --> */}
      <div className="rts-map-area bg-light-white">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* <!-- map area left --> */}
              <div className="mapdetails-inner-one">
                <div className="left-area single-wized">
                  <h5 className="title">Get in touch</h5>
                  <div className="details">
                    <p>Work and general inquiries</p>
                    <a className="number" href="#">
                      +3509.120-8605
                    </a>

                    <p className="time-header">Assistance hours:</p>
                    <p className="time">
                      Monday – Friday <br /> 6 am to 8 pm EST
                    </p>
                  </div>
                </div>
                <div className="right-area single-wized">
                  <h5 className="title">Post Address</h5>
                  <div className="details">
                    <p>Service Office</p>
                    <a href="#">
                      786 Dortans Ave, Otam Sites, <br />
                      CA 36108, United States
                    </a>

                    <p className="headoffice">Head Office</p>
                    <p className="office">142 Drive Lane. USA</p>
                  </div>
                </div>
              </div>
              {/* <!-- map area right --> */}
            </div>
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- map area end --> */}

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

export default Home;

import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// import "assets/css/dashboard/css/index.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardHelmet from "components/Helmets/Dashboard";
import { Images } from "assets/images";
import Footer from "components/Dashboard/Footer";
import Menu from "components/Dashboard/Menu";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  const Toast = (t, m) => {
    toast.clearWaitingQueue();
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

  if (!isAuthenticated) return <Navigate to="/login" />;
  return (
    <>
      <DashboardHelmet title="Dashboard" />
      <ToastContainer />
      {/* <!-- Begin page --> */}
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              {/* <!-- LOGO --> */}
              <div className="navbar-brand-box">
                <a href="index-2.html" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src="assets/images/logo.svg" alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-dark.png" alt="" height="17" />
                  </span>
                </a>

                <a href="index-2.html" className="logo logo-light">
                  <span className="logo-sm">
                    <img
                      src="assets/images/logo-light.svg"
                      alt=""
                      height="22"
                    />
                  </span>
                  <span className="logo-lg">
                    <img
                      src="assets/images/logo-light.png"
                      alt=""
                      height="19"
                    />
                  </span>
                </a>
              </div>

              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 header-item waves-effect"
                id="vertical-menu-btn"
              >
                <i className="fa fa-fw fa-bars"></i>
              </button>

              {/* <!-- App Search--> */}
              <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </form>

              {/* <div className="dropdown dropdown-mega d-none d-lg-block ms-2">
                            <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                <span key="t-megamenu">Mega Menu</span>
                                <i className="mdi mdi-chevron-down"></i> 
                            </button>
                            <div className="dropdown-menu dropdown-megamenu">
                                <div className="row">
                                    <div className="col-sm-8">
    
                                        <div className="row">
                                            <div className="col-md-4">
                                                <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                                                <ul className="list-unstyled megamenu-list">
                                                    <li>
                                                        <a href="#;" key="t-lightbox">Lightbox</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-range-slider">Range Slider</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-sweet-alert">Sweet Alert</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-rating">Rating</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-forms">Forms</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-tables">Tables</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-charts">Charts</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-md-4">
                                                <h5 className="font-size-14" key="t-applications">Applications</h5>
                                                <ul className="list-unstyled megamenu-list">
                                                    <li>
                                                        <a href="#;" key="t-ecommerce">Ecommerce</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-calendar">Calendar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-email">Email</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-projects">Projects</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-tasks">Tasks</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-contacts">Contacts</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-md-4">
                                                <h5 className="font-size-14" key="t-extra-pages">Extra Pages</h5>
                                                <ul className="list-unstyled megamenu-list">
                                                    <li>
                                                        <a href="#;" key="t-light-sidebar">Light Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-compact-sidebar">Compact Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-horizontal">Horizontal layout</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-maintenance">Maintenance</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-coming-soon">Coming Soon</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-timeline">Timeline</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-faqs">FAQs</a>
                                                    </li>
                            
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                                                <ul className="list-unstyled megamenu-list">
                                                    <li>
                                                        <a href="#;" key="t-lightbox">Lightbox</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-range-slider">Range Slider</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-sweet-alert">Sweet Alert</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-rating">Rating</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-forms">Forms</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-tables">Tables</a>
                                                    </li>
                                                    <li>
                                                        <a href="#;" key="t-charts">Charts</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-sm-5">
                                                <div>
                                                    <img src="assets/images/megamenu-img.png" alt="" className="img-fluid mx-auto d-block" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>  */}
            </div>

            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ms-2">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-magnify"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item waves-effect"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" height="16">
                            </button>
                            <div className="dropdown-menu dropdown-menu-end"> */}

              {/* <!-- item--> */}
              {/* <a href="#;" className="dropdown-item notify-item language" data-lang="en">
                                    <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">English</span />
                                </a> */}
              {/* <!-- item--> */}
              {/* <a href="#;" className="dropdown-item notify-item language" data-lang="sp">
                                    <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">Spanish</span />
                                </a> */}

              {/* <!-- item--> */}
              {/* <a href="#;" className="dropdown-item notify-item language" data-lang="gr">
                                    <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">German</span />
                                </a> */}

              {/* <!-- item--> */}
              {/* <a href="#;" className="dropdown-item notify-item language" data-lang="it">
                                    <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">Italian</span />
                                </a> */}

              {/* <!-- item--> */}
              {/* <a href="#;" className="dropdown-item notify-item language" data-lang="ru">
                                    <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height="12"> <span className="align-middle">Russian</span />
                                </a>
                            </div>
                        </div> */}

              {/* <div className="dropdown d-none d-lg-inline-block ms-1">
                            <button type="button" className="btn header-item noti-icon waves-effect"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-customize"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                <div className="px-lg-2">
                                    <div className="row g-0">
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/github.png" alt="Github" />
                                                <span>GitHub</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                                                <span>Bitbucket</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                                                <span>Dribbble</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="row g-0">
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                                                <span>Dropbox</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                                                <span>Mail Chimp</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/slack.png" alt="slack" />
                                                <span>Slack</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

              <div className="dropdown d-none d-lg-inline-block ms-1">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                  data-bs-toggle="fullscreen"
                >
                  <i className="bx bx-fullscreen"></i>
                </button>
              </div>

              <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-notifications-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-bell bx-tada"></i>
                  <span className="badge bg-danger rounded-pill">3</span>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-notifications-dropdown"
                >
                  <div className="p-3">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0" key="t-notifications">
                          {" "}
                          Notifications{" "}
                        </h6>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="small" key="t-view-all">
                          {" "}
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-simplebar style={{ maxHeight: "230px" }}>
                    <a href="#" className="text-reset notification-item">
                      <div className="d-flex">
                        <div className="avatar-xs me-3">
                          <span className="avatar-title bg-primary rounded-circle font-size-16">
                            <i className="bx bx-cart"></i>
                          </span>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1" key="t-your-order">
                            Your order is placed
                          </h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-grammer">
                              If several languages coalesce the grammar
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline"></i>{" "}
                              <span key="t-min-ago">3 min ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="text-reset notification-item">
                      <div className="d-flex">
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          className="me-3 rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                        <div className="flex-grow-1">
                          <h6 className="mb-1">James Lemire</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-simplified">
                              It will seem like simplified English.
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline"></i>{" "}
                              <span key="t-hours-ago">1 hours ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="text-reset notification-item">
                      <div className="d-flex">
                        <div className="avatar-xs me-3">
                          <span className="avatar-title bg-success rounded-circle font-size-16">
                            <i className="bx bx-badge-check"></i>
                          </span>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1" key="t-shipped">
                            Your item is shipped
                          </h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-grammer">
                              If several languages coalesce the grammar
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline"></i>{" "}
                              <span key="t-min-ago">3 min ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="#" className="text-reset notification-item">
                      <div className="d-flex">
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          className="me-3 rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                        <div className="flex-grow-1">
                          <h6 className="mb-1">Salena Layfield</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-occidental">
                              As a skeptical Cambridge friend of mine
                              occidental.
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline"></i>{" "}
                              <span key="t-hours-ago">1 hours ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 border-top d-grid">
                    <a
                      className="btn btn-sm btn-link font-size-14 text-center"
                      href="#"
                    >
                      <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                      <span key="t-view-more">View More..</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item waves-effect"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="rounded-circle header-profile-user"
                    src="assets/images/users/avatar-1.jpg"
                    alt="Header Avatar"
                  />
                  <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                    Henry
                  </span>
                  <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* <!-- item--> */}
                  <a className="dropdown-item" href="contacts-profile.html">
                    <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                    <span key="t-profile">Profile</span>
                  </a>
                  <a className="dropdown-item" href="crypto-wallet.html">
                    <i className="bx bx-wallet font-size-16 align-middle me-1"></i>{" "}
                    <span key="t-my-wallet">My Wallet</span>
                  </a>
                  <a className="dropdown-item" href="auth-lock-screen.html">
                    <i className="bx bx-lock-open font-size-16 align-middle me-1"></i>{" "}
                    <span key="t-lock-screen">Lock screen</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item text-danger"
                    href="auth-login.html"
                  >
                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                    <span key="t-logout">Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

          <Menu />

        {/* <!-- ============================================================== --> */}
        {/* <!-- Start right Content here --> */}
        {/* <!-- ============================================================== --> */}
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* <!-- start page title --> */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Dashboard</h4>

                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item active">Dashboard</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}

              <div className="dashboardScroller"></div>

              <div className="row">
                <div className="col-xl-4">
                  <div className="card overflow-hidden">
                    <div className="bg-danger bg-soft">
                      <div className="row">
                        <div className="col-7">
                          <div className="text-primarys p-3">
                            <h5 className="text-primarys">Welcome Back!</h5>
                            <p>
                              To Bitbing<span className="font-light">live</span>
                            </p>
                          </div>
                        </div>
                        <div className="col-5 align-self-end">
                          <img
                            src={Images.profileImg}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Chart</h4>
                      <div className="row">
                        <div className="col-sm-6 miniChart"></div>
                      </div>
                      <p className="text-muted mb-0">
                        We craft digital, graphic and dimensional thinking.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mini-stats-wid">
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <p className="text-muted fw-medium">Balance</p>
                              <h4 className="mb-0">1,235</h4>
                            </div>

                            <div className="flex-shrink-0 align-self-center">
                              <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                                <span className="avatar-title">
                                  <i className="bx bx-wallet-alt font-size-24"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mini-stats-wid">
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <p className="text-muted fw-medium">Profit</p>
                              <h4 className="mb-0">$35,723</h4>
                            </div>

                            <div className="flex-shrink-0 align-self-center ">
                              <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                                <span className="avatar-title rounded-circle bg-primary">
                                  <i className="bx bx-dollar-circle font-size-24"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mini-stats-wid">
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <p className="text-muted fw-medium">
                                Current Trade
                              </p>
                              <h4 className="mb-0">$16,452</h4>
                            </div>

                            <div className="flex-shrink-0 align-self-center">
                              <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                                <span className="avatar-title rounded-circle bg-primary">
                                  <i className="bx bx-line-chart font-size-24"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end row --> */}

                  <div className="card">
                    <div className="card-body">
                      <div className="d-sm-flex flex-wrap">
                        <h4 className="card-title mb-4">Live Charts</h4>
                        <div className="ms-auto">
                          <div className="col-sm-6">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Options <i className="mdi mdi-chevron-down"></i>
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <a className="dropdown-item" href="#">
                                  One
                                </a>
                                <a className="dropdown-item" href="#">
                                  Two
                                </a>
                                <a className="dropdown-item" href="#">
                                  Three
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="stacked-column-chart"
                        className="apex-charts"
                        dir="ltr"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end row --> */}

              <div className="row">
                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Activity</h4>
                      <ul className="verti-timeline list-unstyled">
                        <li className="event-list active">
                          <div className="event-timeline-dot">
                            <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                          </div>
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <h5 className="font-size-14">
                                22 Nov, 23
                                <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                              </h5>
                            </div>
                            <div className="flex-grow-1">
                              <div>Login [near - otto highway]</div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle font-size-18"></i>
                          </div>
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <h5 className="font-size-14">
                                17 Nov, 23
                                <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                              </h5>
                            </div>
                            <div className="flex-grow-1">
                              <div>Trade copied</div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle font-size-18"></i>
                          </div>
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <h5 className="font-size-14">
                                15 Nov, 23
                                <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                              </h5>
                            </div>
                            <div className="flex-grow-1">
                              <div>Withdrawal of $700 was successful</div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle font-size-18"></i>
                          </div>
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <h5 className="font-size-14">
                                12 Nov, 23
                                <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                              </h5>
                            </div>
                            <div className="flex-grow-1">
                              <div>Deposit of $2000 was successful [BTC]</div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="text-center mt-4">
                        <a
                          href="ecommerce-orders.html"
                          className="btn btn-primary waves-effect waves-light btn-sm"
                        >
                          View More <i className="mdi mdi-arrow-right ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Top Economic Chart</h4>

                      <div className="SecondChart"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end row --> */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body flex-wrap">
                      <div className="flex justify-end items-end">
                        <h4 className="card-title mb-4">Latest Trades</h4>
                        <div className="ms-auto mb-2">
                          <ul className="nav nav-pills">
                            <li className="nav-item">
                              <a className="nav-link active" href="#">
                                Closed Trades
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Open Trades
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="table align-middle table-nowrap mb-0">
                          <thead className="table-light">
                            <tr>
                              <th style={{ width: "20px" }}>
                                <div className="form-check font-size-16 align-middle">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="transactionCheck01"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="transactionCheck01"
                                  ></label>
                                </div>
                              </th>
                              <th className="align-middle">Time Stamp</th>
                              <th className="align-middle">Coin</th>
                              <th className="align-middle">Trade</th>
                              <th className="align-middle">Profit/loss</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="form-check font-size-16">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="transactionCheck02"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="transactionCheck02"
                                  ></label>
                                </div>
                              </td>
                              <td>
                                <a href="#" className="text-body fw-bold">
                                  #SK2540
                                </a>{" "}
                              </td>
                              <td>Neal Matthews</td>
                              <td>07 Oct, 2019</td>
                              <td>$400</td>
                              {/* <td>
                                 <!-- Button trigger modal -->
                                <button
                                  type="button"
                                  className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                  data-bs-toggle="modal"
                                  data-bs-target=".transaction-detailModal"
                                >
                                  View Details
                                </button>
                              </td>  */}
                            </tr>

                            <tr>
                              <td>
                                <div className="form-check font-size-16">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="transactionCheck03"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="transactionCheck03"
                                  ></label>
                                </div>
                              </td>
                              <td>
                                <a href="#" className="text-body fw-bold">
                                  #SK2541
                                </a>{" "}
                              </td>
                              <td>Jamal Burnett</td>
                              <td>07 Oct, 2019</td>
                              <td>$380</td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                      {/* <!-- end table-responsive --> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end row --> */}
            </div>
            {/* <!-- container-fluid --> */}
          </div>
          {/* <!-- End Page-content --> */}

          {/* <!-- Transaction Modal --> */}
          <div
            className="modal fade transaction-detailModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="transaction-detailModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="transaction-detailModalLabel">
                    Order Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p className="mb-2">
                    Product id: <span className="text-primary">#SK2540</span>
                  </p>
                  <p className="mb-4">
                    Billing Name:{" "}
                    <span className="text-primary">Neal Matthews</span>
                  </p>

                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <div>
                              <img
                                src="assets/images/product/img-7.png"
                                alt=""
                                className="avatar-sm"
                              />
                            </div>
                          </th>
                          <td>
                            <div>
                              <h5 className="text-truncate font-size-14">
                                Wireless Headphone (Black)
                              </h5>
                              <p className="text-muted mb-0">$ 225 x 1</p>
                            </div>
                          </td>
                          <td>$ 255</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div>
                              <img
                                src="assets/images/product/img-4.png"
                                alt=""
                                className="avatar-sm"
                              />
                            </div>
                          </th>
                          <td>
                            <div>
                              <h5 className="text-truncate font-size-14">
                                Phone patterned cases
                              </h5>
                              <p className="text-muted mb-0">$ 145 x 1</p>
                            </div>
                          </td>
                          <td>$ 145</td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            <h6 className="m-0 text-right">Sub Total:</h6>
                          </td>
                          <td>$ 400</td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            <h6 className="m-0 text-right">Shipping:</h6>
                          </td>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            <h6 className="m-0 text-right">Total:</h6>
                          </td>
                          <td>$ 400</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end modal --> */}

          {/* <!-- subscribeModal --> */}
          <div
            className="modal fade"
            id="subscribeModal"
            tabIndex="-1"
            aria-labelledby="subscribeModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-bottom-0">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="text-center mb-4">
                    <div className="avatar-md mx-auto mb-4">
                      <div className="avatar-title bg-light rounded-circle text-primary h1">
                        <i className="mdi mdi-email-open"></i>
                      </div>
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-xl-10">
                        <h4 className="text-primary">Subscribe !</h4>
                        <p className="text-muted font-size-14 mb-4">
                          Subscribe our newletter and get notification to stay
                          update.
                        </p>

                        <div className="input-group bg-light rounded">
                          <input
                            type="email"
                            className="form-control bg-transparent border-0"
                            placeholder="Enter Email address"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />

                          <button
                            className="btn btn-primary"
                            type="button"
                            id="button-addon2"
                          >
                            <i className="bx bxs-paper-plane"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end modal --> */}

          <Footer />
        </div>
        {/* <!-- end main content--> */}
      </div>
      {/* <!-- END layout-wrapper --> */}

      {/* <!-- Right bar overlay--> */}
      <div className="rightbar-overlay"></div>
    </>
  );
};

export default Dashboard;

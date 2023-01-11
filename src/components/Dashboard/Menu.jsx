import React from 'react'

const Menu = () => {
  return (
    <>
      {/* <!-- ========== Left Sidebar Start ========== --> */}
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {/* <!--- Sidemenu --> */}
          <div id="sidebar-menu">
            {/* <!-- Left Menu Start --> */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title" key="t-menu">
                Menu
              </li>

              <li>
                <a href="chat.html" className="waves-effect">
                  <i className="bx bx-home-circle"></i>
                  <span key="t-dashboards">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="chat.html" className="waves-effect">
                  <i className="bx bx-dollar-circle"></i>
                  <span key="t-market">Markets</span>
                </a>
              </li>
              <li>
                <a href="chat.html" className="waves-effect">
                  <i className="bx bx-copy-alt"></i>
                  <span key="t-trade">Copy Trade</span>
                </a>
              </li>
              <li>
                <a href="chat.html" className="waves-effect">
                  <i className="bx bx-money"></i>
                  <span key="t-deposit">Deposit</span>
                </a>
              </li>
              <li>
                <a href="chat.html" className="waves-effect">
                  <i className="bx bxs-bank"></i>
                  <span key="t-withdraw">Withdraw</span>
                </a>
              </li>
              <li>
                <a href="chat.html" className="waves-effect">
                  <i className="bx bx-chat"></i>
                  <span key="t-support">Support</span>
                </a>
              </li>

            </ul>
          </div>
          {/* <!-- Sidebar --> */}
        </div>
      </div>
      {/* <!-- Left Sidebar End --> */}
    </>
  );
}

export default Menu
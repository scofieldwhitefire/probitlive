import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
// import Login from "pages/Login";
// import Homex from "./pages/dashboard/Home";
// import { checkAuth } from "features/users";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Services from "pages/Services";
import Plans from "pages/Plans";
import FAQs from "pages/FAQs";
import Blogs from "pages/Blogs";
import BlogDetails from "pages/BlogDetails";
import About from "pages/About";
import Contact from "pages/Contact";
import NotFound from "pages/NotFound";
import Login from "pages/accounts/Login";
import Register from "pages/accounts/Register";
import Forget from "pages/accounts/Forget";
import Dashboard from "pages/dashboard/Dashboard";
import { checkAuth } from "features/users";
import CopyTrading from "pages/CopyTrading";
import ForexTrading from "pages/ForexTrading";
import StockTrading from "pages/StockTrading";
import CryptoTrading from "pages/CryptoTrading";
import Terms from "pages/Terms";
import Policy from "pages/Policy";

const js = [
  { path: "js/vendor", file: "jquery.min.js" },
  { path: "js/vendor", file: "jqueryui.js" },
  { path: "js/vendor", file: "waypoint.js" },
  { path: "js/plugins", file: "swiper.js" },
  { path: "js/plugins", file: "counterup.js" },
  { path: "js/plugins", file: "sal.min.js" },
  { path: "js/vendor", file: "bootstrap.min.js" },
  { path: "js/plugins", file: "contact.form.js" },
  { path: "js", file: "main.js" },
  { path: "js", file: "init.js" },
];

const js2 = [
  { path: "js/vendor", file: "jquery.min.js" },
  { path: "js/login", file: "main.js" },
];

const js3 = [
  { path: "js/dashboard/libs/jquery", file: "jquery.min.js" },
  { path: "js/dashboard/libs/bootstrap/js", file: "bootstrap.bundle.min..js" },
  { path: "js/dashboard/libs/metismenu", file: "metisMenu.min.js" },
  { path: "js/dashboard/libs/simplebar", file: "simplebar.min.js" },
  { path: "js/dashboard/libs/node-waves", file: "waves.min.js" },
  { path: "js/dashboard/libs/apexcharts", file: "apexcharts.min.js" },
  { path: "js/dashboard/js/pages", file: "dashboard.init.js" },
  { path: "js/dashboard/js", file: "app.js" },
];

const App = () => {
  const dispatch = useDispatch();
  const [ch2] = useState(!0);
  let location = useLocation();

  
  const AddScript = (x, y) => {
    if (!document.querySelector(`[src="/assets/${x}/${y}"]`)) {
      const script = document.createElement("script");
      script.src = `/assets/${x}/${y}`;
      script.async = !1;
      // document.body.appendChild(script);
    document.getElementById("scripts").appendChild(script);
    }
  };

  useEffect(() => {
    document.getElementById("scripts").innerHTML = "";
    if (
      location.pathname.includes("/login") ||
      location.pathname.includes("/register") ||
      location.pathname.includes("/forget-password")
      ) {
      for (let i = 0; i < js2.length; i++) {
        AddScript(js2[i].path, js2[i].file);
      }
    } else if (location.pathname.includes("/dashboard")) {
      for (let i = 0; i < js3.length; i++) {
        AddScript(js3[i].path, js3[i].file);
      }
    } else {
      for (let i = 0; i < js.length; i++) {
        AddScript(js[i].path, js[i].file);
      }
    }
  }, [location]);

  useEffect(() => {
    dispatch(checkAuth());
  }, [ch2]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogname" element={<BlogDetails />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Trading */}
        <Route path="/copy-trading" element={<CopyTrading />} />
        <Route path="/forex-trading" element={<ForexTrading />} />
        <Route path="/stock-trading" element={<StockTrading />} />
        <Route path="/crypto-trading" element={<CryptoTrading />} />
        <Route path="/options-trading" element={<CryptoTrading />} />
        {/* T&C / Policies */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        {/* Account */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<Forget />} />
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/account" element={<Homex />} /> */}
      </Routes>
    </>
  );
};

export default App;

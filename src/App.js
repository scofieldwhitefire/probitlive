import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
];

const App = () => {
  const dispatch = useDispatch();
    const [ch, setCh] = useState(!0);

    const AddScript = (x, y) => {
      if (!document.querySelector(`[src="/assets/${x}/${y}"]`)) {
        const script = document.createElement("script");
        script.src = `/assets/${x}/${y}`;
        script.async = !1;
        document.body.appendChild(script);
      }
    };

    useEffect(() => {
      for (let i = 0; i < js.length; i++) {
        AddScript(js[i].path, js[i].file);
      }
    }, [ch]);

  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, [ch]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogname" element={<BlogDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/account" element={<Homex />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;

// src/AppRoutes.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Contactus from "./pages/Contactus";
import PublicRoutes from "./routes/PublicRoutes";
import OurProducts from "./pages/services/OurProducts";
// import PlaySchoolWallArt from "./pages/services/PlaySchoolWallArt";
import ProductDetail from "./pages/services/ProductDetail";
import ScrollToTop from "./components/common/ScroolTotop";
import SiteMap from "./pages/SiteMap";
 
function AppRoutes() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        {/* All public pages */}
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contactus />} /> 
          <Route path="/products" element={<OurProducts/>}/>
          <Route path="/product/:category/:title" element={<ProductDetail />} />
          <Route path="/sitemap" element={<SiteMap/>}/>
          {/* Catch-all: redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;

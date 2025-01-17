// 

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import WhoAreWe from "./WhoAreWe";
import Campaign from "./Campaign";
import Founder from "./Founder";
import CTA from "./CTA";
import Faq from "./Faq";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  // Check if the current route is "/donation"
  const isDonationPage = location.pathname === "/donation";

  return (
    <div>
      <Nav />
      {isDonationPage ? (
        // Render only the child route (Donation page) for "/donation"
        <Outlet />
      ) : (
        // Render the main layout for other routes
        <>
          <Home />
          <WhoAreWe />
          <Campaign />
          <Founder />
          <CTA />
          <Faq />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Layout;

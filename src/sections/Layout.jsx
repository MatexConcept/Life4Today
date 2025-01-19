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
 return (
    <div>
      {/* Navbar */}
      <Nav />

      {/* Sections */}
      <section id="home">
        <Home />
      </section>
      
      <section id="who-we-are">
        <WhoAreWe />
      </section>
      
      <section id="our-campaign">
        <Campaign />
      </section>
      
      <section id="founder">
        <Founder />
      </section>
      
      <section id="cta">
        <CTA />
      </section>
      
      <section id="faq">
        <Faq />
      </section>
      
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Layout;




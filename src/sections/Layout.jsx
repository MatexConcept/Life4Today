// 

import React, { useState, useEffect } from "react";
// import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import WhoAreWe from "./WhoAreWe";
import Campaign from "./Campaign";
import Founder from "./Founder";
import CTA from "./CTA";
import Faq from "./Faq";
import Footer from "./Footer";
import Loader from "./Loader/Loader"

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Loader color="#3498db" size={50} /> {/* Customize as needed */}
      </div>
    );
  }
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




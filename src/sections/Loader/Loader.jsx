import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="card">
        <div className="loader">
          <p>Loading</p>
          <div className="words">
          <span className="word">Generosity</span>
            <span className="word">Kindness</span>
            <span className="word">Hope</span>
            <span className="word">Compassion</span>
            <span className="word">Support</span>
       
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
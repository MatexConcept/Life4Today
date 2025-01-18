//
import React from "react";
import Layout from "../src/sections/Layout";
import Donation from "../src/sections/Donation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/donation" element={<Donation />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

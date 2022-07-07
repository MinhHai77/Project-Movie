import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import HeroSection from "../HeroSection";

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <HeroSection />
    </>
  );
};

export default HomePage;

import { Outlet } from "react-router-dom";

import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Carouse from "../Page/Carouse";
import { getMovieBanner, getTrailerBanner } from "../reducers/banner";
import { useDispatch } from "react-redux";
import Index from "../Page/test";
const HomeTemplates = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieBanner());
    dispatch(getTrailerBanner());
  }, []);
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Carouse />
      <Outlet />
    </div>
  );
};

export default HomeTemplates;

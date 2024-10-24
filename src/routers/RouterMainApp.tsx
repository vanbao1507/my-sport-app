import React from "react";
import NavBar from "../components/NavBar";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import DatSanForm from "../Pages/FootballFieldPage";

const RouterMainApp = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Các route của ứng dụng */}
        <Route path="/" element={<HomePage />} />
        <Route path="/football-field" element={<DatSanForm />} />
      </Routes>
    </>
  );
};

export default RouterMainApp;

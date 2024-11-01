import React from "react";
// import NavBar from "../components/NavBar";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import DatSanForm from "../Pages/FootballFieldPage";
import AdminPage from "../Pages/AdminPage";
import AdminUserList from "../Pages/AdminUserList";
import LoginPage from "../Pages/LoginPage";

const RouterMainApp = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        {/* Các route của ứng dụng */}
        <Route path="/" element={<HomePage />} />
        <Route path="/football-field" element={<DatSanForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/User" element={<AdminUserList />} />
      </Routes>
    </>
  );
};

export default RouterMainApp;

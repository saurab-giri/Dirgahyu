/* eslint-disable react/prop-types */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage, HomePage, Login } from "../pages";

// import { useSelector } from "react-redux";
// import { Routes, Route, Navigate, Outlet } from "react-router-dom";
// const ProtectedRoute = ({ children, redirectPath = "/login" }) => {
//   const login = useSelector((state) => state.login.userAuthenticate);
//   // console.log(login);
//   if (!login) {
//     return <Navigate to={redirectPath} replace />;
//   }
//   return (
//     <>
//       {children}
//       <Outlet />
//     </>
//   );
// };

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default AppRoute;

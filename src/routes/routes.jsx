import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "../pages/Error";
import Search from "../pages/Search";
import User from "../pages/User";

const RoutesNav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route exact path="/user/:username" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesNav;

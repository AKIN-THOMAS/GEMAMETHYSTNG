import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const GlobalLayout = () => {
  return (
    <>
      <NavBar />
      <div style={{ height: "100vh" }}>
        <div style={{ height: "100%", overflowY: "scroll" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default GlobalLayout;

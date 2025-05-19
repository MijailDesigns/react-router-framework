import React from "react";
import { Outlet } from "react-router";

const AutLayout = () => {
  return (
    <div>
      <h1>AuthLayout</h1>
      <Outlet />
    </div>
  );
};

export default AutLayout;

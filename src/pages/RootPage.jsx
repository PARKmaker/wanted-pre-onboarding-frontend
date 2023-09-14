import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Layout/MainNavigation";

import classes from "./RootPage.module.css";

const RootPage = () => {
  return (
    <div className={classes["app-container"]}>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootPage;

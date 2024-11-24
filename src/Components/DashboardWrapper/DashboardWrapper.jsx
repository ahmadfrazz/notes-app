import React from "react";
import LeftNav from "./LeftNav";

function DashboardWrapper({ children }) {
  return <LeftNav children={children} />;
}

export default DashboardWrapper;

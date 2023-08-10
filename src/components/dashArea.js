import React from "react";

import ProjectList from "./ProjectList";
import WorkList from "./WorkList";
import HomePage from "./HomePageComponent";

const DashArea = () => {
  return (
    <div className="h-full w-full relative font-arapey">
      <HomePage />
      <WorkList />
      <ProjectList />
    </div>
  );
};
export default DashArea;

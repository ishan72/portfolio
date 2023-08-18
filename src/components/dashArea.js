import React from "react";

import ProjectList from "./ProjectList";
import WorkList from "./WorkList";
import HomePage from "./HomePageComponent";
import AboutComponent from "./AboutComponent";

const DashArea = () => {
  return (
    <div className="h-full w-full relative font-arapey">
      <HomePage />
      <AboutComponent />
      <WorkList />
      <ProjectList />
    </div>
  );
};
export default DashArea;

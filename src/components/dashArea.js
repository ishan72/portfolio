import React from "react";

import ProjectList from "./ProjectList";
import WorkList from "./WorkList";
import HomePage from "./HomePageComponent";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";

const DashArea = () => {
  return (
    <div className="h-full w-full relative font-arapey">
      <HomePage />
      <AboutComponent />
      <WorkList />
      <ProjectList />
      <ContactComponent />
    </div>
  );
};
export default DashArea;

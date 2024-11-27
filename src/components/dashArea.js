import React from "react";
import HomePage from "./HomePageComponent";
import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";

const DashArea = () => {
  return (
    <div className="h-auto font-arapey">
      <section id="home">
        <HomePage />
      </section>
      <section id="skills">
        <SkillSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
    </div>
  );
};
export default DashArea;

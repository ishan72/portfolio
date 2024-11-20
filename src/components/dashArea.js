import React from "react";
import HomePage from "./HomePageComponent";
import SkillSection from "./sections/SkillSection";
import Container from "../UI/Container";
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
      <section id="experience">
        <ProjectSection/>
       
      </section>
    </div>
  );
};
export default DashArea;

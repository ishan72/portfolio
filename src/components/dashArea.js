import React from "react";
import HomePage from "./HomePageComponent";
import SkillSection from "./sections/SkillSection";

const DashArea = () => {
  return (
    <div className="h-auto font-arapey">
      <section id="home">
        <HomePage />
      </section>
      <section id="skills">
        <SkillSection />
      </section>
    </div>
  );
};
export default DashArea;

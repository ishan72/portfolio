import React from "react";
import HomePage from "./HomePageComponent";
import SkillSection from "./sections/SkillSection";
import Container from "../UI/Container";

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
        <Container index={3} title={"PROJECT"}>
          <div className="w-2/3 h-full text-white flex justify-center items-center bg-gray-300">
            <p>Ishan Dahal</p>
          </div>
        </Container>
      </section>
    </div>
  );
};
export default DashArea;

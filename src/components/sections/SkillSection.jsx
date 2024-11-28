import React from "react";
import { skills } from "../../constant/Information";
import Container from "../../UI/Container";
import BoxComponent from "../../UI/BoxComponent";

function SkillSection() {
  return (
    <Container index={2} title={"SKILLS"}>
      <div className="w-5/6 justify-center items-center xl:w-full flex flex-wrap gap-8">
        {skills.map((item, index) => {
          return (
            <div className="hover:bg-[radial-gradient(circle,_rgb(183,183,183,0.3)_40%,_#42b883_70%)]">
              <BoxComponent
                key={index}
                itemName={item.name}
                imageName={item.image}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default SkillSection;

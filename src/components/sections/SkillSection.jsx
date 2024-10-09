import React from "react";
import { skills } from "../../constant/Information";

function SkillSection() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-bl from-white via-green-400 to-white">
      <div className="text-4xl italic text-center">SKILLS</div>
      <div className="flex-1 flex justify-center items-center">
        <div className="w-2/3 flex flex-wrap gap-8">
          {skills.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center space-x-2 p-4 bg-whiteGreen to-text1 rounded-2xl"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <p className="text-black text-2xl">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillSection;

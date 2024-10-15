import React from "react";
import { skills } from "../../constant/Information";

function SkillSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-32 bg-gradient-to-bl from-white via-green-400 to-white">
      <div className="text-4xl italic text-center">SKILLS</div>
      <div className="w-5/6 justify-center items-center xl:w-2/3 flex flex-wrap gap-8">
        {skills.map((item, index) => {
          let dynamicWidth = "50px";
          let dynamicHeight = "50px";

          return (
            <div
              key={index}
              className={`flex items-center space-x-2 
                 p-4 bg-whiteGreen to-text1 rounded-2xl cursor-pointer`}
            >
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: dynamicWidth, height: dynamicHeight }}
                />
              </div>
              <p className="hidden md:block text-black text-2xl">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillSection;

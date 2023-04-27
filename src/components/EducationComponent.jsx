import React from "react";
import logo from "../assets/dearborn.png";
import logo2 from "../assets/xavier.png";
function EducationComponent() {
  return (
    <div className="absolute top-8 left-36 transform text-white flex space-x-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          class="w-full h-36 object-fill"
          src={logo}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-black">
            Masters in Computer and Information Science
          </div>
          <p className="text-gray-700 text-base">
            University of Michigan-Dearborn
          </p>
          <p className="text-xs">4901 Evergreen Rd, Dearborn, MI 48128</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-row justify-between text-black">
          <p>
            <strong>From:</strong> Aug, 2022
          </p>
          <p>
            <strong>To:</strong> Est. Apr, 2024
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-36 object-contain"
          src={logo2}
          alt="xavier college, nepal"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-black">
            Bachelors in Computer and Information Science
          </div>
          <p className="text-gray-700 text-base">St. Xavier's College</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-row justify-between text-black">
          <p>
            <strong>From:</strong> Aug, 2015
          </p>
          <p>
            <strong>To:</strong> Apr, 2019
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationComponent;
